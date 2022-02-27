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
      </div>
      <BackgroundSlider images={images} duration={8} transition={2} />
    </Wrapper>
  );
}

export default Welcome;
