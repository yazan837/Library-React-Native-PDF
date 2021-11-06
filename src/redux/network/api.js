export const URL = 'https://ekiaai.com/api/books';
import store from '../store';
import reactotron from 'reactotron-react-native';

const fetchData = async (endpoint, body) => {
  const url = `${URL}`;
  return fetch(url, {
    method: 'GET',
  })
    .then(response => response.text())
    .then(response => {
      const regex = /(<([^>]+)>)/gi;
      const result = response.replace(regex, '');
      const data = JSON.parse(result);

      if (data != null) {
        return {networkSuccess: true, data};
      } else {
        return {networkSuccess: false, ...data};
      }
    })
    .catch(e => ({networkSuccess: false}));
};

export {fetchData};
