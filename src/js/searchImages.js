import { BASE_URL, API_KEY } from './refs';
import iziToast from 'izitoast';
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
        perPage
      },
    });

    if (response.data.total === 0&& page === 1) {
      imgContainer.innerHTML = '';
      iziToast.info({
        position: 'center',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }

    return response.data;
  } catch (error) {
    console.error('Error during image search:', error);
    throw new Error('Failed to retrieve images');
  }
};