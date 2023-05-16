import { useCallback, useEffect, useState } from 'react';
import { Filter } from '../components/Filter';
import { LoadMoreButton } from '../components/LoadMoreButton';
import { NewsList } from '../components/NewsList';
import { TotalCount } from '../components/TotalCount';
import { useSpaceService } from '../services/SpaceService';

export const Home = () => {
  const [filter, setFilter] = useState('');
  const [spaceList, setSpaceList] = useState([]);
  const [limit, setLimit] = useState(9);

  const { getAllNews, loading } = useSpaceService();

  const onRequest = useCallback(() => {
    getAllNews(limit, filter)
      .then((newSpaceList: []) => onSpaceListLoaded(newSpaceList))
  }, [getAllNews, limit, filter]);

  const onSpaceListLoaded = useCallback((newSpaceList: []) => {
    setSpaceList([...spaceList, ...newSpaceList]);
  }, []);

  useEffect(() => {
    onRequest();
  }, [filter, limit]);

  return (
    <section className="my-4">
      <div className="max-w-7xl px-4 mx-auto">
        <Filter filter={filter} setFilter={setFilter} />
        <TotalCount filter={filter} limit={limit} />
        <NewsList spaceList={spaceList} />
        <LoadMoreButton setLimit={setLimit} loading={loading} />
      </div>
    </section>
  )
}

