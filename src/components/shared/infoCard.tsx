import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Box, Theme, Typography, useTheme } from '@mui/material';

const Wrap = styled(Box)<{ theme?: Theme }>`
  width: 300px;
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 10px 0;
`;
interface Props {
  img: string;
  title: string;
  content: string;
}

function InfoCard({ img, title, content }: Props) {
  const theme = useTheme();
  return (
    <Wrap>
      <Box sx={{ marginY: 1 }}>
        <Image src={img} width="30" height="30" alt={title} />
      </Box>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bolder' }}>
        {title}
      </Typography>
      <Typography sx={{ marginTop: 1, color: theme.colors.secondary.light }}>
        {content}
      </Typography>
    </Wrap>
  );
}

export default InfoCard;
