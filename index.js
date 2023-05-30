import 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {paperTheme} from './src/theme/colors';

function Main() {
  return (
    <PaperProvider theme={paperTheme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
