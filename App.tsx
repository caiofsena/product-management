import React from 'react';
import { Routes } from './src/routes';
import { AppProvider } from './src/data/context/AppProvider';
import { initFirebase } from './src/data/firebase';

export default function App(): JSX.Element {
  React.useEffect(() => {
    initFirebase();
  }, []);

  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
