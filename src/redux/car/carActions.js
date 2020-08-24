import { FETCH_CAR_REQUEST, FETCH_CAR_SUCCESS, FETCH_CAR_FAILURE } from "./carTypes";
import { carsAPI } from "../../assets/endpoints/endpoints";
import axios from "axios";

export const fetchCarRequest = () => {
  return {
    type: FETCH_CAR_REQUEST
  };
};

export const fetchCarSuccess = (cars) => {
  return {
    type: FETCH_CAR_SUCCESS,
    payload: cars
  };
};

export const fetchCarFailure = (err) => {
  return {
    type: FETCH_CAR_FAILURE,
    payload: err
  };
};

export const fetchCars = () => {
  return (dispatch) => {
    dispatch(fetchCarRequest());

    axios.get(carsAPI)
      .then(res => {

        const cars = res.data.results
        dispatch(fetchCarSuccess(cars));
      })
      .catch(err => {

        dispatch(fetchCarFailure(err));
      });
  };
};