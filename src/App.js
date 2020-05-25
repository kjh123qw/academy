import React from "react";
// import { Grid, Header, Input, List, Segment } from "semantic-ui-react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { Connect, withAuthenticator } from "aws-amplify-react";
import { getAcademyDb } from "./graphql/queries";

import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

const App = () => {
  return <div>Helloe</div>;
};

export default App;
