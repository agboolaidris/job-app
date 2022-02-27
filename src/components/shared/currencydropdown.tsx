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
