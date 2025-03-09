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

  type ArticleList {
    items: [Article!]!
    totalCount: Int!
  }

  type Query {
    article(id: ID!): Article
    articles: ArticleList
  }
`;

export default typeDefs;
