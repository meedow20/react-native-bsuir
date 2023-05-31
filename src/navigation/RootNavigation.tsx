import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UI from '../screens/UI';
import Activity from '../screens/Activity';
import ActivityList from '../screens/ActivityList';
import Network from '../screens/Network';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {colors, navigationTheme} from '../theme/colors';
import {RootNavigationProps} from './types';

const Drawer = createDrawerNavigator<RootNavigationProps>();

function RootNavigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <Drawer.Navigator
          initialRouteName="UI"
          screenOptions={{headerTintColor: colors.violet}}>
          <Drawer.Screen name="UI" component={UI} />
          <Drawer.Screen name="Activity" component={Activity} />
          <Drawer.Screen name="Activity list" component={ActivityList} />
          <Drawer.Screen name="Network" component={Network} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default RootNavigation;
