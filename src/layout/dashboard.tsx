import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import Toobar from '../components/dashboardLayout/toolbar';
interface StyleProps {
  theme?: Theme;
}

const Wrapper = styled(Box)<StyleProps>`
  min-height: 100vh;
`;

interface Props {
  children: ReactNode;
}

function Dashboard({ children }: Props) {
  return (
    <Wrapper>
      <Toobar />
      <Container>{children}</Container>
    </Wrapper>
  );
}

export default Dashboard;
