import { Container, Grid } from '@mui/material';
import Welcome from '../components/landingPage/welcome';
import GridImage from '../components/main/gridImage';
import InfoCard from '../components/shared/infoCard';
import Main from '../layout/main';

const images = ['/jacket.jpg', 'suit.jpg', 'womansuit.jpg', 'mansuit.jpg'];

const Home = () => (
  <Main>
    <Welcome images={images} />
    <Container sx={{ paddingY: 4 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <InfoCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoCard />
        </Grid>
      </Grid>
    </Container>
    <GridImage />
  </Main>
);

export default Home;
