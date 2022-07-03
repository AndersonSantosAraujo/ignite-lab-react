// import { gql, useQuery } from "@apollo/client";
// import React from "react";
// import Event from "./pages/Event";
import Router from "./Router";
import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";
import { BrowserRouter } from "react-router-dom";

// const GET_LESSONS_QUERY = gql`
//   query {
//     lessons {
//       id
//       title
//     }
//   }
// `;

// interface Lesson {
//   id: string;
//   title: string;
// }

function App() {
  // const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
    // <ul>
    //   {data?.lessons.map((lesson) => {
    //     return <li key={lesson.id}>{lesson.title}</li>;
    //   })}
    // </ul>
  );
}

export default App;
