import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Theme } from '@mui/material';

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

interface DropDownMenuProps {
  name: string;
}
export const CurrencyDropDown = ({ name }: DropDownMenuProps) => {
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
      <MenuItemDropDown open={expanded}>name</MenuItemDropDown>
    </MenuItemStyled>
  );
};
