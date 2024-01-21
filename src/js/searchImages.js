import { BASE_URL, API_KEY } from './refs';
import axios from 'axios';

export const searchImages = async (q, page = 1, perPage = 40) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: perPage
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error during image search:', error);
    throw new Error('Failed to retrieve images');
  }
};