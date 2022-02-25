import React from 'react';
import Link from 'next/link';
import { Box, Theme } from '@mui/material';
import styled from '@emotion/styled';
import { Menu, MenuItem } from './navItem';
import categoriesDB from '../../../database/category.json';

const AppBar = styled.nav<{ theme?: Theme }>`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 min(5%, 30px);
  position: relative;
  .logo {
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.secondary.main};
  }
`;

function Index() {
  return (
    <AppBar>
      <Box>
        <Menu>
          {categoriesDB.map((category, i) => (
            <MenuItem
              key={i}
              name={category.name}
              categories={category.categories}
              brands={category.brands}
              trends={category.trends}
              popular_products={category.popular_product}
            />
          ))}
        </Menu>
      </Box>

      <Link href="/">
        <a className="logo">_IRIS_</a>
      </Link>

      <Box>HHHHHH</Box>
    </AppBar>
  );
}

export default Index;
