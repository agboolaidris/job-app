import React from 'react';
import styled from '@emotion/styled';
import { Box, Container, Theme, Typography } from '@mui/material';
import { Link } from '../shared/link';
import TextField from '../shared/textField';
import Button from '../shared/button';

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
            <Box sx={{ marginTop: 3, display: 'flex', alignItems: 'center' }}>
              <TextField />
              <Button>Submit</Button>
            </Box>
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
