import { App } from '../../types';

export function appReducer(
  app: App, 
  action: { type: string, payload: App}) {
  switch (action.type) {
    case 'setProducts': {
      return { 
        ...app,
        products: action.payload,
      };
    }
    case 'changeProduct': {
      return app.products.map(t => {
        if (app.product.id === action.payload.product.id) {
          return action.payload.product;
        } else {
          return app.product;
        }
      });
    }
    case 'setUser': {
      return { 
        ...app,
        user: action.payload
      };
    }
    case 'logout': {
      return { 
        ...app,
        user: null
      };
    }
    case 'changeUser': {
      if (app.user.id === action.payload.user.id) {
        return action.payload.user;
      } else {
        return app.user;
      }
    }
    case 'deleteUser': {
      return app.user.id !== action.payload.user.id;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}