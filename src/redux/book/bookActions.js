import { FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS, FETCH_BOOK_FAILURE } from "./bookTypes";
import { booksAPI } from "../../assets/endpoints/endpoints";
import axios from "axios";


export const fetchBookRequest = () => {
  return {
    type: FETCH_BOOK_REQUEST
  };
};

export const fetchBookSuccess = (books) => {
  return {
    type: FETCH_BOOK_SUCCESS,
    payload: books
  };
};

export const fetchBookFailure = (error) => {
  return {
    type: FETCH_BOOK_FAILURE,
    payload: error
  }
}

export const fetchBooks = () => {
  return (dispatch) => {
    dispatch(fetchBookRequest());

    axios.get(booksAPI)
      .then(res => {
        
        dispatch(fetchBookSuccess(res.data.results.books));
      })
      .catch(err => {
        dispatch(fetchBookFailure(err.message));
      });
  };
};