import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { colors } from '../../../theme';

export type InputProps = TextInputProps & object

export function Input(
  {
    ...rest
  }: InputProps) {
  const [ isFocused, setIsFocused ] = React.useState(false);
  return (
    <TextInput
      {...rest}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={[rest.style, isFocused && { borderColor: colors.purpleDark, borderWidth: 1 }]}
    />
  );
}