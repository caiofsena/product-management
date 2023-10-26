import React from 'react';
import { FlatList, FlatListProps } from 'react-native';
export type ListProps = FlatListProps<any> & object

export function List({
  ...rest
}: ListProps) {
  return (
    <FlatList
      {...rest}
    />
  );
}