import React, { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Theme, Box } from '@mui/material';
import { Link } from '../shared/link';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';

export const MenuItemMobileStyled = styled.div<{ theme?: Theme }>`
  padding: 10px min(5%, 30px);
  .title {
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    opacity: 0.9;
    &:hover {
      font-weight: bolder;
      opacity: 1;
    }
  }
  a {
    font-size: 1.2rem !important;
  }
  .line {
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.secondary.light};
  }
`;

const MenuItemDropDownMobile = styled.div<{ open: boolean; theme?: Theme }>`
  width: 100%;
  height: 0;
  transition: all 0.3 ease-out;
  overflow: hidden;
  z-index: 20;

  ${({ open }) =>
    open &&
    css`
      padding: 0 min(5%, 30px);
      height: max-content;
    `};
`;

interface MenuItemMobileProps {
  name: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const MenuItemMobile = ({
  name,
  children,
  onClick,
}: MenuItemMobileProps) => {
  const [expanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  function close() {
    setExpanded(false);
  }

  return (
    <MenuItemMobileStyled tabIndex={0} onFocus={expand} onBlur={close}>
      <div className="title" onClick={onClick && onClick}>
        {name}
        {children ? (
          expanded ? (
            <KeyboardArrowUpSharpIcon />
          ) : (
            <KeyboardArrowDownSharpIcon />
          )
        ) : (
          ''
        )}
      </div>
      <MenuItemDropDownMobile open={expanded}>
        {children}
      </MenuItemDropDownMobile>
      {children ? <div className="line"></div> : ''}
    </MenuItemMobileStyled>
  );
};

// The Menu Wrapper
export const Menu = styled(Box)<{ open?: boolean; theme?: Theme }>`
  align-items: center;
  flex-direction: row;
  width: max-content;
  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 20px 0;
    position: fixed;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.primary.dark};
    left: 0;
    top: 80px;
    z-index: 30;
    flex-direction: column;
    transform: translateX(-100%);
    transition: all 0.3s ease-in-out;
    ${({ open }) =>
      open &&
      css`
        transform: translateX(0);
      `}
  }
`;

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
      height: max-content;
    `};
  ul {
    font-size: 0.8rem;
    list-style: none;
    padding-inline-start: 0px;
    width: 100%;

    li {
      width: 100%;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.secondary.main};
      opacity: 0.8;
      padding: 5px 10px;
      &:hover {
        opacity: 1;
        font-weight: bolder;
      }
    }
  }
`;

interface DropDownMenuProps {
  currencies: { unit: string; name: string; symbol?: string }[];
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
  const handleChangeCurrency = (i: number) => {
    setcurrent(i);
    close();
  };
  return (
    <MenuItemStyled tabIndex={0} onFocus={expand} onBlur={close}>
      <span>
        {currencies[current].symbol} {currencies[current].unit}
      </span>
      <MenuItemDropDown open={expanded}>
        <ul>
          {currencies.map((currency, i) => (
            <li key={i} onClick={() => handleChangeCurrency(i)}>
              <span>{currency.name}</span> <span>{currency.symbol}</span>
            </li>
          ))}
        </ul>
      </MenuItemDropDown>
    </MenuItemStyled>
  );
};

interface DownMenuProps {
  title: string;
  path: string;
  data: string[];
}
export const DropDown = ({ data, path, title }: DownMenuProps) => {
  const [expanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  function close() {
    setExpanded(false);
  }

  return (
    <MenuItemStyled tabIndex={0} onFocus={expand} onBlur={close}>
      <span>{title}</span>
      <MenuItemDropDown open={expanded}>
        <ul>
          {data.map((d, i) => (
            <li key={i} onClick={() => close()}>
              <Link href={`${path}?filter=${d}`}>
                <span>{d}</span>
              </Link>
            </li>
          ))}
        </ul>
      </MenuItemDropDown>
    </MenuItemStyled>
  );
};
