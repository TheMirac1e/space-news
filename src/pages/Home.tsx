import { Container } from '@mui/material';
import { Filter } from '../components/Filter';
import { NewsList } from '../components/NewsList';

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
      <NewsList />
    </Container>
  )
}

