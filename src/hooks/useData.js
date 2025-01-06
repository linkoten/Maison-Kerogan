import { useState, useEffect } from "react";
import { GraphQLClient } from "graphql-request";

const endpoint =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clq25gs7i4n8301tedkg9hbzt/master";
const client = new GraphQLClient(endpoint);

const useData = (queryName, fields) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `
          query FetchData {
            ${queryName} {
              ${fields.join("\n")}
            }
          }
        `;

        const result = await client.request(query);
        setData(result[queryName]);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [queryName, fields]);

  return { data, loading, error };
};

export default useData;
