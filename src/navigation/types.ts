import {NavigatorScreenParams} from '@react-navigation/native';
import {DetailedApplicationParams} from '../screens/DetailedApplication/types';

export type RootNavigationProps = {
  CreditCalculator: undefined;
  ApplicationCreate: undefined;
  ApplicationList: NavigatorScreenParams<ApplicationStackNavigationProps>;
  Network: undefined;
};

export type MainDrawerNavigationProps = {
  CreditCalculator: undefined;
  ApplicationCreate: undefined;
  ApplicationList: undefined;
  Network: undefined;
};

export type ApplicationStackNavigationProps = {
  ApplicationListMain: undefined;
  DetailedApplication: DetailedApplicationParams;
};

export type FullNavigationScreens = {
  CreditCalculator: undefined;
  ApplicationCreate: undefined;
  ApplicationList: undefined;
  ApplicationListMain: undefined;
  DetailedApplication: DetailedApplicationParams;
  Network: undefined;
};
