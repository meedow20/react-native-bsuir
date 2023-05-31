import {ActivityValues} from './types';

export const getInitialActivityValues = (): ActivityValues => {
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
