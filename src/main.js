import axios from 'axios';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { spinnerPlay, spinnerStop } from './js/spinner';
import { imgContainer, formEl } from './js/refs';
import { createMarkUp } from './js/createMarkUp';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41741201-12a642cf53882fe64e8e82723';

const searchImages = async searchQuery => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });

    // if (response.data.total === 0) {
    //   iziToast.info({
    //     position: 'center',
    //     message: 'Sorry, there are no images matching your search query. Please try again!',
    //   });
    // }

    return response.data;
  } catch (error) {
    console.error('Error during image search:', error);
    throw new Error('Failed to retrieve images');
  }
};

const handleSubmit = async event => {
  event.preventDefault();
  spinnerPlay();

  const searchQuery = event.currentTarget.elements.query.value.trim();
  imgContainer.innerHTML = '';

  if (searchQuery !== '') {
    try {
      const data = await searchImages(searchQuery);
      imgContainer.innerHTML = createMarkUp(data.hits);
      const lightbox = new SimpleLightbox('.lightbox-link');
      lightbox.refresh();
    } catch (error) {
      // iziToast.error({
      //   position: 'center',
      //   message: 'An error occurred while retrieving images. Please try again later.',
      // });
      console.error('Error during search:', error);
    } finally {
      spinnerStop();
    }
  } else {
    spinnerStop();
    // iziToast.warning({
    //   position: 'center',
    //   message: 'Please enter a search query.',
    // });
  }
};

formEl.addEventListener('submit', handleSubmit);
