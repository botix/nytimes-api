import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from "history";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

export const history = createBrowserHistory();

const store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
      logger
    )
  )
);

export default store;