import styled from '@emotion/styled';
import { Container, Theme } from '@mui/material';
import React from 'react';

const Wrap = styled.div<{ theme?: Theme }>`
  background-color: ${({ theme }) => theme.colors.primary.dark};
  padding: 100px 0;
  .flex {
    display: flex;
  }
`;

function Footer() {
  return (
    <Wrap>
      <Container>
        <div className="flex">
          <div>
            <p className="title"></p>
          </div>
        </div>
      </Container>
    </Wrap>
  );
}

export default Footer;
