/**
 * This module defines the GraphQL schema for the Apollo GraphQL server.
 * It includes type definitions for Error, Author, Article, ArticleList, and Query.
 */

const typeDefs = `#graphql
  """
  Represents an error with a code and message.
  """
  type Error {
    code: String
    message: String
  }

  """
  Represents an author with an ID, name, and email.
  """
  type Author {
    id: String!
    name: String!
    email: String!
    articles: [Article!]!
  }

  """
  Represents an article with an ID, author, and title.
  """
  type Article {
    id: ID!
    author: Author!
    title: String!
  }

  """
  Represents a list of articles with the total count.
  """
  type ArticleList {
    items: [Article!]!
    totalCount: Int!
  }

  """
  The root query type.
  """
  type Query {
    """
    Fetches a single article by its ID.
    """
    article(id: ID!): Article

    """
    Fetches a list of articles.
    """
    articles: ArticleList
  }
`;

export default typeDefs;
