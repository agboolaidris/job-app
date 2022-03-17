import React, { ReactNode, useState } from 'react';
import { Box, Stack, Theme } from '@mui/material';
import styled from '@emotion/styled';
import Button from './button';

interface Props {
  cards: ReactNode[];
}

const Wrap = styled(Box)<{ theme?: Theme }>`
  padding: 100px 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 30px;
  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column-reverse;
  }
  .button {
    width: max-content;
    display: flex;
    padding-right: 10px;
  }
`;

function Careusol({ cards }: Props) {
  const [items, setitems] = useState(cards);

  const handleNext = () => {
    const res = items.filter((item, i) => {
      if (i !== 0) return item;
    });
    setitems([...res, items[0]]);
  };
  const handlePrevious = () => {
    const res = items.filter((item, i) => {
      if (i !== items.length - 1) return item;
    });
    setitems([items[items.length - 1], ...res]);
  };

  return (
    <Wrap>
      <div className="button">
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
