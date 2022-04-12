import React from 'react';
import Main from './components/MainComponent';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';

const store = ConfigureStore();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <Main />
      </Provider>
    </SafeAreaView>
  );
}
