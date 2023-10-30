import CheckBox from '@react-native-community/checkbox';
import React from 'react';

export type CheckProps = {
  isSelected: boolean;
  onChangeSelection: (text: boolean) => void 
}

export function Check({
  isSelected,
  onChangeSelection,
  ...rest
}: CheckProps) {
  return (
    <CheckBox
      { ...rest }
      value={isSelected}
      onValueChange={onChangeSelection}
    />
  );
}