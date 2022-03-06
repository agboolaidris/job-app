import * as React from 'react';
import { ImageList, Typography, ImageListItem, Theme } from '@mui/material';
import { Link } from '../shared/link';
import Image from 'next/image';
import styled from '@emotion/styled';
const ImgBox = styled.div<{ theme?: Theme }>`
  width: 100%;
  height: 100%;

  a {
    opacity: 1;
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    img {
      transition: all 0.3s ease-out;

      &:hover {
        overflow: hidden;
        transform: scale(1.1);
      }
    }
    h3 {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 20;
      transform: translate(-50%);
      color: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`;

export default function QuiltedImageList() {
  return (
    <ImageList
      variant="quilted"
      sx={{ overflow: 'hidden', height: { xs: 400, md: 600 } }}
      cols={4}
      rowHeight="auto"
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <ImgBox>
            <Link href="/">
              <Image src={item.img} layout="fill" alt={item.img} />
              <Typography component="h3" sx={{ fontSize: { md: '2.5rem' } }}>
                {item.title}
              </Typography>
            </Link>
          </ImgBox>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/jacket.jpg',
    title: 'Men',
    rows: 2,
    cols: 2,
  },
  {
    img: '/mansuit.jpg',
    title: 'Wedding',
  },
  {
    img: '/womansuit.jpg',
    title: 'Women',
  },
  {
    img: '/suit.jpg',
    title: 'Unisex',
    cols: 2,
  },
];
