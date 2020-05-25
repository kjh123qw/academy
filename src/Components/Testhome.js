// import React from "react";
// import { graphql } from "react-apollo";
// import { getAcademyDb } from "../graphql/queries";
// import gql from "graphql-tag";

// class Testhome extends React.Component {
//   render() {
//     const { Id, Subject } = this.props;
//     console.log({ Id, Subject });
//     return <div> Hello</div>;
//   }
// }

// export default graphql(gql(getAcademyDb), {
//   options: ({ Id: id }) => ({
//     fetchPolicy: "cache-first",
//     variables: { Id: id },
//   }),
//   props: ({
//     data: {
//       getAcademyDB: { Id, Subject },
//     },
//   }) => ({
//     Id,
//     Subject,
//   }),
// })(Testhome);
