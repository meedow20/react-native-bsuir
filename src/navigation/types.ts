import {DetailedActivityParams} from '../screens/DetailedActivity/types';
import {NavigatorScreenParams} from '@react-navigation/native';

export type RootNavigationProps = {
  UI: undefined;
  Activity: undefined;
  ActivityList: NavigatorScreenParams<ActivityStackNavigationProps>;
  Network: undefined;
};

export type MainDrawerNavigationProps = {
  UI: undefined;
  Activity: undefined;
  ActivityList: undefined;
  Network: undefined;
};

export type ActivityStackNavigationProps = {
  ActivityListMain: undefined;
  DetailedActivity: DetailedActivityParams;
};

export type FullNavigationScreens = {
  UI: undefined;
  Activity: undefined;
  ActivityList: undefined;
  ActivityListMain: undefined;
  DetailedActivity: DetailedActivityParams;
  Network: undefined;
};
