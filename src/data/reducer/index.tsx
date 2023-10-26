import { Product } from '../../types';

export function productsReducer(
  products: Array<Product>, 
  action: { type: string, payload: Product}) {
  switch (action.type) {
  case 'set': {
    return action.payload;
  }
  case 'changed': {
    return products.map(t => {
      if (t.id === action.payload.id) {
        return action.payload;
      } else {
        return t;
      }
    });
  }
  case 'deleted': {
    return products.filter(t => t.id !== action.payload.id);
  }
  default: {
    throw Error('Unknown action: ' + action.type);
  }
  }
}