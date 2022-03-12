import React, { ReactNode, useEffect, useState } from 'react';
import { Container, Box, Stack } from '@mui/material';
import styled from '@emotion/styled';
import Button from './button';

interface Props {
  cards: ReactNode[];
  show?: number;
}

const Wrap = styled(Box)`
  padding: 100px 0;
  display: flex;
  align-items: center;
`;

function Careusol({ show, cards }: Props) {
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(show);
  //   useEffect(() => {
  //     alert(show);
  //   }, []);

  const handleNext = () => {
    if (start > 0) {
      setStart(1);
      setEnd(show);
    } else {
      setStart(() => end + show);
      setEnd(() => end + show);
    }
  };
  const handlePrevious = () => {
    if (start > 0) {
      setStart(() => end - show);
      setEnd(() => end - show);
    }
  };

  return (
    <Wrap>
      <div className="Button">
        <Button onClick={handlePrevious}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
      <Stack direction="row" spacing={2}>
        {cards.map((card) => card)}
      </Stack>
    </Wrap>
  );
}

export default Careusol;
