import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CreditCalculator from '../screens/CreditCalculator';
import ApplicationCreate from '../screens/ApplicationCreate';
import ApplicationList from '../screens/ApplicationList';
import DetailedApplication from '../screens/DetailedApplication';
import Network from '../screens/Network';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {colors, navigationTheme} from '../theme/colors';
import {
  MainDrawerNavigationProps,
  ApplicationStackNavigationProps,
} from './types';

const MainDrawerNavigator = createDrawerNavigator<MainDrawerNavigationProps>();
const ApplicationStackNavigator =
  createNativeStackNavigator<ApplicationStackNavigationProps>();

function ApplicationListNavigation() {
  return (
    <ApplicationStackNavigator.Navigator initialRouteName="ApplicationListMain">
      <ApplicationStackNavigator.Screen
        name="ApplicationListMain"
        component={ApplicationList}
        options={{headerShown: false}}
      />
      <ApplicationStackNavigator.Screen
        name="DetailedApplication"
        component={DetailedApplication}
        options={{headerTitle: ''}}
      />
    </ApplicationStackNavigator.Navigator>
  );
}

function MainNavigation() {
  return (
    <MainDrawerNavigator.Navigator
      initialRouteName="CreditCalculator"
      screenOptions={{headerTintColor: colors.violet}}>
      <MainDrawerNavigator.Screen
        name="CreditCalculator"
        component={CreditCalculator}
      />
      <MainDrawerNavigator.Screen
        name="ApplicationCreate"
        component={ApplicationCreate}
      />
      <MainDrawerNavigator.Screen
        name="ApplicationList"
        component={ApplicationListNavigation}
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
