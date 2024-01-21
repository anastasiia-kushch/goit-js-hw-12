import { loadMoreBtn } from "./refs";

export const showLoadMoreBtn = () => loadMoreBtn.classList.remove('is-hidden');
export const hideLoadMoreBtn = () => loadMoreBtn.classList.add('is-hidden');