import React from 'react';
import { TextInputProps } from 'react-native';
import { colors } from '../../../theme';
import * as S from './styles';

export type InputProps = TextInputProps & object

export function Input(
  {
    ...rest
  }: InputProps) {
  const [ isFocused, setIsFocused ] = React.useState(false);
  return (
    <S.Container
      {...rest}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={[rest.style, isFocused && { borderColor: colors.purpleDark, borderWidth: 1 }]}
    />
  );
}