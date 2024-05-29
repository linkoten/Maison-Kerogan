import { GraphQLClient } from 'graphql-request';

const fetchBrunch = async () => {
    const endpoint =
        'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clq25gs7i4n8301tedkg9hbzt/master';
    const graphQLClient = new GraphQLClient(endpoint);

    const query = `
      query MyQuery {
        brunches {
          part1
          paragraphe1
          paragraphe2
          extrait
          
          id
          slug
          title
          images {
            altText
            id
            url
            width
            size
            height
          }
          journees
          horaires
          part2
        part2Paragraphe1
        part2Paragraphe2
        part2Images {
          altText
          id
          url
          width
          size
          height
        }


        part3
        part3Paragraphe1
        part3Paragraphe2
        part3Images {
          altText
          id
          url
          width
          size
          height
        }
 

        }
      }
    `;

    try {
        const data = await graphQLClient.request(query);
        return data.brunches; // Retourne les données brunches
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export default fetchBrunch;
