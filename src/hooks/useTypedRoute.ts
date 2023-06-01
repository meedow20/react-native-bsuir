import {RouteProp, useRoute} from '@react-navigation/native';
import {FullNavigationScreens} from '../navigation/types';

export const useTypedRoute = (key: keyof FullNavigationScreens) => {
  return useRoute<RouteProp<FullNavigationScreens, typeof key>>();
};
