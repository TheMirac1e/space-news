import useHttp from "../hooks/http.hooks";

export const useSpaceService = () => {
  const { loading, error, request, clearError } = useHttp();

  const getAllNews = async () => {
    const res = await request('https://api.spaceflightnewsapi.net/v4/articles/?limit=9');
    return res.data.results;
  }

  return { loading, error, request, clearError, getAllNews };
}
