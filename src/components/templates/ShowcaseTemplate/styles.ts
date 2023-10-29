import styled from 'styled-components/native';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { List } from '../../atoms/List';
import { colors } from '../../../theme';
import { Carousel } from '../../molecules/Carousel';
import { Text } from '../../atoms/Text';

export const Container = styled.View`
  flex: 1;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
  align-items: center;
  margin-horizontal: 8px;
`;

export const SearchInput = styled(Input)`
  flex: 1; 
  padding: 8px;
  margin-right: 8px;
  background-color: ${colors.white};
`;

export const HighlightContainer = styled.View`
  margin-top: 8px;
`;

export const HighlightText = styled(Text)`
  margin-horizontal: 8px;
`;

export const HighlightCarousel = styled(Carousel)`
  background-color: ${colors.gray200};
  elevation: 10;
`;

export const GeneralContainer = styled.View``;

export const ModalContainer = styled.View`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const ModalList = styled(List).attrs({
  contentContainerStyle: {
    alignItems: 'center',
    marginTop: 16
  }
})``;

export const ModalItem = styled.View`
  margin: 8px;
  padding: 4px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${colors.gray100};
  background-color: ${colors.white};
  elevation: 1;
`;

export const ModalButton = styled(Button)`
  margin-top: 32px;
`;
