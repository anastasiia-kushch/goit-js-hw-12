import { BASE_URL, API_KEY } from './refs';
import iziToast from 'izitoast';

export const searchImages = query => {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Response is not success: ${response.status}`);
      }

      return response.json();
    })
    .then(data => {
      if (data.total === 0) {
        iziToast.info({
          position: 'center',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      return data;
    });
};