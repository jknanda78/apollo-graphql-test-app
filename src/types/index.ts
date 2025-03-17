/**
 * Represents an article.
 */
export interface Article {
  id: string;
  title: string;
  content: string;
  authorId: string;
}

/**
 * Represents an author.
 */

export interface Author {
  id: string;
  name: string;
  email: string;
  articles: Article[];
}

export interface ArticleList {
  items: Article[];
  totalCount: number;
}
