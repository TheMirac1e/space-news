import { useCallback, useEffect, useState } from "react";
import { useSpaceService } from "../services/SpaceService";
import { NewsCard } from "./NewsCard";
import { LoadMoreButton } from '../components/LoadMoreButton';

export const NewsList = () => {
  const [spaceList, setSpaceList] = useState([]);
  const [limit, setLimit] = useState(9);

  const { getAllNews, loading } = useSpaceService();

  const onRequest = useCallback(() => {
    getAllNews(limit)
      .then((newSpaceList: []) => onSpaceListLoaded(newSpaceList))
  }, [getAllNews, limit]);

  const onSpaceListLoaded = useCallback((newSpaceList: []) => {
    setSpaceList([...spaceList, ...newSpaceList]);
    setLimit(limit + newSpaceList.length);
  }, []);

  useEffect(() => {
    onRequest();
  }, []);

  function renderNews(arr: []) {
    const items = arr.map(card => {
      const { id, image, title, subtitle, date } = card;

      return (
        <NewsCard
          key={id}
          image={image}
          title={title}
          subtitle={subtitle}
          date={date}
          id={id}
        />
      );
    });

    return (
      <div className="my-7 grid grid-cols-1 gap-4 justify-center md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3">
        {items}
      </div>
    );
  }

  const items = renderNews(spaceList as []);

  return (
    <>
      {items}
      <LoadMoreButton onClick={onRequest} limit={limit} loading={loading} />
    </>
  );
};

