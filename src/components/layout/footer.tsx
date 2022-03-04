import React from 'react';
import styled from '@emotion/styled';
import { Container, Theme, Typography } from '@mui/material';
import { Link } from '../shared/link';
import TextField from '../shared/textField';

const Wrap = styled.div<{ theme?: Theme }>`
  background-color: ${({ theme }) => theme.colors.primary.dark};
  padding: 100px 0;
  .flex {
    display: flex;
    justify-content: space-between;
  }
`;

function Footer() {
  return (
    <Wrap>
      <Container>
        <div className="flex">
          <div>
            <Typography variant="h5">Don't Miss Out</Typography>
            <Typography>
              Signup for the latest beauty news, style and products sample and
              coupons
            </Typography>
            <div className="footer-form">
              <TextField />
            </div>
          </div>
          <div>
            <p className="title">Social media</p>
            <Link href="/">Facebook</Link>
          </div>
          <div>
            <p className="title">Social media</p>
            <Link href="/">Facebook</Link>
          </div>
        </div>
      </Container>
    </Wrap>
  );
}

export default Footer;
