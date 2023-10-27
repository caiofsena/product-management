import React from 'react';
import { Product } from '../../../types';
import * as S from './styles';
import { Carousel } from '../../molecules/Carousel';
import { Text } from '../../atoms/Text';
import { EnumTextMode } from '../../../enum';

export type CategoryProps = {
  name: string;
  products: Array<Product>
}

export function CategoryTemplate({
  name,
  products
}: CategoryProps) {
  return (
    <S.Container>
      <S.GeneralContainer>
        <Text mode={EnumTextMode.TITLE} text={name} />
        <Carousel data={products} hasColumn />
      </S.GeneralContainer>
    </S.Container>
  );
}