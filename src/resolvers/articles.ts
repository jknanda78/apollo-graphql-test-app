import getAllArticles from "../data-access/getArticleList";
import { ArticleList } from "../types";

/**
 * Resolver for fetching all articles.
 *
 * @param {any} parent - The parent resolver result.
 * @param {any} args - The arguments passed to the resolver.
 * @param {any} context - The context shared across all resolvers.
 * @param {any} info - Information about the execution state of the query.
 * @returns {Promise<{}[]>} - The list of all articles.
 */
const articlesResolver = async (
  parent: any,
  args: any,
  context: any,
  info: any
): Promise<ArticleList> => {
  const articles = await getAllArticles();

  return {
    items: articles,
    totalCount: articles.length,
  };
};

export default articlesResolver;
