import styled from '@emotion/styled';
import { Stack, Theme } from '@mui/material';
import React from 'react';
import BackgroundSlider from 'react-background-slider';
import Button from '../shared/button';
import { Link } from '../shared/link';
const Wrapper = styled.div<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.primary.main};
  width: 100%;
  min-height: calc(100vh - 110px);
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    text-align: center;
  }
  h1 {
    font-weight: bolder;
  }
`;
interface Props {
  images: string[];
}
function Welcome({ images }: Props) {
  return (
    <Wrapper>
      <div>
        <h1>_IRIS_ Fashion Home</h1>
        <p>Plan your next outfit with us</p>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          justifyContent="center"
        >
          <Link href="/job">
            <Button category="white" width="200px">
              shop Men
            </Button>
          </Link>
          <Link href="/job">
            <Button category="white" width="200px">
              shop Women
            </Button>
          </Link>
        </Stack>
      </div>
      <BackgroundSlider images={images} duration={8} transition={2} />
    </Wrapper>
  );
}

export default Welcome;
