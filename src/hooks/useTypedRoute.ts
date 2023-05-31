import {RouteProp, useRoute} from '@react-navigation/native';
import {RootNavigationProps} from '../navigation/types';

export const useTypedRoute = (key: keyof RootNavigationProps) => {
  return useRoute<RouteProp<RootNavigationProps, typeof key>>();
};
