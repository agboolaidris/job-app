import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

const Wrap = styled(Box)`
  width: 100%;
  border: 2px solid red;
  min-height: 40px;
`;

function Button() {
  return <Wrap></Wrap>;
}

export default Button;
