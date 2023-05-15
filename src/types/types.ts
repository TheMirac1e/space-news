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

export interface ILoadMoreButton {
  limit: number;
  setLimit: Function;
  loading: boolean;
  onRequest: Function;
}

export interface IFilter {
  filter?: string;
  setFilter: Function;
}

export interface ITotalCount {
  filter?: string;
}

