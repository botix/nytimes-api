import { POLITICS_REQUEST_BROADCAST, POLITICS_REQUEST_SUCCESS, POLITICS_REQUEST_FAILURE } from "./politicsTypes";


const initState = {
  isLoading: false,
  articles: [],
  error: ""
}

const politicsReducer = (state = initState, action) => {
  switch(action.type){
    case POLITICS_REQUEST_BROADCAST:
      return {
        ...state,
        isLoading: true
      };
    
    case POLITICS_REQUEST_SUCCESS:
      return {
        isLoading: false,
        articles: action.payload,
        error: ""
      };
    
    case POLITICS_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    
    default:
      return state;
  };
};

export default politicsReducer;