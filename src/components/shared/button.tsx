import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Theme } from '@mui/material';

const Button = styled.button<{ theme?: Theme; width?: string }>`
  width: ${({ width }) => (width ? width : '200px')};
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.secondary.main};
  cursor: pointer;
`;

// interface Props {
//   children: ReactNode;
//   width?: string;
// }
// function Button({ children, width }: Props) {
//   return <ButtonStyled width={width}>{children}</ButtonStyled>;
// }

export default Button;
