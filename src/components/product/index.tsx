import { Container, Grid } from '@mui/material';
import React from 'react';
import ProductCard from '../shared/productCard';
import productDB from '../../../database/products.json';

function Index() {
  return (
    <Container sx={{ paddingY: 10 }}>
      <Grid spacing={4} container justifyContent="center">
        {productDB.map((product, i) => (
          <Grid key={i} item>
            <ProductCard
              img={product.img}
              content={product.content}
              sizes={product.sizes}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Index;
