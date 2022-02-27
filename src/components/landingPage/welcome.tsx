import styled from '@emotion/styled';
import React from 'react';
import BackgroundSlider from 'react-background-slider';
const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 90px);
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface Props {
  images: string[];
}
function Welcome({ images }: Props) {
  return (
    <Wrapper>
      <h1>Welcome TO _IRIS_ FASHION HOME</h1>
      <BackgroundSlider images={images} duration={8} transition={2} />
    </Wrapper>
  );
}

export default Welcome;
