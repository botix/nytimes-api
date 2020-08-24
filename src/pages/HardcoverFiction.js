import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../redux/";
import BasicCard from "../components/BasicCard/BasicCard";

function HardcoverFiction(props){

  useEffect(() => {

    props.fetchBooks();
  }, []);

  const renderedCards = props.bookData.books.map(book => (
      <BasicCard data={{book}} key={Math.random()}/>
  ));

  return props.bookData.loading ? (
    <h2 className="basic-card-container">Loading...</h2>
  ) : <div className="basic-card-container">{renderedCards}</div>
};

const mapStateToProps = (state) => {
  return {
    bookData: state.book
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: () => dispatch(fetchBooks())
  }
}
 


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HardcoverFiction);