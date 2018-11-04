
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  authors: [],
  filterAuthors: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AUTHORS:
      return {
        ...state,
        authors: state.authors.concat(action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
