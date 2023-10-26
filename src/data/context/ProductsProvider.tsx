import React, { createContext, useReducer } from 'react';
import { Product } from '../../types';
import { productsReducer } from '../reducer';

export const ProductsContext = createContext([]);
export const ProductsDispatch = createContext(null);

export function ProductsProvider({ children }) {
  const [ products, dispatch ] = useReducer(
    productsReducer,
    initialProducts
  );

  return (
    <ProductsContext.Provider value={products}>
      <ProductsDispatch.Provider value={dispatch}>
        { children }
      </ProductsDispatch.Provider>
    </ProductsContext.Provider>
  );
}

const initialProducts: Array<Product> = [];