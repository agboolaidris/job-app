import Welcome from '../components/landingPage/welcome';
import Main from '../layout/main';

const images = ['/jacket.jpg', 'suit.jpg', 'womansuit.jpg', 'mansuit.jpg'];

const Home = () => (
  <Main>
    <Welcome images={images} />
  </Main>
);

export default Home;
