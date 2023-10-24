import React from 'react';
import { Text, TextInput, View } from 'react-native';

export function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HOME</Text>
      <TextInput />
    </View>
  );
}