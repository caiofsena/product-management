import React, { useContext, useEffect } from 'react';
import { Product } from '../../types';
import { AppContext, AppDispatch } from '../../data/context/AppProvider';
import { getAllProducts, getCategories } from '../../data/api';
import { ShowcaseTemplate } from '../../components/templates/ShowcaseTemplate';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const dispatch = useContext(AppDispatch);
  const app = useContext(AppContext);

  const [ searchText, setSearchText ] = React.useState('');
  const [ filteredProducts, setFilteredProducts ] = React.useState<Array<Product>>([]);
  const [ highlightProducts, setHighlightProducts ] = React.useState<Array<Product>>([]);
  const [ categoryProducts, setCategoryProducts ] = React.useState<Array<string>>([]);
  const [ filterShow, setfilterShow ] = React.useState(false);
  const [ filterSelection, setfilterSelection ] = React.useState('');

  const navigation = useNavigation();

  useEffect(() => {
    getAllProducts().then((response) => {
      if (response) {
        const result = 
          response.data.products.map(item => ({...item, onPressCard: () => {
            navigation.navigate('Detail', { data: item });
          }}));
        dispatch({
          type: 'setProducts',
          payload: result
        });
        setFilteredProducts(result);
        setHighlightProducts(result);
      }
    });
    getCategories().then((response) => {
      if (response) {
        setCategoryProducts(response.data);
      }
    });
  }, []);

  function onSearch() {
      if (app) {
        const result = 
          app.products.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase())) ;
        setFilteredProducts(result);
        Keyboard.dismiss();
      }
  }

  function onChangeSearchText(text: string) {
    setSearchText(text);
  }

  function onShow() {
    setfilterShow(true);
  }

  function onClose() {
    setfilterShow(false);
  }

  function onFilter(category: string) {
    navigation.navigate('Category', { data: category })
    setfilterShow(false);
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
        list: categoryProducts,
        selection: filterSelection,
        visible: filterShow,
        icon: { name: 'filter', size: 28 },
        onShow: onShow,
        onClose: onClose,
        onFilter: onFilter
      }}
      highlightText='Destaques'
      products={filteredProducts}
      highlightProducts={highlightProducts}
    />
  );
}