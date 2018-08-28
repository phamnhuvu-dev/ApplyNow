const axios = require('axios');

export const ACTION_FETCH_POST = "FETCH_POST";
export const fetchPost = (page, query) => ({
  type: ACTION_FETCH_POST,
  page,
  query
});


export const ACTION_FILTER_POST = "FILTER_POST";
export const filterPost = (query) => ({
  type: ACTION_FILTER_POST,
  query
});


export const fetch = () => {
  return (dispatch) => {
    axios.post('/user', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};

