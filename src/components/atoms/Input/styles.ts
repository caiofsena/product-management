import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../../theme';

export const Container = styled(TextInput)`
  border-radius: 8px;
  border-width: 1px;
  border-color: ${colors.gray200}
`;