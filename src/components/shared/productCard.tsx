import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
const CardStyled = styled.div`
  width: 300px;
  max-width: 100%;
  .imgBox {
    width: 100%;
    height: 300px;
  }
`;
function ProductCard() {
  return (
    <CardStyled>
      <div className="imgBox">
        <Image src="/jacket.png" layout="fill" alt="jacket" />
      </div>
    </CardStyled>
  );
}

export default ProductCard;
