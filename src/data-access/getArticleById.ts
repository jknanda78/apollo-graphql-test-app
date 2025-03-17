import { connection } from "../connection";
import { Article } from "../types";

/**
 * Returns the articles table from the database connection.
 * @returns The articles table.
 */
const getArticlesTable = () => connection.table<Article>("article");

/**
 * Fetches an article by its ID.
 * @param id - The ID of the article to fetch.
 * @returns A promise that resolves to the article object or undefined if not found.
 */
const getArticleById = async (id: string): Promise<Article | undefined> => {
  const article = await getArticlesTable().where("id", id).first();
  return article;
};

export default getArticleById;
