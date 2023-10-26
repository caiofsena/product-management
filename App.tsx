import React from 'react';
import { Routes } from './src/routes';
import { ProductsProvider } from './src/data/context/ProductsProvider';

export default function App(): JSX.Element {
  return (
    <ProductsProvider>
      <Routes />
    </ProductsProvider>
  );
}
