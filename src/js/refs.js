import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const imgContainer = document.querySelector('.img-container');
export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '41741201-12a642cf53882fe64e8e82723';
export const formEl = document.querySelector('.search-form');
export const loadMoreBtn = document.querySelector('.js-load-more');
export const lightbox = new SimpleLightbox('.lightbox-link');