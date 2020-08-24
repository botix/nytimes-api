import { POLITICS_REQUEST_BROADCAST, POLITICS_REQUEST_SUCCESS, POLITICS_REQUEST_FAILURE } from "./politicsTypes";
import { politicsAPI } from "../../assets/endpoints/endpoints";
import axios from "axios";

export const fetchPoliticsBroadcast = () => {
  return {
    type: POLITICS_REQUEST_BROADCAST
  };
};

export const fetchPoliticsSuccess = (politics) => {
  return {
    type: POLITICS_REQUEST_SUCCESS,
    payload: politics
  };
};

export const fetchPoliticsFailure = (err) => {
  return {
    type: POLITICS_REQUEST_FAILURE,
    payload: err
  };
};

export const fetchPolitics = () => {
  return (dispatch) => {
    dispatch(fetchPoliticsBroadcast());

    axios.get(politicsAPI)
      .then(res => {

        dispatch(fetchPoliticsSuccess(res.data.results));
      })
      .catch(err => {

        dispatch(fetchPoliticsFailure(err.message));
      });
  };
};