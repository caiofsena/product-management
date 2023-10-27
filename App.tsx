import React from 'react';
import { Routes } from './src/routes';
import { AppProvider } from './src/data/context/AppProvider';

export default function App(): JSX.Element {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
