import React, { useState } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Theme } from '@mui/material';
import { Link } from '../shared/link';

const MenuItemStyled = styled.div`
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

const MenuItemDropDown = styled.div<{ open: boolean; theme?: Theme }>`
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

interface MenuItemProps {
  name: string;
  categories?: string[];
  trends?: string[];
  brands?: string[];
  popular_products?: { name: string; url: string }[];
}

export const MenuItem = ({
  name,
  categories,
  trends,
  brands,
  popular_products,
}: MenuItemProps) => {
  const [expanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  function close() {
    setExpanded(false);
  }

  return (
    <MenuItemStyled tabIndex={0} onFocus={expand} onBlur={close}>
      <span>{name}</span>
      <MenuItemDropDown open={expanded}>
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
      </MenuItemDropDown>
    </MenuItemStyled>
  );
};

// The Menu Wrapper
export const Menu = styled.div`
  display: flex;
  align-items: center;
`;
