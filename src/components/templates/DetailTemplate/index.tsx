import React from 'react';
import * as S from './styles';
import { Product } from '../../../types';
import { Text } from '../../atoms/Text';
import { Gallery } from '../../molecules/Gallery';

export type DetailTemplateProps = {
  data: Product
}

export function DetailTemplate({
  data
}: DetailTemplateProps) {
  return (
    <S.Container>
      { data && data.images && <Gallery images={data.images}  /> }
      <S.Principal>
        <Text mode='detail' text='title' />
        <Text mode='detail' text='price' />
        <Text mode='detail' text='rating' />
        <Text mode='detail' text='brand' />
      </S.Principal>
      <S.Secondary>
        <Text mode='detail' text='category' />
        <Text mode='detail' text='detail' />
        <Text mode='detail' text='stock' />
      </S.Secondary>
    </S.Container>
  );
}