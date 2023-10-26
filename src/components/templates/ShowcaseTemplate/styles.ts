import styled from 'styled-components/native';
import { Input } from '../../atoms/Input';
import { colors } from '../../../theme';

export const Container = styled.View`
  flex: 1;
  margin-horizontal: 8px;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
  align-items: center;
`;

export const SearchInput = styled(Input)`
  flex: 1; 
  padding: 8px;
  margin-right: 8px;
  borderWidth: 1px;
  borderColor: ${colors.purple}
`;

export const HighlightContainer = styled.View`
  margin-top: 16px;
`;

export const GeneralContainer = styled.View`
  margin-top: 16px;
`;
