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
    return [];
  }
};

// ======================== NOUVEAUX MODÈLES ========================

// Récupérer LocationEvenementielle
export const getLocationEvenementielle = async () => {
  const query = gql`
    query GetLocationEvenementielle {
      locationEvenementielles(stage: PUBLISHED) {
        id
        title
        slug
        part1
        paragraphe1
        paragraphe2
        images {
          id
          fileName
          size
          mimeType
          url
          width
          height
          handle
        }
        journees
        horaires
        extrait
        part2
        part2Paragraphe1
        part2Paragraphe2
        part2Images {
          id
          fileName
          size
          mimeType
          url
          width
          height
          handle
        }
        part2Journees
        part2Horaires
        part3
        part3Paragraphe1
        part3Paragraphe2
        part3Images {
          id
          fileName
          size
          mimeType
          url
          width
          height
          handle
        }
      }
    }
  `;

  try {
    const data = await hygraphClient.request(query);
    return data.locationEvenementielles;
  } catch (error) {
    return [];
  }
};

// Récupérer LocationEvenementielle par slug - VERSION CORRIGÉE
export const getLocationEvenementielleBySlug = async (slug) => {
  const query = gql`
    query GetLocationEvenementielleBySlug($slug: String!) {
      locationEvenementielle(where: { slug: $slug }, stage: PUBLISHED) {
        id
        title
        slug
        part1
        paragraphe1
        paragraphe2

        images {
          id
          fileName
          size
          mimeType
          url
          width
          height
          handle
        }

        journees
        horaires
        extrait
        part2
        part2Paragraphe1
        part2Paragraphe2
        part2Images {
          id
          fileName
          size
          mimeType
          url
          width
          height
          handle
        }
      }
    }
  `;

  try {
    const data = await hygraphClient.request(query, { slug });
    return data.locationEvenementielle;
  } catch (error) {
    return null;
  }
};

// Récupérer Restauration
export const getBrunch = async () => {
  const query = gql`
    query GetBrunch {
      brunchs(stage: PUBLISHED) {
        id
        title
        slug
        part1
        paragraphe1
        paragraphe2
        images {
          url
          fileName
          handle
          width
          height
        }
        journees
        horaires
        extrait
        part2
        part2Paragraphe1
        part2Paragraphe2
        part2Images {
          url
          fileName
          handle
          width
          height
        }
        part3
        part3Paragraphe1
        part3Paragraphe2
        part3Images {
          url
          fileName
          handle
          width
          height
        }
        part4
        part4Paragraphe1
        part4Paragraphe2
        part4Images {
          url
          fileName
          handle
          width
          height
        }
      }
    }
  `;

  try {
    const data = await hygraphClient.request(query);
    return data.brunchs;
  } catch (error) {
    return [];
  }
};

// Récupérer Brunch par slug
export const getBrunchBySlug = async (slug) => {
  const query = gql`
    query GetBrunchBySlug($slug: String!) {
      brunch(where: { slug: $slug }, stage: PUBLISHED) {
        id
        title
        slug
        part1
        paragraphe1
        paragraphe2
        images {
          url
          fileName
          handle
          width
          height
        }
        journees
        horaires
        extrait
        part2
        part2Paragraphe1
        part2Paragraphe2
        part2Images {
          url
          fileName
          handle
          width
          height
        }
        part3
        part3Paragraphe1
        part3Paragraphe2
        part3Images {
          url
          fileName
          handle
          width
          height
        }
      }
    }
  `;

  try {
    const data = await hygraphClient.request(query, { slug });
    return data.brunch;
  } catch (error) {
    return null;
  }
};

// Récupérer Salon de Thé
export const getSalonDeThe = async () => {
  const query = gql`
    query GetSalonDeThe {
      salonDeThes(stage: PUBLISHED) {
        id
        title
        slug
        part1
        paragraphe1
        paragraphe2
        images {
          url
          fileName
          handle
          width
          height
        }
        journees
        horaires
        extrait
        part2
        part2Paragraphe1
        part2Paragraphe2
        part2Images {
          url
          fileName
          handle
          width
          height
        }
        part2Horaires
        part3
        part3Paragraphe1
        part3Paragraphe2
        part3Images {
          url
          fileName
          handle
          width
          height
        }
      }
    }
  `;

  try {
    const data = await hygraphClient.request(query);
    return data.salonDeThes;
  } catch (error) {
    return [];
  }
};

// Récupérer Salon de Thé par slug
export const getSalonDeTheBySlug = async (slug) => {
  const query = gql`
    query GetSalonDeTheBySlug($slug: String!) {
      salonDeThe(where: { slug: $slug }, stage: PUBLISHED) {
        id
        title
        slug
        part1
        paragraphe1
        paragraphe2
        images {
          url
          fileName
          handle
          width
          height
        }
        journees
        horaires
        extrait
        part2
        part2Paragraphe1
        part2Images {
          url
          fileName
          handle
          width
          height
        }
      }
    }
  `;

  try {
    const data = await hygraphClient.request(query, { slug });
    return data.salonDeThe;
  } catch (error) {
    return null;
  }
};

// Récupérer Tapas
export const getTapas = async () => {
  const query = gql`
    query GetTapas {
      tapas(stage: PUBLISHED) {
        id
        title
        slug
        part1
        paragraphe1
        paragraphe2
        images {
          url
          fileName
          handle
          width
          height
        }
        journees
        horaires
        extrait
        part2
        part2Paragraphe1
        part2Paragraphe2
        part2Images {
          url
          fileName
          handle
          width
          height
        }
        part2Horaires
        part3
        part3Paragraphe1
        part3Paragraphe2
        part3Images {
          url
          fileName
          handle
          width
          height
        }
      }
    }
  `;

  try {
    const data = await hygraphClient.request(query);
    return data.tapas;
  } catch (error) {
    return [];
  }
};

// Récupérer Tapas par slug
export const getTapasBySlug = async (slug) => {
  const query = gql`
    query GetTapasBySlug($slug: String!) {
      tapas(where: { slug: $slug }, stage: PUBLISHED) {
        id
        title
        slug
        part1
        paragraphe1
        paragraphe2
        images {
          id
          fileName
          size
          mimeType
          url
          width
          height
          handle
        }
        journees
        horaires
        extrait
        photosGaleries {
          id
          fileName
          size
          mimeType
          url
          width
          height
          handle
        }
        menu {
          id
          fileName
          size
          mimeType
          url
          width
          height
          handle
        }
        part2
        part2Paragraphe1
        part2Paragraphe2
        part2Images {
          id
          fileName
          size
          mimeType
          url
          width
          height
          handle
        }
        part2Journees
        part2Horaires
        part3
        part3Paragraphe1
        part3Paragraphe2
        part3Images {
          id
          fileName
          size
          mimeType
          url
          width
          height
          handle
        }
        part3Journees
        part3Horaires
      }
    }
  `;

  try {
    const data = await hygraphClient.request(query, { slug });
    return data.tapas;
  } catch (error) {
    ;

    

    return null;
  }
};

export const getHistoireDuLieuBySlug = async (slug) => {
  // TEMPORAIRE: Utiliser l'ID directement puisque le slug n'est pas encore indexé
  const query = gql`
    query GetHistoireDuLieu {
      histoireDuLieu(
        where: { id: "clwrump5erp6407vx6e5ialg0" }
        stage: PUBLISHED
      ) {
        id
        title
        slug
        paragraphe1
        paragraphe2
        images {
          id
          fileName
          url
          width
          height
          handle
        }
      }
    }
  `;

  try {
    const data = await hygraphClient.request(query);

    return data.histoireDuLieu;
  } catch (error) {
    
   
    return null;
  }
};

// Alternative simple pour récupérer par ID direct
export const getHistoireDuLieu = async () => {
  const query = gql`
    query GetHistoireDuLieu {
      histoireDuLieu(stage: PUBLISHED) {
        id

        title
        slug
        paragraphe1
        paragraphe2
        images {
          id
          fileName
          url
          width
          height
          handle
        }
      }
    }
  `;

  try {
    const data = await hygraphClient.request(query);
    return data.histoireDuLieu;
  } catch (error) {
    
    if (error.response) {
    }
    return [];
  }
};

export const getAllMenus = async () => {
  const query = gql`
    query GetAllMenus {
      menus(stage: PUBLISHED) {
        id
        title
        menu
        menuDescription
        menuDuMidi
        menuDuMidiImage {
          id
          fileName
          size
          mimeType
          url
          width
          height
          handle
        }
        menuDuSoir
        menuDuSoirImage {
          id
          fileName
          size
          mimeType
          url
          width
          height
          handle
        }
      }
    }
  `;

  try {
    const data = await hygraphClient.request(query);
    return data.menus;
  } catch (error) {
    if (error.response) {
    }
    return [];
  }
};

// Récupérer Menu par slug (le champ 'menu' est le slug)
export const getMenuBySlug = async (slug) => {
  const query = gql`
    query GetMenuBySlug($slug: String!) {
      menu(where: { menu: $slug }, stage: PUBLISHED) {
        id
        title
        menu
        menuDuMidi
        menuDuMidiImage {
          id
          fileName
          size
          mimeType
          url
          width
          height
          handle
        }
        menuDuSoir
        menuDuSoirImage {
          id
          fileName
          size
          mimeType
          url
          width
          height
          handle
        }
      }
    }
  `;

  try {
    const data = await hygraphClient.request(query, { slug });
    return data.menu;
  } catch (error) {
    
    return null;
  }
};

// Récupérer le premier menu disponible
export const getMenuData = async () => {
  const query = gql`
    query GetFirstMenu {
      menus(stage: PUBLISHED, first: 1) {
        id
        title
        menu
        menuDuMidi
        menuDuMidiImage {
          id
          fileName
          size
          mimeType
          url
          width
          height
          handle
        }
        menuDuSoir
        menuDuSoirImage {
          id
          fileName
          size
          mimeType
          url
          width
          height
          handle
        }
      }
    }
  `;

  try {
    const data = await hygraphClient.request(query);

    if (data.menus && data.menus.length > 0) {
      return data.menus[0];
    } else {
      return null;
    }
  } catch (error) {
    
    return null;
  }
};

// Test de connexion pour vérifier la structure
export const testMenuStructure = async () => {
  const query = gql`
    query TestMenuStructure {
      __type(name: "Menu") {
        fields {
          name
          type {
            name
            kind
          }
        }
      }
    }
  `;

  try {
    const data = await hygraphClient.request(query);
    return data;
  } catch (error) {
    return null;
  }
};
