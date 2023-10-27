import React from 'react';
import * as S from './styles';
import { User } from '../../../types';
import { Text } from '../../atoms/Text';
import { EnumTextMode } from '../../../enum';
import { colors } from '../../../theme';
import { Picture } from '../../atoms/Picture';

export type ProfileTemplateProps = {
  data: User,
  onLogout: () => void;
}

export function ProfileTemplate({
  data,
  onLogout
}: ProfileTemplateProps) {
  return (
    <S.Container>
      <S.Principal>
        <Picture source={{ uri: data.image }} width={70} height={70}  />
        <S.FullName>
          <Text 
            mode={EnumTextMode.TITLE} 
            text={`${data.firstName} ${data.lastName}`} 
            color={colors.white} 
          />
        </S.FullName>
      </S.Principal>
      <S.Secondary>
        <Text mode={EnumTextMode.LABEL} text='Email' />
        <S.DetailEmail mode={EnumTextMode.DETAIL} text={data.email} color={colors.gray400} />
        <Text mode={EnumTextMode.LABEL} text='Username' />
        <S.DetailUsername mode={EnumTextMode.DETAIL} text={data.username} color={colors.gray400} />
        <Text mode={EnumTextMode.LABEL} text='Gender' />
        <S.DetailGender mode={EnumTextMode.DETAIL} text={data.gender} color={colors.gray400} />
      </S.Secondary>
      <S.Logout>
        <S.LogoutButton 
          text={{ value: 'Logout', color: colors.white }} 
          onPress={onLogout}
        />
      </S.Logout>
    </S.Container>
  );
}