import { SCIENCE_REQUEST_BROADCAST, SCIENCE_REQUEST_SUCCESS, SCIENCE_REQUEST_FAILURE} from "./scienceTypes";


const initState = {
  isLoading: false,
  articles: [],
  error: ""
};

const scienceRequestReducer = (state = initState, action) => {
  switch(action.type){
    case SCIENCE_REQUEST_BROADCAST:
      return {
        ...state,
        isLoading: false
      };
    
    case SCIENCE_REQUEST_SUCCESS:
      return {
        isLoading: false,
        articles: action.payload,
        error: ""
      };

    case SCIENCE_REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    
    default:
      return state;
  };
};

export default scienceRequestReducer;