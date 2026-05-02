import axios from 'axios';

const API_KEY = '55579109-6d91a7f7bc5e935c526ce2bfc';
axios.defaults.baseURL = `https://pixabay.com/api/`;

export async function getImagesByQuery(query = '', page = 1) {
  const params = {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  };

  try {
    const response = await axios.get('', params);
    return response.data;
  } catch (error) {
    throw error;
  }
}
