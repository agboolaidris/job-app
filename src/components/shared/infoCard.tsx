import React from 'react';
import styled from '@emotion/styled';
import { Box, Theme, Typography, useTheme } from '@mui/material';
const Wrap = styled(Box)<{ theme?: Theme }>`
  width: 300px;
  max-width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

function InfoCard() {
  const theme = useTheme();
  return (
    <Wrap>
      <Typography variant="h5">APPPPP</Typography>
      <Typography sx={{ marginTop: 2, color: theme.colors.secondary.light }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        totam dicta quisquam. Laborum tenetur repellendus culpa iusto.
      </Typography>
    </Wrap>
  );
}

export default InfoCard;
