import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchScience } from "../redux";
import BasicCard from "../components/BasicCard/BasicCard";

function Science(props){

  useEffect(() => {
    props.fetchScience()
  }, []);
  console.log(props.scienceData)

  const renderedCards = props.scienceData.articles.map(article => (
    <BasicCard data={article} key={Math.random()}/>
  ));

  return props.scienceData.isLoading ? (
    <div>
      <h2 className="basic-card-container">Loading...</h2>
    </div>
  ) : <div className="basic-card-container">{renderedCards}</div>
};

const mapStateToProps = (state) => {
  return {
    scienceData: state.science
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchScience: () => dispatch(fetchScience())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Science);