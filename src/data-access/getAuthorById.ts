import DataLoader from "dataloader";
import { connection } from "./connection";

const getAuthorsTable = () => connection.table("author");

const getAuthorById = async (id: string) => {
  const author = await getAuthorsTable().where("id", id).first();

  return author;
};

const batchFnLoad = async (ids: readonly string[]) => {
  const authors = await getAuthorsTable().select().whereIn("id", ids);
  return ids.map((id) => authors.find((author) => author.id === id));
};

export const authorLoader = new DataLoader(batchFnLoad);

export default getAuthorById;
