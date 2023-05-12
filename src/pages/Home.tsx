import { Filter } from '../components/Filter';
import { NewsList } from '../components/NewsList';
import { TotalCount } from '../components/TotalCount';

// check assesability 
export const Home = () => {
  return (
    <section className="my-4">
      <div className="max-w-7xl px-4 mx-auto">
        <Filter />
        <TotalCount />
        <NewsList />
      </div>
    </section>
  )
}

