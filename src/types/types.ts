export interface INewsCard {
  image: string;
  title: string;
  subtitle: string;
  date: string;
  id: string;
  filter: string;
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
  article: IDetailsNews;
}

export interface IDetailsContent {
  article: IDetailsNews;
}

export interface ILoadMoreButton {
  setLimit: Function;
  loading: boolean;
}

export interface IFilter {
  filter?: string;
  setFilter: Function;
}

export interface ITotalCount {
  filter?: string;
  limit: number;
}
