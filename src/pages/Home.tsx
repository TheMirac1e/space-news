import { Container } from '@mui/material';
import { Filter } from '../components/Filter';
import { LoadMoreButton } from '../components/LoadMoreButton';
import { NewsList } from '../components/NewsList';
import { TotalCount } from '../components/TotalCount';

export const Home = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 3,
        mb: 3,
      }}
    >
      <Filter />
      <TotalCount />
      <NewsList />
      <LoadMoreButton />
    </Container>
  )
}

