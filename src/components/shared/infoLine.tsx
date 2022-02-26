import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Forest', 'Building', 'Tree', 'Color'];

const LineStyle = styled.div<{ theme?: Theme }>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  text-align: center;
  padding: 5px;
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
`;

interface Props {
  Texts: string[];
}
function InfoLine({ Texts }: Props) {
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <LineStyle>
      <TextTransition
        text={TEXTS[index % Texts.length]}
        springConfig={presets.wobbly}
      />
    </LineStyle>
  );
}

export default InfoLine;
