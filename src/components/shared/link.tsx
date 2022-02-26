import React, { ReactNode } from 'react';
import MUILink from '@mui/material/Link';
import { SxProps } from '@mui/system';
import NextLink from 'next/link';
import styled from '@emotion/styled';
import { Theme } from '@mui/material';

const LinkStyled = styled(MUILink)<{ theme?: Theme }>`
  font-size: 0.8rem;
  opacity: 0.7;
  color: ${({ theme }) => theme.colors.secondary.main};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    font-weight: bolder;
    opacity: 1;
  }
`;

interface LinkProps {
  children: ReactNode;
  href: string;
  sx?: SxProps;
}

export const Link = ({ children, href, sx }: LinkProps) => {
  return (
    <NextLink href={href}>
      <LinkStyled sx={sx}>{children}</LinkStyled>
    </NextLink>
  );
};
