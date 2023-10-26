import axios from 'axios';
import { Alert } from 'react-native';

const baseURL = 'https://dummyjson.com';
const request = axios.create({ baseURL });

export async function getAllProducts() {
  try {
    return await request.get('/products?limit=10');
  } catch (error) {
    console.log('ERROR', error);
    Alert.alert('Erro', 'Aconteceu um problema, tente novamente!');
  }
}

export async function getProduct(id: string) {
  try {
    return await request.get(`/products/${id}`);
  } catch (error) {
    console.log('ERROR', error);
    Alert.alert('Erro', 'Aconteceu um problema, tente novamente!');
  }
}