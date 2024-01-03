import { GraphQLClient } from 'graphql-request';



const fetchTapas = async () => {
    const endpoint = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clq25gs7i4n8301tedkg9hbzt/master';
    const graphQLClient = new GraphQLClient(endpoint);
  
    const query = `
      query MyQuery {
        tapass {
          paragraphe1
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
        }
      }
    `;
  
    try {
      const data = await graphQLClient.request(query);
      return data.tapass; // Retourne les données brunches
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  export default fetchTapas;
