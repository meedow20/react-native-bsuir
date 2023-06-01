import {ApplicationCreateValues} from './types';

export const getInitialApplicationValues = (): ApplicationCreateValues => {
  return {
    id: '',
    name: '',
    type: '',
    author: '',
    year: '',
    platform: '',
    downloads: '',
    email: '',
    phone: '',
    photo: '',
    social: '',
  };
};
