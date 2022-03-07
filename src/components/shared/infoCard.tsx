import React from 'react';
import styled from '@emotion/styled';
import { Box, Theme } from '@mui/material';
const Wrap = styled(Box)<{ theme?: Theme }>`
  width: 300px;
  max-width: 100%;
  height: 300px;
  background: red;
`;

function InfoCard() {
  return <Wrap></Wrap>;
}

export default InfoCard;
