import React from 'react';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { Product } from '../../../types';
import * as S from './styles';
import { colors } from '../../../theme';
import { Carousel } from '../../molecules/Carousel';

export type ShowcaseTemplateProps = {
  search: { 
    value: string;
    placeholder: string; 
    icon: { name: string; size: number };
    onSearch: () => void; 
    onChangeSearchText: (text: string) => void;
  }
  filter: { 
    icon: { name: string; size: number };
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
        <Button icon={{ name: filter.icon.name, size: filter.icon.size }} />
      </S.SearchContainer>
      <S.HighlightContainer>
        <Text mode='title' text={highlightText} color={colors.gray400} />
        <Carousel data={highlightProducts} isHorizontal isHighlight />
      </S.HighlightContainer>
      <S.GeneralContainer>
        <Carousel data={products} hasColumn />
      </S.GeneralContainer>
    </S.Container>
  );
}