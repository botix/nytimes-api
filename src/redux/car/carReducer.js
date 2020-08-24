import { FETCH_CAR_REQUEST, FETCH_CAR_SUCCESS, FETCH_CAR_FAILURE } from "./carTypes";

const initState = {
  isLoading: false,
  cars: [],
  error: "",
};

const carReducer = (state = initState, action) => {
  switch(action.type){
    case FETCH_CAR_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    
    case FETCH_CAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cars: action.payload,
      };
    
    case FETCH_CAR_FAILURE:
      return {
        ...state,
        isLoading:false,
        error: action.payload
      };
    
    default:
      return state;
  };
};

export default carReducer;