import React from 'react';
import * as S from './styles';
import { colors } from '../../../theme';

export type CardProps = {
  thumbnail: { value?: string; width?: number; height?: number };
  title?: string;
  detail?: string;
  value?: string;
  onPressCard?: () => void;
}

export function Card({
  thumbnail = {value: require('../../../resources/no_picture.png'), width: 130, height: 100},
  title,
  detail,
  value,
  onPressCard
}: CardProps) {
  return (
    <S.Container onPress={onPressCard}>
      <S.ThumbnailContainer>
        <S.Thumbnail 
          source={{ uri: thumbnail.value }} 
          width={ thumbnail.width} 
          height={ thumbnail.height} 
        />
      </S.ThumbnailContainer>
      { title && <S.Title mode='title-small' text={title} color={colors.gray500} numberOfLines={1} />}
      { detail && <S.Detail mode='detail' text={detail} color={colors.gray300} numberOfLines={3} /> }
      { value && <S.Value mode='money' text={value} /> }
    </S.Container>
  );
}