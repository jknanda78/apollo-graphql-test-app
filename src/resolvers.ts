import articleResolver from "./resolvers/article";
import articlesResolver from "./resolvers/articles";
import articlesByAuthorIdResolver from "./resolvers/articlesByAuthorId";
import authorResolver from "./resolvers/author";

/**
 * Root resolver object that consolidates all individual resolvers.
 */
const resolvers = {
  Query: {
    article: articleResolver,
    articles: articlesResolver,
  },
  Article: {
    author: authorResolver,
  },
  Author: {
    articles: articlesByAuthorIdResolver,
  },
};

export default resolvers;
