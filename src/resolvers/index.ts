import authorResolver from "./author";
import articleResolver from "./article";
import articlesResolver from "./articles";

export const resolvers = {
  Article: {
    author: authorResolver,
  },
  Query: {
    article: articleResolver,
    articles: articlesResolver,
  },
};
