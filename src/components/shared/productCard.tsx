import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Box, Theme, Typography } from '@mui/material';
import Button from './button';

const Size = styled.div<{ theme?: Theme }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
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
    height: 350px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s ease-out;

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
        margin-top: 15px;
      }
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
      .cart-content {
        transform: translateY(0%);
      }
    }
  }
`;
interface Props {
  sizes?: string[];
  img: string;
  content: string;
  price: number;
}
function ProductCard({ sizes, img, content, price }: Props) {
  return (
    <CardStyled>
      <div className="imgBox">
        <Image src={img} layout="fill" alt={content} />
        <div className="cart-content">
          <div className="sizeBox">
            {sizes.map((size, i) => (
              <Size key={i}>{size}</Size>
            ))}
          </div>
          <Button width="100%" category="black">
            Add To Cart
          </Button>
        </div>
      </div>

      <Box sx={{ marginTop: 1 }}>
        <Typography sx={{ fontWeight: 'bolder' }}>{content}</Typography>
        <Typography>${price}</Typography>
      </Box>
    </CardStyled>
  );
}

export default ProductCard;
