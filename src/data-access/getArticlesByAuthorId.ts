import DataLoader from "dataloader";
import { connection } from "../connection";
import { Article } from "../types";

/**
 * Returns the articles table from the database connection.
 * @returns The articles table.
 */
const getArticlesTable = () => connection.table<Article>("article");

/**
 * Batch function to load multiple authors by their IDs.
 * @param ids - An array of author IDs to fetch.
 * @returns A promise that resolves to an array of authors corresponding to the provided IDs.
 */
const batchFnLoad = async (
  ids: readonly string[]
): Promise<(Article[] | undefined)[]> => {
  const articlesByAuthorIds = await getArticlesTable()
    .select()
    .whereIn("authorId", ids);

  return ids.map((id) =>
    articlesByAuthorIds.filter((article) => article.authorId === id)
  );
};

/**
 * DataLoader instance for batching and caching author fetches.
 */
export const articleLoader = new DataLoader<string, Article[] | undefined>(
  batchFnLoad
);
