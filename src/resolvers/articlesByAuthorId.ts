import { articleLoader } from "../data-access/getArticlesByAuthorId";

/**
 * Resolver for fetching a single article by its ID.
 *
 * @param {any} parent - The parent resolver result.
 * @param {any} args - The arguments passed to the resolver.
 * @param {any} context - The context shared across all resolvers.
 * @param {any} info - Information about the execution state of the query.
 * @returns {Promise<{}>} - The article data.
 */
const articlesByAuthorIdResolver = async (
  parent: any,
  args: any,
  context: any,
  info: any
): Promise<any> => {
  return articleLoader.load(parent.id);
};

export default articlesByAuthorIdResolver;
