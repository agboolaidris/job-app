import { Container, Grid } from '@mui/material';
import Welcome from '../components/landingPage/welcome';
import GridImage from '../components/landingPage/gridImage';
import InfoCard from '../components/shared/infoCard';
import Main from '../layout/main';
import adDB from '../../database/ad.json';

const images = ['/jacket.jpg', 'suit.jpg', 'womansuit.jpg', 'mansuit.jpg'];

const Home = () => (
  <Main>
    <Welcome images={images} />
    <Container sx={{ paddingY: { xs: '50px', md: '100px' } }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {adDB.map((ad, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <InfoCard title={ad.title} content={ad.content} img={ad.img} />
          </Grid>
        ))}
      </Grid>
    </Container>
    <GridImage />
  </Main>
);

export default Home;
