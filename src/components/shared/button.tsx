import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Theme } from '@mui/material';

interface Props {
  theme?: Theme;
  width?: string;
  category?: 'black';
}

const Button = styled.button<Props>`
  width: ${({ width }) => (width ? width : 'max-content')};
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.secondary.main};
  background: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary.light};
  &:hover {
    background: ${({ theme }) => theme.colors.secondary.main};
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export default Button;
