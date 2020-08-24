import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPolitics } from "../redux";
import BasicCard from "../components/BasicCard/BasicCard";

function Politics(props){

  useEffect(() => {
    props.fetchPolitics();
  }, []);

  const renderedCards = props.politicsData.articles.map(article => (
    <BasicCard data={article} key={Math.random()} />
  ));

  return props.politicsData.isLoading ? (
    <div>
      <h2 className="basic-card-container">Loading...</h2>
    </div>
  ) : <div className="basic-card-container">{renderedCards}</div>

};


const mapStateToProps = (state) => {
  return {
    politicsData: state.politics
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPolitics: () => dispatch(fetchPolitics())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Politics);