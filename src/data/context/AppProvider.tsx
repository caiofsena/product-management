import React, { createContext, useReducer } from 'react';
import { App } from '../../types';
import { appReducer } from '../reducer';

export const AppContext = createContext<App>(null);
export const AppDispatch = createContext(null);

export function AppProvider({ children }) {
  const [ app, dispatch ] = useReducer(
    appReducer,
    initialApp
  );

  return (
    <AppContext.Provider value={app}>
      <AppDispatch.Provider value={dispatch}>
        { children }
      </AppDispatch.Provider>
    </AppContext.Provider>
  );
}

const initialApp: App = {
  products: [],
  product: null,
  user: null
};