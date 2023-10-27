import React from 'react';
import { Product } from '../../types';
import { CategoryTemplate } from '../../components/templates/CategoryTemplate';
import { getProductsCategory } from '../../data/api';

export function Category({ navigation, route }) {
  const [ productsCategory, setProductsCategory ] = React.useState<Array<Product>>([]);
  const { data } = route.params;

  React.useEffect(() => {
    getProductsCategory(data).then((response) => {
      if (response) {
        const result = 
        response.data.products.map(item => ({...item, onPressCard: () => {
          navigation.navigate('Detail', { data: item });
        }}));
        setProductsCategory(result);
      }
    });
  }, []);
  
  return (
    <CategoryTemplate 
      name={data}
      products={productsCategory}
    />
  );
}