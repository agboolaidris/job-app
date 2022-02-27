import React from 'react';
import styled from '@emotion/styled';
const BarStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 15px;
  justify-content: space-between;
  span {
    width: 25px;
    height: 2px;
    background: red;
  }
`;

function BarIcon() {
  return (
    <BarStyled>
      <span></span>
      <span></span>
      <span></span>
    </BarStyled>
  );
}

export default BarIcon;
