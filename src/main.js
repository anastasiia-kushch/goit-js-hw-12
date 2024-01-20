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

const getCardHeight = () => {
  const firstCard = document.querySelector('.img-container').firstElementChild;
  return firstCard ? firstCard.getBoundingClientRect().height : 0;
};

const handleSubmit = async event => {
  event.preventDefault();
  spinnerPlay();

  const searchQuery = event.currentTarget.elements.query.value.trim();
  const cardHeight = getCardHeight();

  if (searchQuery !== '') {
    try {
      const data = await searchImages(searchQuery, 1);
      imgContainer.innerHTML += createMarkUp(data.hits);
      const lightbox = new SimpleLightbox('.lightbox-link');
      lightbox.refresh();
      hasMoreData(data.totalHits, currentPage);

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
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

    imgContainer.innerHTML += createMarkUp(hits);
    hasMoreData(totalHits, currentPage + 1);
    currentPage++;

    const cardHeight = getCardHeight();
    window.scrollBy({
      top: cardHeight * 2,
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
