import Welcome from '../components/landingPage/welcome';
import GridImage from '../components/main/gridImage';
import Main from '../layout/main';

const images = ['/jacket.jpg', 'suit.jpg', 'womansuit.jpg', 'mansuit.jpg'];

const Home = () => (
  <Main>
    <Welcome images={images} />
    <GridImage />
  </Main>
);

export default Home;
