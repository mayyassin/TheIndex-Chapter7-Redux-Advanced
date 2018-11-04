import * as actionTypes from './actionTypes';
import axios from "axios";

export const fetchAuthors = () => {
  return dispatch => {
    //This function gets called by Redux Thunk
    axios
      .get("https://the-index-api.herokuapp.com/api/authors/")
      .then(res => res.data)
      .then(authors =>
        dispatch({
          type: actionTypes.FETCH_AUTHORS,
          payload: authors
        })
      );
  };
};

export const filterAuthors = query => {
  return {
    type: actionTypes.FILTER_AUTHORS,
    payload: query
  };
};
