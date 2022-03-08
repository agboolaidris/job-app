import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Box, IconButton, Theme, Typography, useTheme } from '@mui/material';
//import DiscountIcon from '@mui/icons-material/Discount';
//import PercentIcon from '@mui/icons-material/Percent';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
//import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
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
interface Props {
  icon: ReactNode;
  title: string;
  content: string;
}

function InfoCard({ icon, title, content }: Props) {
  const theme = useTheme();
  return (
    <Wrap>
      <Image src="/world.png" width="30" height="30" />
      <Typography variant="h6">{title}</Typography>
      <Typography sx={{ marginTop: 1, color: theme.colors.secondary.light }}>
        {content}
      </Typography>
    </Wrap>
  );
}

export default InfoCard;
