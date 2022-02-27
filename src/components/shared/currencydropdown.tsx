import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Theme } from '@mui/material';

const MenuItemStyled = styled.div`
  margin-right: 20px;
  position: relative;
  & > span {
    font-size: 0.8rem;
    opacity: 0.7;
    cursor: pointer;
    &:hover {
      font-weight: bolder;
      opacity: 1;
    }
  }
`;

const MenuItemDropDown = styled.div<{ open: boolean; theme?: Theme }>`
  min-width: 150px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  position: absolute;
  top: 30px;
  left: 0;
  height: 0px;
  transition: all 0.3 ease-out;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  ${({ open }) =>
    open &&
    css`
      padding: 10px;
      height: max-content;
    `};
  ul {
    font-size: 0.9rem;
    list-style: none;
    background-color: blue;
    li {
      width: max-content;
      display: flex;
      justify-content: space-between;
      background: red;
      width: 100%;
    }
  }
`;

interface DropDownMenuProps {
  currencies: { unit: string; name: string; symbol: string }[];
}
export const CurrencyDropDown = ({ currencies }: DropDownMenuProps) => {
  const [expanded, setExpanded] = useState(false);
  const [current, setcurrent] = useState(0);

  function expand() {
    setExpanded(true);
  }

  function close() {
    setExpanded(false);
  }
  return (
    <MenuItemStyled tabIndex={0} onFocus={expand} onBlur={close}>
      <span>
        {currencies[current].symbol} {currencies[current].unit}
      </span>
      <MenuItemDropDown open={expanded}>
        <ul>
          {currencies.map((currency, i) => (
            <li key={i}>
              <span>{currency.name}</span> <span>{currency.symbol}</span>
            </li>
          ))}
        </ul>
      </MenuItemDropDown>
    </MenuItemStyled>
  );
};
