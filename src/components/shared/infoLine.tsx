import React from 'react';
import styled from '@emotion/styled';
import { Theme } from '@mui/material';
const LineStyle = styled.div<{ theme?: Theme }>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  text-align: center;
  padding: 5px;
  font-size: 0.9rem;
`;

function InfoLine() {
  return <LineStyle>Hellow pprld</LineStyle>;
}

export default InfoLine;
