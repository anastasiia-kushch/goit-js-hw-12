import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { hideLoadMoreBtn, showLoadMoreBtn } from './loadFn';
import { loadMoreBtn } from './refs';

export const hasMoreData = (photos, page, perPage) => {
  const lastPage = Math.ceil(photos / perPage);

  if (page === lastPage) {
    iziToast.info({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
    hideLoadMoreBtn();
  } else {
    showLoadMoreBtn();
  }
};