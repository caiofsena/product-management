import axios from 'axios';
import { Alert } from 'react-native';
import { Product } from '../../types';

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
    return await request.get('/products');
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

export async function addProduct(product: Product) {
  try {
    return await request
      .post(
        '/products/add', 
        product
      );
  } catch (error) {
    Alert.alert('Erro', 'Aconteceu um problema, tente novamente!');
  }
}

export async function editProduct(product: Product) {
  try {
    return await request
      .put(
        `/products/${product.id}`, 
        product
      );
  } catch (error) {
    Alert.alert('Erro', 'Aconteceu um problema, tente novamente!');
  }
}

export async function deleteProduct(id: number) {
  try {
    return await request
      .delete(
        `/products/${id}`
      );
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