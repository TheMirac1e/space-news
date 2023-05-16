import useHttp from "../hooks/http.hooks";

export const useSpaceService = () => {
  const { loading, error, request, clearError } = useHttp();

  const getAllNews = async (limit: number, filter: string) => {
    const res = await request(`https://api.spaceflightnewsapi.net/v4/articles/?limit=${limit}&summary_contains=${filter}`);
    return res.results.map(_transformNewsList);
  }

  const getNewsCount = async (limit: number, filter: string) => {
    const res = await request(`https://api.spaceflightnewsapi.net/v4/articles/?limit=${limit}&summary_contains=${filter}`);
    return res.count;
  }

  const getNewsById = async (id: string) => {
    const res = await request(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
    return res;
  }

  const _transformNewsList = (news: any) => {
    return {
      id: news.id,
      title: news.title,
      subtitle: news.summary,
      image: news.image_url,
      date: news.published_at
    }
  }

  return { loading, error, request, clearError, getAllNews, getNewsCount, getNewsById };
}
