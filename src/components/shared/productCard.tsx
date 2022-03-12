import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Box, Theme, Typography } from '@mui/material';

const Size = styled.div<{ theme?: Theme }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.secondary.main};
  color: ${({ theme }) => theme.colors.secondary.main};
  font-weight: bolder;
  margin: 0 5px;
`;
const CardStyled = styled.div<{ theme?: Theme }>`
  width: 300px;
  max-width: 100%;
  .imgBox {
    width: 100%;
    height: 400px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease-out;
    .cart-content {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 10;
      background: ${({ theme }) => `${theme.colors.primary.dark}90`};
      width: 100%;
      min-height: 100px;
      transform: translateY(100%);
      padding: 10px;
      .sizeBox {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &:hover {
      .cart-content {
        transform: translateY(0%);
      }
    }
  }
`;
function ProductCard() {
  return (
    <CardStyled>
      <div className="imgBox">
        <Image src="/jacket.jpg" width={300} height={400} alt="jacket" />
        <div className="cart-content">
          <div className="sizeBox">
            <Size>SX</Size>
            <Size>SX</Size>
            <Size>SX</Size>
            <Size>SX</Size>
          </div>
        </div>
      </div>

      <Box>
        <Typography sx={{ fontWeight: 'bolder' }}>
          WHERE SELF MADE IS MADE
        </Typography>
        <Typography>$70</Typography>
      </Box>
    </CardStyled>
  );
}

export default ProductCard;
