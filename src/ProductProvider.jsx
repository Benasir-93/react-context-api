import React, { useContext } from 'react';
import ProductContext from './ProductContext';
import data from './Data.json';

const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={data.products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

