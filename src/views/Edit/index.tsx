import React from 'react';
import { Product } from '../../types';
import { FormTemplate } from '../../components/templates/Form';
import { AppContext, AppDispatch } from '../../data/context/AppProvider';

export function Edit({ navigation, route }) {
  const dispatch = React.useContext(AppDispatch);
  const app = React.useContext(AppContext);
  const { data }: {data: Product} = route.params;

  function onSave(product: Product) {
    if (app) {
      const updatedProducts = app.products.map(item => {
        if (item.id === product.id) {
          return { ...product, onPressCard: () => {
            navigation.navigate('Detail', { data: product });
          }}
        }
        return { ...item }
      });
      dispatch({
        type: 'setProducts',
        payload: updatedProducts
      });
      navigation.navigate('Detail', { data: product });
    }
  }

  function onCancel() {
    navigation.goBack();
  }

  return (
    <FormTemplate 
      data={data}
      buttonSave={{ text: 'Salvar', onPress: onSave }}
      buttonCancel={{ text: 'Cancelar', onPress: onCancel }}
    />
  );
}