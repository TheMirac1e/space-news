import { Grid } from "@mui/material";
import { NewsCard } from "./NewsCard";
export const NewsList = () => {

  return (
    <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }} className='mt-7 flex justify-center gap-2'>
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </Grid>
  )
}

