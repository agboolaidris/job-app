import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Box, Theme, Typography } from '@mui/material';
import Button from './button';

const Size = styled.div<{ theme?: Theme }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.secondary.main};
  color: ${({ theme }) => theme.colors.secondary.main};
  font-weight: bolder;
  transition: all 0.3s ease-out;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary.main};
    color: ${({ theme }) => theme.colors.primary.main};
  }
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
      transform: translateY(100%);
      padding: 10px;
      overflow: hidden;
      .sizeBox {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      button {
        margin-top: 5px;
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
        <Image src="/jacket.jpg" layout="fill" alt="jacket" />
        <div className="cart-content">
          <div className="sizeBox">
            <Size>SX</Size>
            <Size>SX</Size>
            <Size>SX</Size>
            <Size>SX</Size>
          </div>
          <Button width="100%">Add To Cart</Button>
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
