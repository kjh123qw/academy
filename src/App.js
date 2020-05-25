import React from "react";
// import { Grid, Header, Input, List, Segment } from "semantic-ui-react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { Connect, withAuthenticator } from "aws-amplify-react";
import { getAcademyDb } from "./graphql/queries";

import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

function App() {
  return (
    <Connect query={graphqlOperation(getAcademyDb, { Id: "3" })}>
      {({ data, loading }) => {
        if (loading) {
          return <div>Loading...</div>;
        }

        return (
          <div>
            Helloe <b>{data.getAcademyDB.Subject}</b>
          </div>
        );
      }}
    </Connect>
  );
}

export default App;
