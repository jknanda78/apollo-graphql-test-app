import { authorLoader } from "../data-access/getAuthorById";

/**
 * Resolver for fetching an author by their user ID.
 *
 * @param {any} parent - The parent resolver result.
 * @param {any} args - The arguments passed to the resolver.
 * @param {any} context - The context shared across all resolvers.
 * @param {any} info - Information about the execution state of the query.
 * @returns {Promise<{}>} - The author data.
 */
const authorResolver = async (
  parent: any,
  args: any,
  context: any,
  info: any
): Promise<any> => {
  return authorLoader.load(parent.authorId);
};

export default authorResolver;
