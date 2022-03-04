import React from 'react';
import styled from '@emotion/styled';
import { Box, Theme } from '@mui/material';

const Wrap = styled(Box)<{ theme?: Theme }>`
  width: 100%;
  input {
    display: block;
    height: 50px;
    width: 100%;
    outline: none;
    padding: 10px;
    background: ${({ theme }) => theme.colors.primary.main};
    border: 1px solid ${({ theme }) => theme.colors.secondary.main};
    &:hover,
    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.secondary.main};
    }
  }
`;

interface Props {
  label?: string;
}
function TextField({ label }: Props) {
  return (
    <Wrap>
      {label && <label>{label}</label>}
      <input placeholder="enter your email address" />
    </Wrap>
  );
}

export default TextField;
