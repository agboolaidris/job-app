import React, { useState } from 'react';
import { Box, Theme, Badge } from '@mui/material';
import styled from '@emotion/styled';
import { Menu, MenuItemDesktop, MenuItemMobile } from './navItem';
import { CurrencyDropDown } from '../shared/currencydropdown';
import { Link } from '../shared/link';
import categoriesDB from '../../../database/category.json';
import { BarIcon, TimesIcon } from '../shared/bar';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

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
    {
      unit: 'NGR',
      name: 'Nigeria Naira',
      symbol: '#',
    },
    {
      unit: 'EURO',
      name: 'Europe',
      symbol: 'E',
    },
  ];
  const [openMobileMenu, setopenMobileMenu] = useState(false);
  return (
    <AppBar>
      <Box
        sx={{ display: { md: 'none' } }}
        onClick={() => setopenMobileMenu(!openMobileMenu)}
      >
        {openMobileMenu ? <TimesIcon /> : <BarIcon />}
      </Box>

      <Menu sx={{ display: { xs: 'none', md: 'flex' } }}>
        {categoriesDB.map((category, i) => (
          <MenuItemDesktop
            key={i}
            name={category.name}
            categories={category.categories}
            brands={category.brands}
            trends={category.trends}
            popular_products={category.popular_product}
          />
        ))}
      </Menu>

      <Link href="/">
        <span className="logo">_IRIS_</span>
      </Link>

      <Menu sx={{ display: { xs: 'none', md: 'flex' } }}>
        <CurrencyDropDown currencies={currencies} />
        <Link href="/login">Account </Link>

        <Link href="/login" sx={{ marginLeft: 3 }}>
          Cart (0)
        </Link>
      </Menu>

      <Link href="/" sx={{ display: { md: 'none' } }}>
        <Badge badgeContent={12} color="error">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </Link>
      <Menu open={openMobileMenu} sx={{ display: { md: 'none' } }}>
        <MenuItemMobile name="Men" />
        <MenuItemMobile name="Women" />
      </Menu>
    </AppBar>
  );
}

export default Index;
