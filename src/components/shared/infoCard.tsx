import React from 'react';
import styled from '@emotion/styled';
import { Box, IconButton, Theme, Typography, useTheme } from '@mui/material';
//import DiscountIcon from '@mui/icons-material/Discount';
//import PercentIcon from '@mui/icons-material/Percent';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
const Wrap = styled(Box)<{ theme?: Theme }>`
  width: 300px;
  max-width: 100%;
  min-height: 300px;
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
      <IconButton>
        <ShoppingCartTwoToneIcon sx={{ fontSize: '30px' }} />
      </IconButton>
      <Typography variant="h6">APPPPP</Typography>
      <Typography sx={{ marginTop: 1, color: theme.colors.secondary.light }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        totam dicta quisquam. Laborum tenetur repellendus culpa iusto.
      </Typography>
    </Wrap>
  );
}

export default InfoCard;
