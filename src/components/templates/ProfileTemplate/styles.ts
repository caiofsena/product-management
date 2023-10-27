import styled from 'styled-components/native';
import { colors } from '../../../theme';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';

export const Container = styled.View`
  flex: 1;
  margin: 16px;
`;

export const Principal = styled.View`
margin-bottom: 16px;
flex-direction: row;
padding: 16px;
border-radius: 14px;
align-items: center;
background-color: ${colors.purple}
`;

export const FullName = styled.View`
  margin-left: 16px;
`;

export const PrincipalValue = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const PrincipalValueItem = styled.View`
  flex-direction: column;
`;

export const PrincipalRating = styled.View`
  margin-bottom: 16px;
`;

export const Secondary = styled.View``;

export const DetailEmail = styled(Text)`
  padding: 8px;
  margin-bottom: 16px;
  border-bottom-color: ${colors.gray200};
  border-bottom-width: 1px;
`;

export const DetailUsername = styled(Text)`
  padding: 8px;
  margin-bottom: 16px;
  border-bottom-color: ${colors.gray200};
  border-bottom-width: 1px;
`;

export const DetailGender = styled(Text)`
  padding: 8px;
  margin-top: 16px;
  border-bottom-color: ${colors.gray200};
  border-bottom-width: 1px;
`;

export const Logout = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-bottom: 16px;
`;

export const LogoutButton = styled(Button)`
  height: 48px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.purple}
`;