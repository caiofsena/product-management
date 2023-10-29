import React, { useContext, useEffect } from 'react';
import { Product } from '../../types';
import { AppContext, AppDispatch } from '../../data/context/AppProvider';
import { getAllProducts, getCategories } from '../../data/api';
import { ShowcaseTemplate } from '../../components/templates/ShowcaseTemplate';
import { Keyboard } from 'react-native';
import remoteConfig from '@react-native-firebase/remote-config';

export function Home({ navigation }) {
  const dispatch = useContext(AppDispatch);
  const app = useContext(AppContext);
  const remoteConfigHighlights = remoteConfig().getValue('highlights').asString();
  const remoteToggleAddProduct = remoteConfig().getValue('add_product').asBoolean() || true;
  const remoteToggleFilterCategories = remoteConfig().getValue('filter_categories').asBoolean() || true;
  
  const [ searchText, setSearchText ] = React.useState('');
  const [ filteredProducts, setFilteredProducts ] = React.useState<Array<Product>>([]);
  const [ highlightProducts, setHighlightProducts ] = React.useState<Array<Product>>([]);
  const [ categoryProducts, setCategoryProducts ] = React.useState<Array<string>>([]);
  const [ filterShow, setfilterShow ] = React.useState(false);

  React.useEffect(() => {
      if (app) {
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
            setHighlightProducts(defineHighlightsProducts(result));
          }
        });
    }
    getCategories().then((response) => {
      if (response) {
        setCategoryProducts(response.data);
      }
    });
  }, []);

  React.useEffect(() => {
    if (app) {
      setFilteredProducts(app?.products);
      setHighlightProducts(defineHighlightsProducts(app?.products));
    }
  }, [app])

  function findHighlightByIndex(selectedHighlights: { attribute: string; values: Array<string | number> }, product: Product) {
    if (selectedHighlights.attribute === 'id' && selectedHighlights?.values.some(item => item === product['id']))
      return true;
    if (selectedHighlights.attribute === 'title' && selectedHighlights?.values.some(item => item === product['title']))
      return true;
    if (selectedHighlights.attribute === 'brand' && selectedHighlights?.values.some(item => item === product['brand']))
      return true;
    return false;
  }

  function defineHighlightsProducts(products: Array<Product>) {
    const selectedHighlights = remoteConfigHighlights ? JSON.parse(remoteConfigHighlights) : null;
    if (selectedHighlights && products && products.length > 0) {
      return products
        .filter(item => findHighlightByIndex(selectedHighlights, item));
    }
    return [];
  }

  function onSearch() {
      if (app) {
        const result = 
          app.products.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));
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

  function onAdd() {
    navigation.navigate('Add');
  }

  return (
    <ShowcaseTemplate
      search={{ 
        value: searchText,
        placeholder: 'Pesquisar produto', 
        icon: { name: 'magnify', size: 32 },
        onSearch: onSearch,
        onChangeSearchText: onChangeSearchText
      }}
      filter={{
        list: categoryProducts,
        available: filterShow,
        icon: { name: 'filter', size: 32 },
        visible: remoteToggleFilterCategories,
        onShow: onShow,
        onClose: onClose,
        onFilter: onFilter
      }}
      add={{ 
        icon: { name: 'plus', size: 32 },
        visible: remoteToggleAddProduct,
        onAdd: onAdd
      }}
      highlightText='Destaques'
      products={filteredProducts}
      highlightProducts={highlightProducts}
    />
  );
}