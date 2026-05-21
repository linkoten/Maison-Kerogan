import { gql } from "graphql-request";
import hygraphClient from "./hygraph";

// Fragments de transformation WebP - reduisent la taille des images ~90%
const IMG_LG = `url(transformation: {
          image: { resize: { width: 1200, fit: clip } }
          document: { output: { format: webp } }
        })`;

const IMG_SM = `url(transformation: {
          image: { resize: { width: 600, fit: clip } }
          document: { output: { format: webp } }
        })`;

// Recuperer le prochain evenement a afficher
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
          ${IMG_SM}
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

    if (event.date && Array.isArray(event.date)) {
      event.date = event.date[0];
    }

    const eventDate = new Date(event.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (eventDate >= today) {
      return event;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

// Recuperer tous les evenements futurs a afficher
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
          ${IMG_SM}
          fileName
          handle
        }
      }
    }
  `;

  try {
    const data = await hygraphClient.request(query);

    const events = data.events
      .map((event) => {
        if (event.date && Array.isArray(event.date)) {
          event.date = event.date[0];
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

// ======================== NOUVEAUX MODELES ========================

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
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
          fileName
          handle
          width
          height
        }
        part3
        part3Paragraphe1
        part3Paragraphe2
        part3Images {
          ${IMG_LG}
          fileName
          handle
          width
          height
        }
        part4
        part4Paragraphe1
        part4Paragraphe2
        part4Images {
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
          fileName
          handle
          width
          height
        }
        part3
        part3Paragraphe1
        part3Paragraphe2
        part3Images {
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
          width
          height
          handle
        }
        menu {
          id
          fileName
          size
          mimeType
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
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
    return null;
  }
};

export const getHistoireDuLieuBySlug = async (slug) => {
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
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
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
          ${IMG_LG}
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

