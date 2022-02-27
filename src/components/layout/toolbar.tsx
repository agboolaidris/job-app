import React from 'react';
import { Box, Theme } from '@mui/material';
import styled from '@emotion/styled';
import { Menu, MenuItem } from './navItem';
import { CurrencyDropDown } from '../shared/currencydropdown';
import { Link } from '../shared/link';
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
  const currencies = [
    {
      unit: 'USD',
      name: 'United state',
      symbol: '$',
    },
  ];
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
        <span className="logo">_IRIS_</span>
      </Link>

      <Box>
        <Menu>
          <CurrencyDropDown currencies={currencies} />
          <Link href="/login">Account </Link>

          <Link href="/login" sx={{ marginLeft: 3 }}>
            Cart (0)
          </Link>
        </Menu>
      </Box>
    </AppBar>
  );
}

export default Index;
