import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { ButtonUnstyled } from '@mui/material';
import React from 'react';

const ButtonStyled = styled(ButtonUnstyled)`
  width: max;
`;

interface Props {
  children: ReactNode;
}
function Button({ children }: Props) {
  return <div>{children}</div>;
}

export default Button;
