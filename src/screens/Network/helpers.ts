import {NewsDataResponse} from './types';

const API_KEY = 'b6db34d831174c9dae6cb04a8bd8f778';

export const getNewsData = async (): Promise<NewsDataResponse> => {
  try {
    return fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`,
    ).then(data => data.json());
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
