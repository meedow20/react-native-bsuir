import 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Main() {
  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.clear();
      } catch (error) {
        console.log(error);
      }
    })();
  });

  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
