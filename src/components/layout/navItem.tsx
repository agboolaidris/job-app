import React, { ReactNode, useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';

const MenuItemStyled = styled.a``;
const MenuItemDropDown = styled.div<{ open: boolean; color?: string }>`
  width: 100%;
  // height: 300px;
  background-color: ${({ color }) => (color ? color : 'red')};
  position: absolute;
  top: 80px;
  left: 0;
  height: ${({ open }) => (open ? '300px' : '0px')};
  transition: all 0.3 ease-out;
  overflow: hidden;
`;

interface MenuItemProps {
  children: ReactNode;
  color?: string;
}
export const MenuItem = ({ children, color }: MenuItemProps) => {
  const [open, setopen] = useState(false);
  //   const ref = useRef(null);

  //   useEffect(() => {
  //     /**
  //      * Alert if clicked on outside of element
  //      */
  //     function handleClickOutside(event) {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //         console.log('hhhhh');
  //         setopen(false);
  //       } else {
  //         setopen(true);
  //       }
  //     }

  //     // Bind the event listener
  //     document.addEventListener('mousedown', handleClickOutside);
  //     return () => {
  //       // Unbind the event listener on clean up
  //       document.removeEventListener('mousedown', handleClickOutside);
  //     };
  //   }, [ref, open]);

  return (
    <>
      <MenuItemStyled onMouseOver={() => setopen(true)} o>
        {children}
      </MenuItemStyled>
      <MenuItemDropDown open={open} color={color}>
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
