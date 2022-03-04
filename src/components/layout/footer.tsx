import React from 'react';
import styled from '@emotion/styled';
import {
  Box,
  Container,
  Stack,
  Theme,
  Typography,
  Divider,
  IconButton,
} from '@mui/material';
import { Link } from '../shared/link';
import TextField from '../shared/textField';
import Button from '../shared/button';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Wrap = styled.div<{ theme?: Theme }>`
  background-color: ${({ theme }) => theme.colors.primary.dark};
  padding: 100px 0;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 50px 0;
  }
`;

function Footer() {
  return (
    <Wrap>
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          justifyContent={{ sx: 'center', md: 'space-between' }}
        >
          <Box sx={{ width: { xs: '500px', md: '400px' }, maxWidth: '100%' }}>
            <Typography variant="h5">Don't Miss Out</Typography>
            <Typography variant="caption">
              Signup for the latest beauty news, style and products sample and
              coupons
            </Typography>
            <Stack sx={{ marginTop: 3 }} direction="row" spacing={1}>
              <TextField />
              <Button>Submit</Button>
            </Stack>
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bolder' }}>
              ABOUT IRIS
            </Typography>
            <Link href="/" sx={{ display: 'block', marginY: 1 }}>
              About us
            </Link>
            <Link href="/" sx={{ display: 'block', marginY: 1 }}>
              Discount
            </Link>{' '}
            <Link href="/" sx={{ display: 'block', marginY: 1 }}>
              Career
            </Link>
            <Link href="/" sx={{ display: 'block', marginY: 1 }}>
              Contact
            </Link>
            <Link href="/" sx={{ display: 'block', marginY: 1 }}>
              Chat us
            </Link>{' '}
            <Link href="/" sx={{ display: 'block', marginY: 1 }}>
              Help Center
            </Link>
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bolder' }}>
              ABOUT IRIS
            </Typography>
            <Link href="/" sx={{ display: 'block', marginY: 1 }}>
              About us
            </Link>
            <Link href="/" sx={{ display: 'block', marginY: 1 }}>
              Discount
            </Link>{' '}
            <Link href="/" sx={{ display: 'block', marginY: 1 }}>
              Career
            </Link>
            <Link href="/" sx={{ display: 'block', marginY: 1 }}>
              Contact
            </Link>
            <Link href="/" sx={{ display: 'block', marginY: 1 }}>
              Chat us
            </Link>{' '}
            <Link href="/" sx={{ display: 'block', marginY: 1 }}>
              Help Center
            </Link>
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bolder' }}>
              ABOUT IRIS
            </Typography>
            <Link href="/" sx={{ display: 'block', marginY: 1 }}>
              About us
            </Link>
            <Link href="/" sx={{ display: 'block', marginY: 1 }}>
              Discount
            </Link>{' '}
            <Link href="/" sx={{ display: 'block', marginY: 1 }}>
              Career
            </Link>
            <Link href="/" sx={{ display: 'block', marginY: 1 }}>
              Contact
            </Link>
            <Link href="/" sx={{ display: 'block', marginY: 1 }}>
              Chat us
            </Link>{' '}
            <Link href="/" sx={{ display: 'block', marginY: 1 }}>
              Help Center
            </Link>
          </Box>
        </Stack>
        <Divider sx={{ marginY: 3 }} />
        <Stack justifyContent="center" direction="row" spacing={2}>
          <Link href="/">
            <IconButton>
              <FacebookRoundedIcon />
            </IconButton>
          </Link>
          <Link href="/">
            <IconButton>
              <TwitterIcon />
            </IconButton>
          </Link>
          <Link href="/">
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </Link>
        </Stack>
      </Container>
    </Wrap>
  );
}

export default Footer;
