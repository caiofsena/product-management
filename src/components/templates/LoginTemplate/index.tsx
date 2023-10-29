import React from 'react';
import * as S from './styles';
import { Text } from '../../atoms/Text';
import { EnumTextMode } from '../../../enum';
import { colors } from '../../../theme';

export type LoginTemplateProps = {
  data: { username: string; password: string; }
  set: { username: (text: string) => void; password: (text: string) => void }
  onLogin: (username: string, password: string) => void;
}

export function LoginTemplate({
  data,
  set,
  onLogin,
}: LoginTemplateProps) {

  return (
    <S.Container>
      <S.HeaderContainer>
        <Text mode={EnumTextMode.TITLE_BIGGER} text='Bem vindo a Produtos' color={colors.purple} />
        <Text mode={EnumTextMode.LABEL} text='Entre com sua conta para continuar' color={colors.gray300} />
      </S.HeaderContainer>
      <S.UsernameContainer>
        <Text mode={EnumTextMode.LABEL} text='Nome de usuário' color={colors.gray300} />
        <S.UsernameInput 
          placeholder='Seu nome de usuário' 
          value={data.username} 
          onChangeText={set.username} 
        />
      </S.UsernameContainer>
      <S.PasswordContainer>
        <Text mode={EnumTextMode.LABEL} text='Senha' color={colors.gray300} />
        <S.PasswordInput 
          placeholder='Sua senha' 
          value={data.password} 
          onChangeText={set.password} 
          secureTextEntry
        />
      </S.PasswordContainer>
      <S.ButtonContainer>
        <S.ButtonLogin text={{ value: 'Entrar', color: colors.white }} onPress={onLogin} />
      </S.ButtonContainer>
    </S.Container>
  );
}