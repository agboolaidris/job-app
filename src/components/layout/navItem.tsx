import React, { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const MenuItemStyled = styled.a``;
const MenuItemDropDown = styled.div<{ open: boolean; color?: string }>`
  width: 100%;
  // height: 300px;
  background-color: ${({ color }) => (color ? color : 'red')};
  position: absolute;
  top: 80px;
  left: 0;
  height: 0px;
  transition: all 0.3 ease-out;
  overflow: hidden;

  ${({ open }) =>
    open &&
    css`
      padding: 10px min(5%, 30px);
      height: max-content;
    `}
`;

interface MenuItemProps {
  children: ReactNode;
  color?: string;
}
export const MenuItem = ({ children, color }: MenuItemProps) => {
  const [expanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  function close() {
    setExpanded(false);
  }

  return (
    <>
      <MenuItemStyled tabIndex={0} onFocus={expand} onBlur={close}>
        {children}
      </MenuItemStyled>
      <MenuItemDropDown open={expanded} color={color}>
        <h1>{children}</h1>
      </MenuItemDropDown>
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
      <MenuItem color="#070">Men</MenuItem>
      <MenuItem>Women</MenuItem>
      <MenuItem>Unisex</MenuItem>
      <MenuItem>Brand</MenuItem>
    </MenuWrapper>
  );
}
