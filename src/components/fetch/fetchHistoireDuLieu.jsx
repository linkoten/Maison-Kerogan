import { GraphQLClient } from 'graphql-request';

const fetchHistoireDuLieu = async () => {
    const endpoint = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clq25gs7i4n8301tedkg9hbzt/master';
    const graphQLClient = new GraphQLClient(endpoint);
  
    const query = `
      query MyQuery {
        histoiresDuLieu {
          paragraphe1
          paragraphe2
          id
          title
          images {
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
      return data.histoiresDuLieu; // Retourne les données brunches
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  export default fetchHistoireDuLieu;