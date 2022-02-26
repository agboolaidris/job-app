import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import Toobar from '../components/layout/toolbar';
import InfoLine from '../components/shared/infoLine';
interface StyleProps {
  theme?: Theme;
}

const Wrapper = styled(Box)<StyleProps>`
  min-height: 100vh;
`;

interface Props {
  children: ReactNode;
}

function Main({ children }: Props) {
  return (
    <Wrapper>
      <Toobar />
      <InfoLine />
      <Container>{children}</Container>
    </Wrapper>
  );
}

export default Main;
