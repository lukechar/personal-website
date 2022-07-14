import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ArticleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Comment {
  readonly id: string;
  readonly author?: string | null;
  readonly content?: string | null;
  readonly date?: string | null;
  readonly articleID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class Article {
  readonly id: string;
  readonly title?: string | null;
  readonly author?: string | null;
  readonly date?: string | null;
  readonly content?: string | null;
  readonly keywords?: string | null;
  readonly description?: string | null;
  readonly Comments?: Comment[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Article, ArticleMetaData>);
  static copyOf(source: Article, mutator: (draft: MutableModel<Article, ArticleMetaData>) => MutableModel<Article, ArticleMetaData> | void): Article;
}