import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { spinnerPlay, spinnerStop } from './js/spinner';
import { imgContainer, formEl } from './js/refs';
import { searchImages } from './js/searchImages';
import { createMarkUp } from './js/createMarkUp';

const handleSubmit = event => {
  event.preventDefault();
  spinnerPlay();

  const searchQuery = event.currentTarget.elements.query.value.trim();
  imgContainer.innerHTML = '';

  if (searchQuery !== '') {
    searchImages(searchQuery)
      .then(data => {
        imgContainer.innerHTML = createMarkUp(data.hits);
        const lightbox = new SimpleLightbox('.lightbox-link');
        lightbox.refresh();
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        spinnerStop();
      })
  } else {
    spinnerStop();
    return iziToast.warning({
      position: 'center',
      message: 'Please enter a search query.',
    });
  }
};

formEl.addEventListener('submit', handleSubmit);
