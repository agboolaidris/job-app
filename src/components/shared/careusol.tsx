import React, { ReactNode, useEffect, useState } from 'react';
import { Container, Box, Stack } from '@mui/material';
import styled from '@emotion/styled';
import Button from './button';

interface Props {
  children: ReactNode;
  show: number;
}

const Wrap = styled(Box)`
  padding: 100px 0;
  display: flex;
  align-items: center;
`;

function Careusol({ children, show }: Props) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(show);
  //   useEffect(() => {
  //     alert(React.Children);
  //   }, []);

  const handleNext = () => {
    setStart(() => end + show);
    setEnd(() => end + show);
  };
  const handlePrevious = () => {
    setStart(() => end - show);
    setEnd(() => end - show);
  };

  return (
    <Wrap>
      <div className="Button">
        <Button onClick={handlePrevious}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
      <Stack direction="row" spacing={2}>
        {React.Children.map(
          children,
          (child: React.DetailedReactHTMLElement<any, HTMLElement>, i) => {
            if (i > start && i < end) return React.cloneElement(child);
          }
        )}
      </Stack>
    </Wrap>
  );
}

export default Careusol;
