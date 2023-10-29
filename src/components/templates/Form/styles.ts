import styled from 'styled-components/native';
import { colors } from '../../../theme';
import { Button } from '../../atoms/Button';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1
  }
})`
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
  flex: 1;
  flex-direction: column;
`;

export const PrincipalPriceItem = styled.View`
  flex-direction: column;
  margin-left: 8px;
`;

export const PrincipalRating = styled.View`
  margin-bottom: 16px;
`;

export const Secondary = styled.View``;

export const Buttons = styled.View`
  flex: 1;
  margin-top: 16px;
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