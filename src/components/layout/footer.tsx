import styled from '@emotion/styled';
import { Container, Theme } from '@mui/material';
import React from 'react';

const Wrap = styled.div<{ theme?: Theme }>`
  // background: ${({ theme }) => theme.colors.primary.dark};
  padding: 100px 0;
`;

function Footer() {
  return (
    <Wrap>
      <Container>HHHHHHH</Container>
    </Wrap>
  );
}

export default Footer;
