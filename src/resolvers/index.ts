import authorResolver from "./author";
import articleResolver from "./article";

export const resolvers = {
  Article: {
    author: authorResolver,
  },
  Query: {
    article: articleResolver,
  },
};
