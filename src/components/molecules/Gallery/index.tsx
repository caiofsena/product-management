import React from 'react';
import { List } from '../../atoms/List';
import { Card } from '../Card';
import * as S from './styles';
import { Modal, View } from 'react-native';
import { Picture } from '../../atoms/Picture';
import { Button } from '../../atoms/Button';
import { colors } from '../../../theme';

export type GalleryProps = {
  images: Array<string>;
  width?: number;
  height?: number;
}

export function Gallery({
  images,
  width = 130,
  height = 200
}: GalleryProps) {
  const [ modalVisible, setModalVisible ] = React.useState(false);
  const [ modalPicture, setModalPicture ] = React.useState('');

  function renderItem(item: string) {
    return (
      <S.CardContainer>
        <Card 
          thumbnail={{ value: item, width: width, height: height}} 
          onPressCard={() => {
            setModalVisible(true);
            setModalPicture(item);
          }} 
        />
        <Modal visible={modalVisible}>
          <S.ModalContainer>
            <Picture 
              source={{ uri: modalPicture }} 
              width={350} 
              height={350} 
              borderRadius={14} 
            />
            <S.ModalButton 
              text={{value: 'Fechar', color: colors.gray300 }} 
              onPress={() => setModalVisible(false)} 
            />
          </S.ModalContainer>
        </Modal>
      </S.CardContainer>
    );
  }
  return(
    <S.Container>
      <List
        data={images}
        keyExtractor={(item) => item}
        renderItem={({ item }) => ( renderItem(item) )}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={
          <View>
            <Picture 
              source={require('../../../resources/no_picture.png')} 
              width={130} 
              height={200} 
            />
          </View>
        }
      />
    </S.Container>
  );
}