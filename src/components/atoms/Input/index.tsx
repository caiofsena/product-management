import React from 'react';
import * as S from './styles';
import { TextInput } from 'react-native-paper';

export type InputProps = typeof TextInput;

export function Input({
  ...rest
}) {
  return (
    <S.Container>
      <TextInput 
        {...rest}
      />
    </S.Container>
  );
}