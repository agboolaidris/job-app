import React, { ReactNode, useState } from 'react';
import { Stack, Theme, Typography } from '@mui/material';
import styled from '@emotion/styled';
import Button from './button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Props {
  cards: ReactNode[];
  title: string;
}

const Wrap = styled.div<{ theme?: Theme }>`
  padding: 100px 0;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  width: 100%;
  .side {
    padding: 0px 10px;
    width: 100%;
    .button {
      padding: 80px 0;
      display: flex;
      justify-content: center;
    }
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
    .side {
      padding: 10px 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .button {
        padding: 0;
        display: flex;
        justify-content: center;
      }
    }
  }
`;

function Careusol({ cards, title }: Props) {
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
      <div className="side">
        <Typography
          sx={{ width: 'max-content', fontSize: { xs: '20px', md: '40px' } }}
        >
          {title}
        </Typography>
        <div className="button">
          <Button onClick={handlePrevious}>
            <ArrowBackIosNewIcon />
          </Button>
          <Button onClick={handleNext}>
            <ArrowForwardIosIcon />
          </Button>
        </div>
      </div>
      <Stack direction="row" spacing={2}>
        {items.map((card) => card)}
      </Stack>
    </Wrap>
  );
}

export default Careusol;
