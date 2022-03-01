import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Theme, Box } from '@mui/material';
import { Link } from '../shared/link';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';

const MenuItemDesktopStyled = styled.div`
  margin-right: 20px;
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

const MenuItemDropDownDesktop = styled.div<{ open: boolean; theme?: Theme }>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  position: absolute;
  top: 80px;
  left: 0;
  height: 0px;
  transition: all 0.3 ease-out;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  z-index: 20;
  .start-flex {
    display: flex;

    ul {
      list-style: none;
      padding-inline-start: 0px;
      margin-right: 40px;
      &:first-of-type {
        margin-top: 30px;
      }
      li {
        font-size: 0.8rem;
        cursor: pointer;
        opacity: 0.8;
        &:hover {
          text-decoration: underline;
        }
      }
      .title {
        font-weight: bolder;
        opacity: 1 !important;
        margin-bottom: 10px;
        text-decoration: none !important;
      }
    }
  }

  .end-flex {
    display: flex;
    width: 700px;
    max-width: 70%;
    .imgBox {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      margin-left: 20px;
      width: 33.3%;
      span {
        margin-top: 10px;
        font-size: 0.8rem;
        font-weight: bolder;
      }
    }
  }

  ${({ open }) =>
    open &&
    css`
      padding: 20px min(5%, 30px);
      height: max-content;
    `};
`;

interface MenuItemDesktopProps {
  name: string;
  categories?: string[];
  trends?: string[];
  brands?: string[];
  popular_products?: { name: string; url: string }[];
}

export const MenuItemDesktop = ({
  name,
  categories,
  trends,
  brands,
  popular_products,
}: MenuItemDesktopProps) => {
  const [expanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  function close() {
    setExpanded(false);
  }

  return (
    <MenuItemDesktopStyled tabIndex={0} onFocus={expand} onBlur={close}>
      <span>{name}</span>
      <MenuItemDropDownDesktop open={expanded}>
        <div className="start-flex">
          {trends && (
            <ul>
              {trends.map((trend, i) => (
                <li key={i}>
                  <Link href="/men">{trend}</Link>
                </li>
              ))}
            </ul>
          )}
          {categories && (
            <ul>
              <li className="title">Categories</li>
              {categories.map((category, i) => (
                <li key={i}>
                  <Link href="/men">{category}</Link>
                </li>
              ))}
            </ul>
          )}
          {brands && (
            <ul>
              <li className="title">Brands</li>
              {brands.map((brand, i) => (
                <li key={i}>
                  <Link href="/men">{brand}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="end-flex">
          {popular_products.map((product, i) => (
            <div className="imgBox" key={i}>
              <Image
                src={product.url}
                layout="intrinsic"
                alt="jjj"
                width={200}
                height={200}
              />
              <span>{product.name}</span>
            </div>
          ))}
        </div>
      </MenuItemDropDownDesktop>
    </MenuItemDesktopStyled>
  );
};

const MenuItemMobileStyled = styled.div<{ theme?: Theme }>`
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

  a {
    font-size: 1.2rem !important;
  }

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
