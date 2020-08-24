import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import bookReducer from "./book/bookReducer";
import carReducer from "./car/carReducer";
import scienceReducer from "./science/scienceReducer";
import politicsReducer from "./politics/politicsReducer";

export default (history) => combineReducers({
  router:       connectRouter(history),
  book:         bookReducer,
  car:          carReducer,
  science:      scienceReducer,
  politics:     politicsReducer
  
});