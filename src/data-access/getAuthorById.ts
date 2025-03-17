import DataLoader from "dataloader";
import { connection } from "../connection";
import { Author } from "../types";

/**
 * Returns the authors table from the database connection.
 * @returns The authors table.
 */
const getAuthorsTable = () => connection.table<Author>("author");

/**
 * Batch function to load multiple authors by their IDs.
 * @param ids - An array of author IDs to fetch.
 * @returns A promise that resolves to an array of authors corresponding to the provided IDs.
 */
const batchFnLoad = async (
  ids: readonly string[]
): Promise<(Author | undefined)[]> => {
  const authors = await getAuthorsTable().select().whereIn("id", ids);
  return ids.map((id) => authors.find((author) => author.id === id));
};

/**
 * DataLoader instance for batching and caching author fetches.
 */
export const authorLoader = new DataLoader<string, Author | undefined>(
  batchFnLoad
);
