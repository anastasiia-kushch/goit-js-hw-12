import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { spinnerPlay, spinnerStop } from './js/spinner';
import { imgContainer, formEl, loadMoreBtn } from './js/refs';
import { searchImages } from './js/searchImages';
import { createMarkUp } from './js/createMarkUp';
import { hasMoreData } from './js/hasMoreData';

let currentPage = 1;

const handleSubmit = async event => {
  event.preventDefault();
  spinnerPlay();

  const searchQuery = event.currentTarget.elements.query.value.trim();

  if (searchQuery !== '') {
    try {
      const data = await searchImages(searchQuery, 1);
      imgContainer.insertAdjacentHTML('beforeend', createMarkUp(data.hits));
      const lightbox = new SimpleLightbox('.lightbox-link');
      lightbox.refresh();
      hasMoreData(data.totalHits, currentPage);
    } catch (error) {
      iziToast.error({
        position: 'center',
        message:
          'An error occurred while retrieving images. Please try again later.',
      });
      console.error('Error during search:', error);
    } finally {
      spinnerStop();
    }
  } else {
    spinnerStop();
    iziToast.warning({
      position: 'center',
      message: 'Please enter a search query.',
    });
  }
};

const handleMoreData = async () => {
  spinnerPlay();

  try {
    const searchQuery = formEl.elements.query.value.trim();
    const { hits, totalHits } = await searchImages(
      searchQuery,
      currentPage + 1
    );

    imgContainer.insertAdjacentHTML('beforeend', createMarkUp(hits));
    hasMoreData(totalHits, currentPage + 1);
    currentPage++;

    const cardHeight =
      imgContainer.lastElementChild.getBoundingClientRect().height;
      console.log(cardHeight);
    window.scrollBy({
      top: cardHeight * 5,
      behavior: 'smooth',
    });
  } catch (error) {
    console.error(error);
  } finally {
    spinnerStop();
  }
};

formEl.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', handleMoreData);
