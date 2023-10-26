import React from 'react';
import { List } from '../../atoms/List';
import { Card } from '../Card';
import { Product } from '../../../types';
import * as S from './styles';

export type CarouselProps = {
  data: Array<Product>;
  isHorizontal?: boolean;
  hasColumn?: boolean;
  isHighlight?: boolean;
}

export function Carousel({
  data,
  isHorizontal = false,
  hasColumn = false,
  isHighlight = false
}: CarouselProps) {

  function renderItem(item: Product) {
    return (
      <Card
        thumbnail={{ value: item.thumbnail, width: 140, height: 100 }}
        title={item.title}
        detail={isHighlight ? '' : item.description}
        value={isHighlight ? '' : `R$ ${item.price}`}
        onPressCard={item.onPressCard}
      />
    );
  }

  return(
    <S.Container>
      <List
        key={hasColumn ? '_' : '#'}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => ( renderItem(item) )}
        horizontal={isHorizontal}
        numColumns={ hasColumn ? 2 : 1}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
}