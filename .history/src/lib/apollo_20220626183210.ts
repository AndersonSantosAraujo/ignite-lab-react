import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4vt1ugb1u4u01ukcx7ycvka/master",
  cache: new InMemoryCache(),
});
