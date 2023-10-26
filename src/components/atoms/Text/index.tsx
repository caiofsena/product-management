import React from 'react';
import { ColorValue, StyleProp, Text as TextRN, TextProps as TextRNProps, TextStyle } from 'react-native';
import { colors } from '../../../theme';

export type TextProps = TextRNProps & {
  text: string;
  mode: 'detach' | 'title' | 'title-small' | 'detail' | 'normal' | 'placeholder' | 'scratched' | 'money';
  color?: ColorValue;
}

export function Text(
  {
    mode, 
    text,
    color,
    ...rest
  }: TextProps) {
  let styleText: StyleProp<TextStyle> = null;
  switch (mode) {
  case 'detach':
    styleText = { fontSize: 12, fontWeight: 'bold', color: color ? color : colors.gray100 };
    break;
  case 'normal':
    styleText = { fontSize: 14, color: color ? color : colors.gray100 };
    break;
  case 'detail':
    styleText = { fontSize: 14, fontWeight: 'bold', color: color ? color : colors.gray100 };
    break;
  case 'placeholder':
    styleText = { fontSize: 16, color: color ? color : colors.gray100 };
    break;
  case 'scratched':
    styleText = { fontSize: 14, textDecorationLine: 'line-through', textDecorationStyle: 'solid',  color: color ? color : colors.gray300 };
    break;
  case 'title':
    styleText = { fontSize: 24, fontWeight: 'bold', color: color ? color : colors.gray100 };
    break;
  case 'title-small':
    styleText = { fontSize: 16, fontWeight: 'bold', color: color ? color : colors.gray100 };
    break;
  case 'money':
    styleText = { fontSize: 16, fontWeight: 'bold', color: color ? color : colors.purple };
    break;
  
  default:
    break;
  }
  return (
    <TextRN {...rest} style={[ rest.style, styleText]}>
      {text}
    </TextRN>

  );
}