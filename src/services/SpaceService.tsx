import useHttp from "../hooks/http.hooks";

export const useSpaceService = () => {
  const { loading, error, request, clearError } = useHttp();

  const getAllNews = async () => {
    const res = await request('https://api.spaceflightnewsapi.net/v4/articles/?limit=9');
    return res.results.map(_transformNewsList);
  }

  const getNewsCount = async (filter: string) => {
    const res = await request(`https://api.spaceflightnewsapi.net/v3/articles/count?title_contains=${filter}`)
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

  return { loading, error, request, clearError, getAllNews, getNewsCount };
}
