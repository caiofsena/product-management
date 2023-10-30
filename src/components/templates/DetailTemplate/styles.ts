import styled from 'styled-components/native';
import { colors } from '../../../theme';
import { Button } from '../../atoms/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex: 1;
`;

export const Information = styled.View`
  flex: 1;
  padding: 16px;
  border-radius: 14px;
  background-color: ${colors.white}
`;

export const Principal = styled.View`
  margin-bottom: 16px;
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

export const Buttons = styled.View`
  flex: 1;
  align-items: flex-end;
  margin-bottom: 8px;
  flex-direction: row;
  justify-content: space-between;
`;

export const EditButton = styled(Button)`
  flex: 1;
  height: 48px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.purple}
`;

export const DeleteButton = styled(Button)`
  flex: 1;
  margin-left: 16px;
  height: 48px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.purple}
`;

export const Favorite = styled(Icon)`
  align-self: flex-end;
`;