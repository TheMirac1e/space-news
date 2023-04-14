import { Grid } from "@mui/material";
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
      <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }} className='my-7 flex justify-center gap-2'>
        {items}
      </Grid>
    );

  }

  const items = renderNews(spaceList as []);

  return (
    <>
      {items}
    </>
  )
}

