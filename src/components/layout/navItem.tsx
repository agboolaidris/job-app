import React, { ReactNode, useState } from 'react';
import MuiMenuItem from '@mui/material/MenuItem';
import MUIMenu from '@mui/material/Menu';
import { Divider, Avatar } from '@mui/material';
import styled from '@emotion/styled';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';

const MenuItemStyled = styled.a``;
const MenuItemDropDown = styled.div`
  width: 100%;
  height: 300px;
  background-color: red;
  position: absolute;
  left: 0;
`;

interface MenuItemProps {
  children: ReactNode;
}
export const MenuItem = ({ children }: MenuItemProps) => {
  return (
    <>
      <MenuItemStyled>{children}</MenuItemStyled>
    </>
  );
};

// The Menu Wrapper
const MenuWrapper = styled.div`
  display: flex;
  cursor: pointer;
  ${MenuItemStyled} {
    margin-left: 20px;
    font-size: 0.8rem;
    opacity: 0.7;
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      font-weight: bolder;
      opacity: 1;
    }
  }
`;

export function Menu() {
  return (
    <MenuWrapper>
      <MenuItem>Men</MenuItem>
      <MenuItem>Women</MenuItem>
      <MenuItem>Unisex</MenuItem>
      <MenuItem>Brand</MenuItem>
    </MenuWrapper>
  );
}
