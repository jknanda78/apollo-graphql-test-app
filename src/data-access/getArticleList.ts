import { connection } from "./connection";

const getArticlesTable = () => connection.table("article");

const getArticleList = async () => {
  const articles = await getArticlesTable().select().orderBy("createdAt");

  return articles;
};

export default getArticleList;
