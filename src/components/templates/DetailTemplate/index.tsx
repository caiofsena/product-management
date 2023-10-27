import React from 'react';
import * as S from './styles';
import { Product } from '../../../types';
import { Text } from '../../atoms/Text';
import { Gallery } from '../../molecules/Gallery';
import { TextMode } from '../../../enum';
import { colors } from '../../../theme';

export type DetailTemplateProps = {
  data: Product
}

export function DetailTemplate({
  data
}: DetailTemplateProps) {
  return (
    <S.Container>
      { data && data.images && <Gallery images={data.images}  /> }
      <S.Information>
        <S.Principal>
          <S.PrincipalValue>
            <S.PrincipalValueItem>
              <Text mode={TextMode.LABEL} text={data.title} color={colors.black} />
              <Text mode={TextMode.LABEL} text={data.brand} color={colors.gray400} />
            </S.PrincipalValueItem>
            <Text mode={TextMode.MONEY_BIGGER} text={`$ ${data.price}`} />
          </S.PrincipalValue>
          <S.PrincipalRating>
            <Text mode={TextMode.LABEL} text='Rating' />
            <Text mode={TextMode.LABEL} text={data.rating.toString()} color={colors.gray400} />
          </S.PrincipalRating>
          <Text mode={TextMode.LABEL} text='Stock' />
          <Text mode={TextMode.LABEL} text={data.stock.toString()} color={colors.gray400} />
        </S.Principal>
        <S.Secondary>
          <Text mode={TextMode.LABEL} text='Details' />
          <Text mode={TextMode.LABEL} text={data.description} color={colors.gray400} />
        </S.Secondary>
      </S.Information>
    </S.Container>
  );
}