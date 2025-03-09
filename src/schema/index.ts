import { gql } from "apollo-server";

const typeDefs = gql`
  type Error {
    code: String
    message: String
  }

  type Author {
    id: String!
    name: String!
    email: String!
  }

  type Article {
    id: ID!
    author: Author!
    title: String!
  }

  type Articles {
    articles: [Article]
    error: [Error]
  }

  type Query {
    article: Article
  }
`;

export default typeDefs;
