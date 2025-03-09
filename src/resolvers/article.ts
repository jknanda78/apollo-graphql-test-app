import getArticleById from "../data-access/getArticleById";

const articleResolver = async (
  parent: any,
  args: any,
  context: any,
  info: any
): Promise<{}> => {
  const article = await getArticleById(args.id);

  return article;
};

export default articleResolver;
