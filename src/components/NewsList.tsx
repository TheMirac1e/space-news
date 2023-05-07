import { useEffect, useState } from "react";
import { useSpaceService } from "../services/SpaceService";
import { NewsCard } from "./NewsCard";

export const NewsList = () => {
  const [spaceList, setSpaceList] = useState([]);

  const { getAllNews } = useSpaceService();

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = (): void => {
    getAllNews()
      .then(onSpaceListLoaded)
  }

  const onSpaceListLoaded = (newSpaceList: []) => {
    setSpaceList([...spaceList, ...newSpaceList]);
  }

  function renderNews(arr: []) {
    const items = arr.map((card, i) => {
      const { image, title, subtitle, date, id } = card;

      return <NewsCard image={image} title={title} subtitle={subtitle} date={date} id={id} key={i} />
    })

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
    </>
  )
}

