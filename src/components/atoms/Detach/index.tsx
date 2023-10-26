import React from 'react';
import * as S from './styles';
import { colors } from '../../../theme';
import { Text } from '../Text';

export type DetachProps = {
  text: string;
  color?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor?: string;
}

export function Detach(
  { 
    text, 
    color, 
    width = 25,
    height = 19,
    borderRadius = 10,
    backgroundColor = colors.gray400
  }: DetachProps) {
  return (
    <S.Container 
      width={width}
      height={height} 
      borderRadius={borderRadius}
      backgroundColor={backgroundColor} 
    >
      <Text 
        mode='detach'
        text={text}
        color={color}
      />
    </S.Container>
  );
}