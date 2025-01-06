export const queries = {
    tapas: {
      name: 'tapass',
      fields: [
        'part1', 'paragraphe1', 'paragraphe2', 'extrait', 'id', 'slug', 'title',
        'images { altText, id, url, width, size, height }',
        'journees', 'horaires', 'part2', 'part2Paragraphe1', 'part2Paragraphe2',
        'part2Images { altText, id, url, width, size, height }',
        'part3', 'part3Paragraphe1', 'part3Paragraphe2',
        'part3Images { altText, id, url, width, size, height }'
      ]
    },
    location: {
      name: 'locationsEvenementielles',
      fields: [
        'part1', 'paragraphe1', 'paragraphe2', 'extrait', 'id', 'slug', 'title',
        'images { altText, id, url, width, size, height }',
        'journees', 'horaires', 'part2', 'part2Paragraphe1', 'part2Paragraphe2',
        'part2Images { altText, id, url, width, size, height }',
        'part3', 'part3Paragraphe1', 'part3Paragraphe2',
        'part3Images { altText, id, url, width, size, height }'
      ]
    },
    histoireDuLieu: {
      name: 'histoiresDuLieu',
      fields: [
        'paragraphe1', 'paragraphe2', 'id', 'title',
        'images { altText, id, url, width, size, height }'
      ]
    },
    brunch: {
      name: 'brunches',
      fields: [
        'part1', 'paragraphe1', 'paragraphe2', 'extrait', 'id', 'slug', 'title',
        'images { altText, id, url, width, size, height }',
        'journees', 'horaires', 'part2', 'part2Paragraphe1', 'part2Paragraphe2',
        'part2Images { altText, id, url, width, size, height }',
        'part3', 'part3Paragraphe1', 'part3Paragraphe2',
        'part3Images { altText, id, url, width, size, height }'
      ]
    },
    leChef: {
      name: 'leChefs',
      fields: [
        'paragraphe1', 'id', 'slug', 'title',
        'images { altText, id, url, width, size, height }'
      ]
    },
    salonDeThe: {
      name: 'salonDeThes',
      fields: [
        'part1', 'paragraphe1', 'paragraphe2', 'extrait', 'id', 'slug', 'title',
        'images { altText, id, url, width, size, height }',
        'journees', 'horaires', 'part2', 'part2Paragraphe1', 'part2Paragraphe2',
        'part2Images { altText, id, url, width, size, height }',
        'part3', 'part3Paragraphe1', 'part3Paragraphe2',
        'part3Images { altText, id, url, width, size, height }'
      ]
    }
  };
  
  