
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  authors: [],
  filterAuthors: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AUTHORS:
      return {
        ...state,
        authors: action.payload,
        loading: false,
        filterAuthors:  action.payload
      };
      case actionTypes.FILTER_AUTHORS:
      return{
        ...state,
        filterAuthors: state.authors.filter(author => {
          return `${author.first_name} ${author.last_name}`
            .toLowerCase()
            .includes(action.payload);
        })
      };

    default:
      return state;
  }
};

export default reducer;
