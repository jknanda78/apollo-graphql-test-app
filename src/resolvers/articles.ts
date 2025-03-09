// @ts-nocheck
const articlesResolver = async (parent, args, context, info) => {
  console.log("Articles resolver called");
  const articles = [
    {
      id: "123",
      title: "Article 1",
      author: {
        id: "abcd-1234",
        name: "John Doe",
        email: "john.doe@email.com",
      },
    },
  ];

  return articles;
};

export default articlesResolver;
