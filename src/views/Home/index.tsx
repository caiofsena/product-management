import React, { useContext, useEffect } from 'react';
import { Product } from '../../types';
import { ProductsContext, ProductsDispatch } from '../../data/context/ProductsProvider';
import { getAllProducts } from '../../data/api';
import { ShowcaseTemplate } from '../../components/templates/ShowcaseTemplate';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const products: Array<Product> = useContext(ProductsContext);
  const dispatch = useContext(ProductsDispatch);

  const [ searchText, setSearchText ] = React.useState('');
  const [ filteredProducts, setFilteredProducts ] = React.useState<Array<Product>>([]);
  const highlightProducts = products.filter(item => item);

  const navigation = useNavigation();

  useEffect(() => {
    getAllProducts().then((response) => {
      if (response) {
        const result = 
          response.data.products.map(item => ({...item, onPressCard: () => {
            navigation.navigate('Detail', { data: item });
          }}));
        dispatch({
          type: 'set',
          payload: result
        });
        setFilteredProducts(result);
      }
    });
  }, []);

  function onSearch() {
    const result = 
      products.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredProducts(result);
    Keyboard.dismiss();
  }

  function onChangeSearchText(text: string) {
    setSearchText(text);
  }

  return (
    <ShowcaseTemplate
      search={{ 
        value: searchText,
        placeholder: 'Pesquisar produto', 
        icon: { name: 'text-search', size: 28 },
        onSearch: onSearch,
        onChangeSearchText: onChangeSearchText
      }}
      filter={{
        icon: { name: 'filter', size: 28 },
      }}
      highlightText='Destaques'
      products={filteredProducts}
      highlightProducts={highlightProducts}
    />
  );
}