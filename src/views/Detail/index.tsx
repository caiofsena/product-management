import React from 'react';
import { DetailTemplate } from '../../components/templates/DetailTemplate';
import { Product } from '../../types';

export function Detail({ route }) {
  const { data }: {data: Product} = route.params;

  return (
    <DetailTemplate 
      data={data}
    />
  );
}