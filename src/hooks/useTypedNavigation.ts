import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootNavigationProps} from '../navigation/types';

export const useTypedNavigation = () => {
  return useNavigation<NavigationProp<RootNavigationProps>>();
};
