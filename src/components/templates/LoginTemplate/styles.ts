import styled from 'styled-components/native';
import { Input } from '../../atoms/Input';
import { colors } from '../../../theme';
import { Button } from '../../atoms/Button';


export const Container = styled.View`
  flex: 1;
  margin: 32px;
`;

export const HeaderContainer = styled.View`
  margin-top: 32px;
`;

export const UsernameContainer = styled.View`
  margin-top: 32px;
`;

export const UsernameInput = styled(Input)`
  padding: 8px;
  border-radius: 14px;
  borderWidth: 1px;
  borderColor: ${colors.purple};
`;

export const PasswordContainer = styled.View`
  margin-top: 32px;
`;

export const PasswordInput = styled(Input)`
  padding: 8px;
  border-radius: 14px;
  borderWidth: 1px;
  borderColor: ${colors.purple};
`;

export const ButtonContainer = styled.View`
  margin-top: 32px;
`;

export const ButtonLogin = styled(Button)`
  height: 48px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.purple}
`;