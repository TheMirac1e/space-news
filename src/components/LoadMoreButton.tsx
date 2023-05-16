import { ILoadMoreButton } from "../types/types";

export const LoadMoreButton = ({ ...props }: ILoadMoreButton) => {
  const { setLimit, loading } = props;

  const onLoadMoreClick = () => {
    setLimit((prevLimit: number) => prevLimit + 9);
  };

  return (
    <button className="flex justify-center mx-auto mt-4 text-white uppercase" onClick={onLoadMoreClick}>
      {loading ? 'Loading...' : 'Load More'}
    </button>
  )
}
