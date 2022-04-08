import React from 'react';
import Main from './components/MainComponent';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Main />
    </SafeAreaView>
  );
}
