import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCars } from "../redux/";
import BasicCard from "../components/BasicCard/BasicCard";

function Automotive(props){

  useEffect(() => {
    props.fetchCars();
  }, []);

  const renderedCards = props.carData.cars.map(car => (
    <BasicCard data={car} key={Math.random()}/>
  ));

  return props.carData.isLoading ? (
    <div>
      <h2 className="basic-card-container">Loading...</h2>
    </div>
  ) : <div className="basic-card-container">{renderedCards}</div>
};

const mapStateToProps = (state) => {
  return{
    carData: state.car
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCars: () => dispatch(fetchCars())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Automotive);