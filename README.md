# apollo-graphql-test-app

Testing apollo graphql

```ts
query getArticleById {
  article(id: "9912fbcf-afa9-4f00-99d0-779ce8ee2f10") {
    author {
      email
      id
      name
    }
    id
    title
  }
}

query getArticles {
  articles {
    items {
      author {
        email
        id
        name
      }
      id
      title
    }
    totalCount
  }
}
```
