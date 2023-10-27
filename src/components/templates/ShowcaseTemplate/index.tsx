import React from 'react';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { Product } from '../../../types';
import * as S from './styles';
import { colors } from '../../../theme';
import { Carousel } from '../../molecules/Carousel';
import { Modal } from 'react-native';
import { List } from '../../atoms/List';
import { EnumTextMode } from '../../../enum';

export type ShowcaseTemplateProps = {
  search: { 
    value: string;
    placeholder: string; 
    icon: { name: string; size: number };
    onSearch: () => void; 
    onChangeSearchText: (text: string) => void;
  }
  filter: {
    list: Array<string>;
    selection: string;
    visible: boolean; 
    icon: { name: string; size: number };
    onShow: () => void; 
    onClose: () => void; 
    onFilter: (text: string) => void; 
  };
  highlightText: string;
  products: Array<Product>,
  highlightProducts: Array<Product>
}

export function ShowcaseTemplate({
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
        <Button icon={{ name: search.icon.name, size: search.icon.size }} onPress={search.onSearch} />
        <Button icon={{ name: filter.icon.name, size: filter.icon.size }} onPress={filter.onShow} />
      </S.SearchContainer>
      <S.HighlightContainer>
        <Text mode={EnumTextMode.TITLE} text={highlightText} color={colors.gray400} />
        <Carousel data={highlightProducts} isHorizontal isHighlight />
      </S.HighlightContainer>
      <S.GeneralContainer>
        <Carousel data={products} hasColumn />
      </S.GeneralContainer>
      <Modal visible={filter.visible}>
          <S.ModalContainer>
            <List
              data={filter.list}
              keyExtractor={(item) => item}
              renderItem={({item}) => (
                <Button 
                  text={{value: item, color: colors.gray300 }} 
                  onPress={() => filter.onFilter(item)} 
                />
              )}
            />
            <S.ModalButton
              text={{value: 'Fechar', color: colors.gray400 }} 
              onPress={filter.onClose} 
            />
          </S.ModalContainer>
        </Modal>
    </S.Container>
  );
}