import React from 'react';
import { DetailTemplate } from '../../components/templates/DetailTemplate';
import { Product } from '../../types';
import { Alert } from 'react-native';
import { deleteProduct } from '../../data/api';
import remoteConfig from '@react-native-firebase/remote-config';
import { AppContext, AppDispatch } from '../../data/context/AppProvider';

export function Detail({ navigation, route }) {
  const { data }: {data: Product} = route.params;
  const dispatch = React.useContext(AppDispatch);
  const app = React.useContext(AppContext);
  const remoteToggleEditProduct = remoteConfig().getValue('edit_product').asBoolean();
  const remoteToggleDeleteProduct = remoteConfig().getValue('delete_product').asBoolean();

  function onEdit() {
    navigation.navigate('Edit', { data: data });
  }

  function onDelete() {
    Alert.alert(
      'Excluir produto', 
      'Deseja realmente excluir o produto?', 
      [
        {
          text: 'SIM',
          onPress: () => {
            if (app) {
              app.products.filter((item, key) => {
                if (item.id === data.id) {
                  app.products.splice(key, 1);
                }
              });
              dispatch({
                type: 'setProducts',
                payload: app.products
              });
              navigation.goBack();
            }
          }
        },
        {
          text: 'NÃO'
        }
      ]);
  }

  return (
    <DetailTemplate 
      data={data}
      buttonEdit={{ text: 'Editar', visible: remoteToggleEditProduct, onPress: onEdit }}
      buttonDelete={{ text: 'Excluir', visible: remoteToggleDeleteProduct, onPress: onDelete }}
    />
  );
}