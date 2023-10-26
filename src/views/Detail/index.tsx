import React from 'react';
import { DetailTemplate } from '../../components/templates/DetailTemplate';
import { Product } from '../../types';

export type DetailProps = object

export function Detail({ route }) {
  const { data }: {data: Product} = route.params;

  const result = { ...data, onPressCard: () => {
    console.log('DETAIL ITEM: ', data.id);
  }};

  return (
    <DetailTemplate 
      data={result}
    />
  );
}