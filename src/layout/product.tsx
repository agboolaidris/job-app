import React, { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
function Product({ children }: Props) {
  return <div>{children}</div>;
}

export default Product;
