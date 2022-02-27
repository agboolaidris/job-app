import Welcome from '../components/landingPage/welcome';
import Main from '../layout/main';

const images = ['/jacket.jpg'];

const Home = () => (
  <Main>
    <Welcome images={images} />
  </Main>
);

export default Home;
