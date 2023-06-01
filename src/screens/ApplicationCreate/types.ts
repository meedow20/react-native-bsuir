export type StepType = 'first' | 'second';

export interface ApplicationCreateValues {
  id: string;
  name: string;
  type: string;
  author: string;
  year: string;
  platform: string;
  downloads: string;
  email: string;
  phone: string;
  photo: string;
  social: string;
}
