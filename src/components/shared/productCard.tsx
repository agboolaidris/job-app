import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
const CardStyled = styled.div`
  width: 300px;
  max-width: 100%;
  .imgBox {
    width: 100%;
    height: 300px;
  }
`;
function ProductCard() {
  return (
    <CardStyled>
      <div className="imgBox">
        <Image src="/jacket.jpg" width={300} height={300} alt="jacket" />
      </div>
      <Box>
        <Typography sx={{ fontWeight: 'bolder' }}>
          Lorem ipsum, dolor sit amet
        </Typography>
        <Typography>$70</Typography>
      </Box>
    </CardStyled>
  );
}

export default ProductCard;
