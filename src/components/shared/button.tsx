import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { ButtonUnstyled, Theme } from '@mui/material';
import { SxProps } from '@mui/system';

const ButtonStyled = styled(ButtonUnstyled)<{ theme?: Theme }>`
  width: max-content;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.secondary.main};
`;

interface Props {
  children: ReactNode;
  sx?: SxProps;
}
function Button({ children, sx }: Props) {
  return <ButtonStyled sx={sx}>{children}</ButtonStyled>;
}

export default Button;
