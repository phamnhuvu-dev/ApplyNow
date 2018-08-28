export const ACTION_FETCH_POST = "FETCH_POST";

export const fetchPost = (page, query) => ({
  type: ACTION_FETCH_POST,
  page,
  query
});