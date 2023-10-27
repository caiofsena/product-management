import axios from 'axios';
import { Alert } from 'react-native';

const baseURL = 'https://dummyjson.com';
const request = axios.create({ baseURL });

export async function loginRequest(username: string, password: string) {
  try {
    return await request
      .post(
        '/auth/login', 
        { username: username, password: password }, 
        { headers: { 'Content-Type': 'application/json' } }
      );
  } catch (error) {
    Alert.alert('Erro', 'Aconteceu um problema, tente novamente!');
  }
}

export async function getAllProducts() {
  try {
    return await request.get('/products?limit=10');
  } catch (error) {
    Alert.alert('Erro', 'Aconteceu um problema, tente novamente!');
  }
}

export async function getProduct(id: string) {
  try {
    return await request.get(`/products/${id}`);
  } catch (error) {
    Alert.alert('Erro', 'Aconteceu um problema, tente novamente!');
  }
}

export async function getCategories() {
  try {
    return await request.get('/products/categories');
  } catch (error) {
    Alert.alert('Erro', 'Aconteceu um problema, tente novamente!');
  }
}

export async function getProductsCategory(category: string) {
  try {
    return await request.get(`/products/category/${category}`);
  } catch (error) {
    Alert.alert('Erro', 'Aconteceu um problema, tente novamente!');
  }
}