import React from 'react';
import * as S from './styles';
import { Product } from '../../../types';
import { Text } from '../../atoms/Text';
import { Gallery } from '../../molecules/Gallery';
import { EnumTextMode } from '../../../enum';
import { colors } from '../../../theme';

export type DetailTemplateProps = {
  data: Product,
  buttonEdit?: { text: string; visible: boolean; onPress: () => void };
  buttonDelete?: { text: string; visible: boolean; onPress: () => void };
}

export function DetailTemplate({
  data,
  buttonEdit,
  buttonDelete
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
            <Text mode={EnumTextMode.MONEY_BIGGER} text={`$ ${data.price},00`} />
          </S.PrincipalValue>
          { data.rating && 
            <S.PrincipalRating>
              <Text mode={EnumTextMode.LABEL} text='Rating' />
              <Text mode={EnumTextMode.LABEL} text={data.rating.toString()} color={colors.gray400} />
            </S.PrincipalRating> 
          }
          <Text mode={EnumTextMode.LABEL} text='Stock' />
          <Text mode={EnumTextMode.LABEL} text={data.stock.toString()} color={colors.gray400} />
        </S.Principal>
        <S.Secondary>
          <Text mode={EnumTextMode.LABEL} text='Details' />
          <Text mode={EnumTextMode.LABEL} text={data.description} color={colors.gray400} />
        </S.Secondary>
        <S.Buttons>
          { buttonEdit && buttonEdit.visible && <S.EditButton 
            text={{ value: buttonEdit.text, color: colors.white }} 
            onPress={buttonEdit.onPress}
          /> }
          { buttonDelete && buttonDelete.visible && <S.DeleteButton
            text={{ value: buttonDelete.text, color: colors.white }} 
            onPress={buttonDelete.onPress}
          /> }
        </S.Buttons>
      </S.Information>
    </S.Container>
  );
}