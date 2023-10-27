import styled from 'styled-components/native';
import { colors } from '../../../theme';

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