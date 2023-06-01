import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UI from '../screens/UI';
import Activity from '../screens/Activity';
import Network from '../screens/Network';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {colors, navigationTheme} from '../theme/colors';
import {MainDrawerNavigationProps, ActivityStackNavigationProps} from './types';
import DetailedActivity from '../screens/DetailedActivity';
import ActivityList from '../screens/ActivityList';

const MainDrawerNavigator = createDrawerNavigator<MainDrawerNavigationProps>();
const ActivityStackNavigator =
  createNativeStackNavigator<ActivityStackNavigationProps>();

function ActivityListNavigation() {
  return (
    <ActivityStackNavigator.Navigator initialRouteName="ActivityListMain">
      <ActivityStackNavigator.Screen
        name="ActivityListMain"
        component={ActivityList}
        options={{headerShown: false}}
      />
      <ActivityStackNavigator.Screen
        name="DetailedActivity"
        component={DetailedActivity}
        options={{headerTitle: ''}}
      />
    </ActivityStackNavigator.Navigator>
  );
}

function MainNavigation() {
  return (
    <MainDrawerNavigator.Navigator
      initialRouteName="UI"
      screenOptions={{headerTintColor: colors.violet}}>
      <MainDrawerNavigator.Screen name="UI" component={UI} />
      <MainDrawerNavigator.Screen name="Activity" component={Activity} />
      <MainDrawerNavigator.Screen
        name="ActivityList"
        component={ActivityListNavigation}
      />
      <MainDrawerNavigator.Screen name="Network" component={Network} />
    </MainDrawerNavigator.Navigator>
  );
}

function RootNavigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <MainNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default RootNavigation;
