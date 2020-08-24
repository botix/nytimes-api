import { FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS, FETCH_BOOK_FAILURE } from "./bookTypes";


const initState = {
  loading: false,
  books: [],
  error: "",
};


const bookReducer = (state = initState, action) => {

  switch(action.type){
    case FETCH_BOOK_REQUEST:
      return {
        ...state,
        loading: true
      };
    
    case FETCH_BOOK_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        error: ""
      };

    case FETCH_BOOK_FAILURE:
      return{
        loading: false,
        books: [],
        error: action.payload
      };

    default: 
      return state;
  };
};


export default bookReducer;