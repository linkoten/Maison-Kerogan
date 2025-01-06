import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clq25gs7i4n8301tedkg9hbzt/master';
const graphQLClient = new GraphQLClient(endpoint);

const fetchData = async (queryName, fields) => {
  const query = `
    query FetchData {
      ${queryName} {
        ${fields.join('\n')}
      }
    }
  `;

  try {
    const data = await graphQLClient.request(query);
    return data[queryName];
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchData;

