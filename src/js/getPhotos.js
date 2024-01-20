import axios from 'axios';

export const getPhotos = (query, page) => {

  const url = 'https://pixabay.com/api/';
  const params = {
    key: '41741201-12a642cf53882fe64e8e82723', 
    query,
    page,
    per_page: 40,
    orientation: 'portrait',
  };

  return axios.get(url, { params: params });
};