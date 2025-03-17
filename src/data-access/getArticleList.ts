import { connection } from "../connection";
import { Article } from "../types";

/**
 * Returns the articles table from the database connection.
 * @returns The articles table.
 */
const getArticlesTable = () => connection.table<Article>("article");

/**
 * Fetches a list of articles.
 * @returns A promise that resolves to an array of article objects.
 */
const getArticleList = async (): Promise<Article[]> => {
  const articleList = await getArticlesTable().select().orderBy("createdAt");

  return articleList;
};

export default getArticleList;
