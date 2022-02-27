import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';
import { Box } from '@mui/material';
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
  const TEXTS = [
    'Free worldwide shipping on orders over $95.',
    'Subscribe for 15% off your first orde.',
    'Pay in 4 instalments with Sezzle.',
  ];

  return (
    <Wrapper>
      <Toobar />
      <InfoLine Texts={TEXTS} />
      {children}
    </Wrapper>
  );
}

export default Main;
