import { connection } from "./connection";

const getAuthorsTable = () => connection.table("author");

const getAuthorById = async (id: string) => {
  const author = await getAuthorsTable().where("id", id).first();

  return author;
};

export default getAuthorById;
