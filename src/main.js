import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { lightbox } from './js/refs';
import { spinnerPlay, spinnerStop } from './js/spinner';
import { imgContainer, formEl, loadMoreBtn } from './js/refs';
import { searchImages } from './js/searchImages';
import { createMarkUp } from './js/createMarkUp';
import { hasMoreData } from './js/hasMoreData';
import { hideLoadMoreBtn, showLoadMoreBtn } from './js/loadFn';

let currentPage = 1;
let searchQuery = '';
const perPage = 40;

const handleSubmit = async event => {
  event.preventDefault();
  spinnerPlay();

  currentPage = 1;
  imgContainer.innerHTML = '';
  hideLoadMoreBtn();

  searchQuery = event.currentTarget.elements.query.value.trim();

  if (!searchQuery) {
    iziToast.warning({
      position: 'center',
      message: 'Please enter a search query.',
    });
    setTimeout(spinnerStop, 500);
    return;
  } 
  try {
    const data = await searchImages(searchQuery, currentPage, perPage);
   
    if (data.hits.length === 0) {
      imgContainer.innerHTML = '';
      hideLoadMoreBtn();
      iziToast.info({
        position: 'center',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    imgContainer.insertAdjacentHTML('beforeend', createMarkUp(data.hits));
    lightbox.refresh();
    hasMoreData(data.totalHits, currentPage, perPage);
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
};

const handleMoreData = async () => {
  spinnerPlay();

  // loadMoreBtn.classList

  currentPage += 1

  try {
    const { hits, totalHits } = await searchImages(
      searchQuery,
      currentPage,
      perPage
    );

    imgContainer.insertAdjacentHTML('beforeend', createMarkUp(hits));
    lightbox.refresh();
    hasMoreData(totalHits, currentPage, perPage);

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
