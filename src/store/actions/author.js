import * as actionTypes from './actionTypes';
import axios from "axios";

export const fetchAuthorDetail = (authorID) => {
  return dispatch => {
    //This function gets called by Redux Thunk
    axios
      .get(`https://the-index-api.herokuapp.com/api/authors/${authorID}`)
      .then(res => res.data)
      .then(authors =>
        dispatch({
          type: actionTypes.FETCH_AUTHOR_DETAIL,
          payload: authors
        })
      );
  };
};
