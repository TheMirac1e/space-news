export interface INewsCard {
  image: string,
  title: string,
  subtitle: string,
  date: string,
  id: string
}

export interface IDetailsNews {
  id?: string;
  image_url?: string;
  news_site?: string;
  title?: string;
  summary?: string;
  url?: string;
}

export interface IDetailsHeader {
  article: IDetailsNews
}

export interface IDetailsContent {
  article: IDetailsNews
}
