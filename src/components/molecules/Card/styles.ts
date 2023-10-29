import styled from 'styled-components/native';
import { Text } from '../../atoms/Text';
import { colors } from '../../../theme';
import { Picture } from '../../atoms/Picture';


export const Container = styled.TouchableOpacity`
  width: 150px;
  padding: 8px;
  margin: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${colors.gray100};
  background-color: ${colors.white};
  elevation: 1;
`;

export const ThumbnailContainer = styled.View`
  align-items: center;
`; 

export const Thumbnail = styled(Picture)`
  border-radius: 14px;
`; 

export const Title = styled(Text)`
  margin-top: 16px;
`;

export const Detail = styled(Text)`
  margin-top: 8px;
`;

export const Value = styled(Text)`
  margin-top: 20px;
`;