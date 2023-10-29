import React from 'react';
import * as S from './styles';
import { Product } from '../../../types';
import { Text } from '../../atoms/Text';
import { Gallery } from '../../molecules/Gallery';
import { EnumTextMode } from '../../../enum';
import { colors } from '../../../theme';
import { Input } from '../../atoms/Input';
import { Controller , useForm } from 'react-hook-form';

export type FormTemplateProps = {
  data?: Product,
  buttonSave?: { text: string; onPress: (data) => void };
  buttonCancel?: { text: string; onPress: () => void };
}

type Inputs = {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
};

export function FormTemplate({
  data,
  buttonSave,
  buttonCancel
}: FormTemplateProps) {
  const { control, handleSubmit, formState: { errors } } = useForm<Inputs>({
    defaultValues: { ...data }
  });

  return (
    <S.Container>
      { data && data.images && <Gallery images={data.images} /> }
      <S.Information>
        <S.Principal>
          <S.PrincipalValue>
            <S.PrincipalValueItem>
              <Text mode={EnumTextMode.LABEL} text='Título' />
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input 
                    placeholder='Informe o título' 
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}   
                  />
                )}
                name="title"
              />
              {errors.title && <Text mode={EnumTextMode.NORMAL} text='Campo obrigatório' color={colors.red} />}
              <Text mode={EnumTextMode.LABEL} text='Marca' />
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input 
                    placeholder='Informe a marca' 
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}   
                  />
                )}
                name="brand"
              />
              {errors.brand && <Text mode={EnumTextMode.NORMAL} text='Campo obrigatório' color={colors.red} />}
            </S.PrincipalValueItem>
            <S.PrincipalPriceItem>
              <Text mode={EnumTextMode.LABEL} text='Preço' />
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input 
                    placeholder='Informe o preço' 
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value ? value.toString() : ''}   
                    keyboardType='number-pad'
                  />
                )}
                name="price"
              />
              {errors.price && <Text mode={EnumTextMode.NORMAL} text='Campo obrigatório' color={colors.red} />}
            </S.PrincipalPriceItem>
          </S.PrincipalValue>
          <Text mode={EnumTextMode.LABEL} text='Estoque' />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input 
                placeholder='Informe o estoque' 
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}   
                keyboardType='number-pad'
              />
            )}
            name="stock"
          />
          {errors.stock && <Text mode={EnumTextMode.NORMAL} text='Campo obrigatório' color={colors.red} />}
        </S.Principal>
        <S.Secondary>
          <Text mode={EnumTextMode.LABEL} text='Detalhes' />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input 
                placeholder='Informe uma descrição' 
                onBlur={onBlur}
                onChangeText={onChange}
                value={value} 
                numberOfLines={3}
                multiline
              />
            )}
            name="description"
          />
          {errors.description && <Text mode={EnumTextMode.NORMAL} text='Campo obrigatório' color={colors.red} />}
        </S.Secondary>
        <S.Buttons>
          { buttonSave && <S.EditButton 
            text={{ value: buttonSave.text, color: colors.white }} 
            onPress={handleSubmit(buttonSave.onPress)}
          /> }
          { buttonCancel && <S.DeleteButton
            text={{ value: buttonCancel.text, color: colors.white }} 
            onPress={buttonCancel.onPress}
          /> }
        </S.Buttons>
      </S.Information>
    </S.Container>
  );
}