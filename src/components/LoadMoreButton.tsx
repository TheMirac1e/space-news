import { useCallback } from "react";
import { ILoadMoreButton } from "../types/types";

// fix load more button
export const LoadMoreButton = ({ ...props }: ILoadMoreButton) => {
  const { limit, setLimit, loading, onRequest } = props;
  console.log(limit);

  const onLoadMoreClick = () => {
    onRequest();
    setLimit(limit + 9);
  };

  return (
    <button className="flex justify-center mx-auto mt-4 text-white uppercase" onClick={() => onLoadMoreClick()}>
      {loading ? 'Loading...' : 'Load More'}
    </button>
  )
}
