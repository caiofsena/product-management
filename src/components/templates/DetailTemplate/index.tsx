import React from 'react';
import * as S from './styles';
import { Product } from '../../../types';
import { Text } from '../../atoms/Text';
import { Gallery } from '../../molecules/Gallery';
import { EnumTextMode } from '../../../enum';
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
              <Text mode={EnumTextMode.LABEL} text={data.title} color={colors.black} />
              <Text mode={EnumTextMode.LABEL} text={data.brand} color={colors.gray400} />
            </S.PrincipalValueItem>
            <Text mode={EnumTextMode.MONEY_BIGGER} text={`$ ${data.price}`} />
          </S.PrincipalValue>
          <S.PrincipalRating>
            <Text mode={EnumTextMode.LABEL} text='Rating' />
            <Text mode={EnumTextMode.LABEL} text={data.rating.toString()} color={colors.gray400} />
          </S.PrincipalRating>
          <Text mode={EnumTextMode.LABEL} text='Stock' />
          <Text mode={EnumTextMode.LABEL} text={data.stock.toString()} color={colors.gray400} />
        </S.Principal>
        <S.Secondary>
          <Text mode={EnumTextMode.LABEL} text='Details' />
          <Text mode={EnumTextMode.LABEL} text={data.description} color={colors.gray400} />
        </S.Secondary>
      </S.Information>
    </S.Container>
  );
}