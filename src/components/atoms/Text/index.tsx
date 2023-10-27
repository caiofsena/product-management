import React from 'react';
import { ColorValue, StyleProp, Text as TextRN, TextProps as TextRNProps, TextStyle } from 'react-native';
import { colors } from '../../../theme';
import { EnumTextMode } from '../../../enum';

export type TextProps = TextRNProps & {
  text: string;
  mode: EnumTextMode;
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
    styleText = { fontSize: 12, fontWeight: 'bold', color: color ? color : colors.gray300 };
    break;
  case 'normal':
    styleText = { fontSize: 14, color: color ? color : colors.gray300 };
    break;
  case 'detail':
    styleText = { fontSize: 14, fontWeight: 'bold', color: color ? color : colors.gray300 };
    break;
  case 'label':
    styleText = { fontSize: 20, fontWeight: 'bold', color: color ? color : colors.gray300 };
    break;
  case 'placeholder':
    styleText = { fontSize: 16, color: color ? color : colors.gray300 };
    break;
  case 'scratched':
    styleText = { fontSize: 14, textDecorationLine: 'line-through', textDecorationStyle: 'solid',  color: color ? color : colors.gray300 };
    break;
  case 'title':
    styleText = { fontSize: 24, fontWeight: 'bold', color: color ? color : colors.gray300 };
    break;
  case 'title-bigger':
    styleText = { fontSize: 32, fontWeight: 'bold', color: color ? color : colors.gray300 };
    break;
  case 'money':
    styleText = { fontSize: 16, fontWeight: 'bold', color: color ? color : colors.purple };
    break;
  case 'money-bigger':
    styleText = { fontSize: 28, fontWeight: 'bold', color: color ? color : colors.purple };
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