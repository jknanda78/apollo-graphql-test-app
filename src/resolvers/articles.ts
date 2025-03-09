import getArticleList from "../data-access/getArticleList";

const articlesResolver = async (
  parent: any,
  args: any,
  context: any,
  info: any
): Promise<{}> => {
  const articles = await getArticleList();

  return {
    items: articles,
    totalCount: articles.length,
  };
};

export default articlesResolver;
