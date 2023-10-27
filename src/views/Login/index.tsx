import React, { useContext } from 'react';
import { LoginTemplate } from '../../components/templates/LoginTemplate';
import {  loginRequest } from '../../data/api';
import { AppDispatch } from '../../data/context/AppProvider';
import { Alert } from 'react-native';

export function Login({ navigation }) {
  const dispatch = useContext(AppDispatch);

  const [ username, setUsername ] = React.useState('');
  const [ password, setPassword ] = React.useState('');

  function onLogin() {
    if (username && password) {
      loginRequest(username, password).then(response => {
        if (response) {
          dispatch({
            type: 'setUser',
            payload: response.data
          });
          navigation.navigate('Products', { screen: 'Home' });
        }
      });
    } else {
      Alert.alert('Login', 'Informe usuário e senha');
    }
  }
  
  return (
    <LoginTemplate
      data={{username, password}}
      set={{username: setUsername, password: setPassword}}
      onLogin={onLogin}
    />
  );
}