import React from 'react';
import styled from '@emotion/styled';
import { Box, Container, Stack, Theme, Typography } from '@mui/material';
import { Link } from '../shared/link';
import TextField from '../shared/textField';
import Button from '../shared/button';

const Wrap = styled.div<{ theme?: Theme }>`
  background-color: ${({ theme }) => theme.colors.primary.dark};
  padding: 100px 0;
  .flex {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

function Footer() {
  return (
    <Wrap>
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          justifyContent="space-between"
        >
          <Box sx={{ width: '400px', maxWidth: '100%' }}>
            <Typography variant="h5">Don't Miss Out</Typography>
            <Typography>
              Signup for the latest beauty news, style and products sample and
              coupons
            </Typography>
            <Stack sx={{ marginTop: 3 }} direction="row" spacing={1}>
              <TextField />
              <Button>Submit</Button>
            </Stack>
          </Box>
          <div>
            <p className="title">Social media</p>
            <Link href="/" sx={{ display: 'block', marginY: 1 }}>
              Facebook
            </Link>
            <Link href="/" sx={{ display: 'block', marginY: 1 }}>
              Facebook
            </Link>{' '}
            <Link href="/" sx={{ display: 'block', marginY: 1 }}>
              Facebook
            </Link>
          </div>
          <div>
            <p className="title">Social media</p>
            <Link href="/">Facebook</Link>
          </div>
        </Stack>
      </Container>
    </Wrap>
  );
}

export default Footer;
