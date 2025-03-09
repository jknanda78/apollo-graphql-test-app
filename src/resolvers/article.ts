import getArticleById from "../data-access/getArticleById";

const articleResolver = async (
  parent: any,
  args: any,
  context: any,
  info: any
): Promise<{}> => {
  const article = await getArticleById("9912fbcf-afa9-4f00-99d0-779ce8ee2f10");

  return article;
};

export default articleResolver;
