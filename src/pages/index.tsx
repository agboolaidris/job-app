import { Container, Grid } from '@mui/material';
import Welcome from '../components/landingPage/welcome';
import GridImage from '../components/landingPage/gridImage';
import InfoCard from '../components/shared/infoCard';
import Main from '../layout/main';
import adDB from '../../database/ad.json';
import ProductCard from '../components/shared/productCard';
import Careusol from '../components/shared/careusol';
import productDB from '../../database/products.json';

const images = ['/jacket.jpg', 'suit.jpg', 'womansuit.jpg', 'mansuit.jpg'];
const itemData = [
  {
    img: '/jacket.jpg',
    title: 'Men',
    rows: 2,
    cols: 2,
  },
  {
    img: '/mansuit.jpg',
    title: 'Wedding',
  },
  {
    img: '/womansuit.jpg',
    title: 'Women',
  },
  {
    img: '/suit.jpg',
    title: 'Unisex',
    cols: 2,
  },
];

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
    <Careusol
      title="New Arrival"
      cards={productDB.map((product, i) => (
        <ProductCard
          key={i}
          img={product.img}
          content={product.content}
          sizes={product.sizes}
          price={product.price}
        />
      ))}
    />

    <GridImage items={itemData} />

    <Careusol
      title="Our Top Picks"
      cards={productDB.map((product, i) => (
        <ProductCard
          key={i}
          img={product.img}
          content={product.content}
          sizes={product.sizes}
          price={product.price}
        />
      ))}
    />
  </Main>
);

export default Home;
