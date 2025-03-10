import getAuthorById, { authorLoader } from "../data-access/getAuthorById";

const authorResolver = async (
  parent: any,
  args: any,
  context: any,
  info: any
): Promise<{}> => {
  return authorLoader.load(parent.userId);
};

export default authorResolver;
