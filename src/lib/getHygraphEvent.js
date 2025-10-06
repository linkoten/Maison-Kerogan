import { gql } from "graphql-request";
import hygraphClient from "./hygraph";

// Récupérer le prochain événement à afficher
export const getFeaturedEvent = async () => {
  const query = gql`
    query GetFeaturedEvent {
      events(
        where: { showEvent: true }
        orderBy: date_ASC
        first: 1
        stage: PUBLISHED
      ) {
        id
        title
        description
        date
        startTime
        endTime
        reservationLink
        coverImage {
          url
          fileName
          handle
        }
      }
    }
  `;

  try {
    const data = await hygraphClient.request(query);
    const event = data.events[0];

    if (!event) return null;

    // Transformer le tableau de dates en chaîne simple
    if (event.date && Array.isArray(event.date)) {
      event.date = event.date[0]; // Prendre le premier élément
    }

    // Filtrer côté client pour les dates futures
    const eventDate = new Date(event.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset l'heure pour comparer seulement les dates

    if (eventDate >= today) {
      return event;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de l'événement:", error);
    return null;
  }
};

// Récupérer tous les événements futurs à afficher
export const getAllEvents = async () => {
  const query = gql`
    query GetAllEvents {
      events(where: { showEvent: true }, orderBy: date_ASC, stage: PUBLISHED) {
        id
        title
        description
        date
        startTime
        endTime
        reservationLink
        coverImage {
          url
          fileName
          handle
        }
      }
    }
  `;

  try {
    const data = await hygraphClient.request(query);

    // Transformer les tableaux de dates et filtrer les événements futurs
    const events = data.events
      .map((event) => {
        if (event.date && Array.isArray(event.date)) {
          event.date = event.date[0]; // Prendre le premier élément
        }
        return event;
      })
      .filter((event) => {
        const eventDate = new Date(event.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return eventDate >= today;
      });

    return events;
  } catch (error) {
    console.error("Erreur lors de la récupération des événements:", error);
    return [];
  }
};
