import { ILoadMoreButton } from "../types/types";

export const LoadMoreButton = ({ ...props }: ILoadMoreButton) => {
  const { onClick, limit, loading } = props;

  return (
    <button className="flex justify-center mx-auto mt-4 text-white uppercase" onClick={() => onClick(limit)}>
      {loading ? 'Loading...' : 'Load More'}
    </button>
  )
}
