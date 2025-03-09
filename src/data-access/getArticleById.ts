import { connection } from "./connection";

const getArticlesTable = () => connection.table("article");

const getArticleById = async (id: string) => {
  const article = await getArticlesTable().where("id", id).first();

  return article;
};

export default getArticleById;
