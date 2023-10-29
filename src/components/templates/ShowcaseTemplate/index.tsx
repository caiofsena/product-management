import React from 'react';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { Product } from '../../../types';
import * as S from './styles';
import { colors } from '../../../theme';
import { Carousel } from '../../molecules/Carousel';
import { Modal } from 'react-native';
import { EnumTextMode } from '../../../enum';

export type ShowcaseTemplateProps = {
  add?: { 
    icon: { name: string; size: number };
    onAdd: () => void;
    visible: boolean;
  },
  search: { 
    value: string;
    placeholder: string; 
    icon: { name: string; size: number };
    onSearch: () => void; 
    onChangeSearchText: (text: string) => void;
  }
  filter?: {
    list: Array<string>;
    available: boolean; 
    icon: { name: string; size: number };
    visible: boolean;
    onShow: () => void; 
    onClose: () => void; 
    onFilter: (text: string) => void; 
  };
  highlightText: string;
  products: Array<Product>,
  highlightProducts: Array<Product>
}

export function ShowcaseTemplate({
  add,
  search,
  filter,
  highlightText,
  products,
  highlightProducts
}: ShowcaseTemplateProps) {
  return (
    <S.Container>
      <S.SearchContainer>
        <S.SearchInput 
          placeholder={search.placeholder} 
          value={search.value}
          onChangeText={search.onChangeSearchText}
        />
        <Button 
          icon={{ name: search.icon.name, size: search.icon.size, color: colors.purpleDark }} 
          onPress={search.onSearch} 
        />
        { filter && filter.visible && 
          <Button 
            icon={{ name: filter.icon.name, size: filter.icon.size, color: colors.purpleDark }} 
            onPress={filter.onShow} 
          /> 
        }
        { add && add.visible && 
          <Button 
            icon={{ name: add.icon.name, size: add.icon.size, color: colors.purpleDark }} 
            onPress={add.onAdd} 
          /> 
        }
      </S.SearchContainer>
      { highlightProducts && highlightProducts.length > 0 && 
      <S.HighlightContainer>
        <S.HighlightText mode={EnumTextMode.TITLE} text={highlightText} color={colors.gray400} />
        <S.HighlightCarousel data={highlightProducts} isHorizontal isHighlight />
      </S.HighlightContainer> }
      <S.GeneralContainer>
        <Carousel data={products} hasColumn />
      </S.GeneralContainer>
      {filter && <Modal visible={filter.available}>
        <S.ModalContainer>
          <Text mode={EnumTextMode.TITLE} text='Selecione uma categoria' color={colors.purple} />
          <S.ModalList
            data={filter.list}
            keyExtractor={(item) => item}
            renderItem={({item}) => (
              <S.ModalItem>
                <Button 
                  text={{value: item, color: colors.gray300 }} 
                  onPress={() => filter.onFilter(item)} 
                />
              </S.ModalItem>
            )}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
          <S.ModalButton
            text={{value: 'fechar', color: colors.gray300 }} 
            onPress={filter.onClose} 
          />
        </S.ModalContainer>
      </Modal> }
    </S.Container>
  );
}