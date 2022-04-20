import React, { useEffect } from 'react';
import Main from '../layout/main';
import Products from '../components/product';
import { commerce } from '../lib/commerce';

function Index() {
  useEffect(() => {
    commerce.products.list().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <Main>
      <Products />
    </Main>
  );
}

export default Index;
