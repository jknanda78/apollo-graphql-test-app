import getAuthorById from "../data-access/getAuthorById";

const authorResolver = async (
  parent: any,
  args: any,
  context: any,
  info: any
): Promise<{}> => {
  const author = await getAuthorById(parent.userId);

  return author;
};

export default authorResolver;
