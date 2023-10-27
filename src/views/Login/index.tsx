import React from 'react';
import { LoginTemplate } from '../../components/templates/LoginTemplate';
import {  loginRequest } from '../../data/api';

export function Login({ navigation }) {
  const [ username, setUsername ] = React.useState('');
  const [ password, setPassword ] = React.useState('');

  function onLogin() {
    console.log('ON LOGIN: ', username, password);
    loginRequest(username, password).then(response => {
      console.log('LOGIN: ', response);
      if (response) {
        navigation.navigate('Products', { screen: 'Home' });
      }
    });
  }
  
  return (
    <LoginTemplate
      data={{username, password}}
      set={{username: setUsername, password: setPassword}}
      onLogin={onLogin}
    />
  );
}