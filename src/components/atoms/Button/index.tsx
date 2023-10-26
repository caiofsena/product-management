import React from 'react';
import { ColorValue, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Picture, PictureProps } from '../Picture';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type ButtonProps = TouchableOpacityProps & {
  text?: { value: string, color: ColorValue };
  picture?: PictureProps;
  icon?: { name: string; size: number };
}

export function Button(
  {
    text,
    picture,
    icon,
    ...rest
  }: ButtonProps) {
  return (
    <TouchableOpacity {...rest} >
      {text && <Text style={{color: text.color}}>{text.value}</Text>}
      {picture && <Picture source={picture.source} width={picture.width} height={picture.height} />}
      {icon && <Icon name={icon.name} size={icon.size} />}
    </TouchableOpacity>
  );
}