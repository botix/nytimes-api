import { SCIENCE_REQUEST_BROADCAST, SCIENCE_REQUEST_SUCCESS, SCIENCE_REQUEST_FAILURE } from "./scienceTypes";
import { scienceAPI } from "../../assets/endpoints/endpoints";
import axios from "axios";

export const fetchScienceBroadcast= () => {
  return {
    type: SCIENCE_REQUEST_BROADCAST
  };
};

export const fetchScienceSuccess = (articles) => {
  return  {
    type: SCIENCE_REQUEST_SUCCESS,
    payload: articles
  };
};


export const fetchScienceFailure = (err) => {
  return {
    type: SCIENCE_REQUEST_FAILURE,
    payload: err
  };
};


export const fetchScience = () => {
  return (dispatch) => {
    dispatch(fetchScienceBroadcast());

    axios.get(scienceAPI)
      .then(res => {
        
        dispatch(fetchScienceSuccess(res.data.results));
      })
      .catch(err => {

        dispatch(fetchScienceFailure(err.message));
      });
  };
};