import React from 'react';
import styled from '@emotion/styled';
import { Theme } from '@mui/material';

const BarStyled = styled.div<{ theme?: Theme }>`
  display: flex;
  flex-direction: column;
  height: 15px;
  justify-content: space-between;
  cursor: pointer;
  span {
    width: 25px;
    height: 2px;
    background: ${({ theme }) => theme.colors.secondary.main};
    &:last-of-type {
      width: 15px;
    }
  }
`;

export function BarIcon() {
  return (
    <BarStyled>
      <span></span>
      <span></span>
      <span></span>
    </BarStyled>
  );
}

const TimesStyled = styled.div<{ theme?: Theme }>`
  position: relative;
  height: 15px;
  width: 25px;
  cursor: pointer;
  span {
    display: block;
    width: 25px;
    height: 2px;
    position: absolute;
    background: ${({ theme }) => theme.colors.secondary.main};
    top: 50%;
    transform: translateY(-50%);
    &:last-of-type {
      transform: rotate(45deg);
    }
    &:first-of-type {
      transform: rotate(-45deg);
    }
  }
`;

export function TimesIcon() {
  return (
    <TimesStyled>
      <span></span>
      <span></span>
    </TimesStyled>
  );
}
