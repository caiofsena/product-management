import React from 'react';
import { Product } from '../../types';
import { FormTemplate } from '../../components/templates/Form';
import { Alert } from 'react-native';
import { AppContext, AppDispatch } from '../../data/context/AppProvider';
import { getNextValueProductId } from '../../utils';

export function Add({ navigation }) {
  const dispatch = React.useContext(AppDispatch);
  const app = React.useContext(AppContext);
  
  function onSave(product: Product) {
    if (app) {
      const changedProductId = { 
        ...product, 
        id: getNextValueProductId(app.products)
      };
      const changedProductOnPress = {
        ...changedProductId,
        onPressCard: () => {
          navigation.navigate('Detail', { data: changedProductId });
        }
      };
      app.products.push(changedProductOnPress);
      dispatch({
        type: 'setProducts',
        payload: app.products
      });
      Alert.alert('Adicionar produto', 'Produto adicionado com sucesso!', [
        {
          text: 'OK',
          onPress: () => {
            navigation.goBack();
          }
        }
      ]);
    }
  }

  function onCancel() {
    navigation.goBack();
  }

  return (
    <FormTemplate
      buttonSave={{ text: 'Salvar', onPress: onSave }}
      buttonCancel={{ text: 'Cancelar', onPress: onCancel }}
    />
  );
}