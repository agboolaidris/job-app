import React, { ReactNode, useState } from 'react';
import { Box, Stack } from '@mui/material';
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
  overflow: hidden;
`;

function Careusol({ show, cards }: Props) {
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(show);

  const [items, setitems] = useState(cards);

  const handleNext = () => {
    const res = items.filter((item, i) => {
      if (i !== 0) return item;
    });
    setitems([...res, items[0]]);
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
        {items.map((card) => card)}
      </Stack>
    </Wrap>
  );
}

export default Careusol;
