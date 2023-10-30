import React from 'react';
import { List } from '../../atoms/List';
import { Card } from '../Card';
import { Product } from '../../../types';
import * as S from './styles';
import { noPicture } from '../../../constants';
import { Text } from '../../atoms/Text';
import { EnumTextMode } from '../../../enum';
import { formatCurrency } from 'react-native-format-currency';

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
  isHighlight = false,
  ...rest
}: CarouselProps) {

  function renderItem(item: Product) {
    return (
      <Card
        thumbnail={{ value: item.thumbnail ? item.thumbnail : noPicture, width: 140, height: 100 }}
        title={item.title}
        isFavorite={item.favorite}
        detail={isHighlight ? '' : item.description}
        value={isHighlight ? '' : formatCurrency({ amount: item.price, code: "BRL" })[0]}
        onPressCard={item.onPressCard}
      />
    );
  }

  return(
    <S.Container {...rest}>
      <List
        key={hasColumn ? '_' : '#'}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => ( renderItem(item) )}
        horizontal={isHorizontal}
        numColumns={ hasColumn ? 2 : 1}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent=
          {
            <S.EmptyList>
              <Text mode={EnumTextMode.TITLE} text='Nenhum item encontrado' />
            </S.EmptyList>
          }
      />
    </S.Container>
  );
}