import React, { useContext } from 'react';
import { ProfileTemplate } from '../../components/templates/ProfileTemplate';
import { AppContext, AppDispatch } from '../../data/context/AppProvider';

export function Profile({ navigation }) {
  const app = useContext(AppContext);
  const dispatch = useContext(AppDispatch);

  function onLogout() {
    dispatch({
      type: 'logout'
    });
    navigation.replace('Login');
  }

  if (app && app.user) return <ProfileTemplate data={app.user} onLogout={onLogout} />;
  return null;
}