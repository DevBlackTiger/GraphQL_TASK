const { gql } = require("apollo-server");

const typeDefs = gql`
  type Link {
    url: String
    title: String
  }

  type Result {
    mentions: [String]
    emoticons: [String]
    links: [Link]
  }

  type Query {
    records(message: String!): Result
  }
`;

module.exports = typeDefs;
