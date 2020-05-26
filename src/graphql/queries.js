/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMyType = /* GraphQL */ `
  query GetMyType($id: ID!) {
    getMyType(id: $id) {
      id
      title
      content
      price
      rating
      createdAt
      updatedAt
    }
  }
`;
export const listMyTypes = /* GraphQL */ `
  query ListMyTypes(
    $filter: ModelMyTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        price
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
