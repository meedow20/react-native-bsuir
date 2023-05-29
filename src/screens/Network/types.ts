export interface NewsDataResponse {
  articles: NewsDataArticleResponse[];
}

export interface NewsDataArticleResponse {
  title: string | null;
  url: string | null;
  publishedAt: string | null;
}
