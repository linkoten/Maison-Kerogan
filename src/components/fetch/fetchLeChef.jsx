import { GraphQLClient } from 'graphql-request';



const fetchLeChef = async () => {
    const endpoint = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clq25gs7i4n8301tedkg9hbzt/master';
    const graphQLClient = new GraphQLClient(endpoint);
  
    const query = `
      query MyQuery {
        leChefs {
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
        }
      }
    `;
  
    try {
      const data = await graphQLClient.request(query);
      return data.leChefs; // Retourne les données brunches
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  export default fetchLeChef;
