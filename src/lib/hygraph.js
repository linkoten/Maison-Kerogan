import { GraphQLClient } from "graphql-request";

console.log("HYGRAPH_ENDPOINT:", process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT);
console.log(
  "HYGRAPH_TOKEN:",
  process.env.NEXT_PUBLIC_HYGRAPH_TOKEN ? "Token présent" : "Token manquant"
);

const hygraphClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT,
  {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
    },
  }
);

export default hygraphClient;
