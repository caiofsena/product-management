import React from 'react';
import * as S from './styles';
import { Text } from '../../atoms/Text';
import { TextMode } from '../../../enum';
import { colors } from '../../../theme';

export type LoginTemplateProps = {
  data: { username: string; password: string; }
  set: { username: (text: string) => void; password: (text: string) => void }
  onLogin: (username: string, password: string) => void;
}

export function LoginTemplate({
  data,
  set,
  onLogin
}: LoginTemplateProps) {

  return (
    <S.Container>
      <S.HeaderContainer>
        <Text mode={TextMode.TITLE_BIGGER} text='Welcome to Products' color={colors.purple} />
        <Text mode={TextMode.LABEL} text='Enter your account to continue' color={colors.gray300} />
      </S.HeaderContainer>
      <S.UsernameContainer>
        <Text mode={TextMode.LABEL} text='Username' color={colors.gray300} />
        <S.UsernameInput 
          placeholder='Your username' 
          value={data.username} 
          onChangeText={set.username} 
        />
      </S.UsernameContainer>
      <S.PasswordContainer>
        <Text mode={TextMode.LABEL} text='Password' color={colors.gray300} />
        <S.PasswordInput 
          placeholder='Your password' 
          value={data.password} 
          onChangeText={set.password} 
          secureTextEntry
        />
      </S.PasswordContainer>
      <S.ButtonContainer>
        <S.ButtonLogin text={{ value: 'Login', color: colors.white }} onPress={onLogin} />
      </S.ButtonContainer>
    </S.Container>
  );
}