import React, { Component } from "react";
import {connect} from "react-redux";
import * as actionCreators from './store/actions/authors';

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

class AuthorsList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     filteredAuthors: this.props.authors
  //   };
  //
  //   this.filterAuthors = this.filterAuthors.bind(this);
  // }

  filterAuthors(query) {
    query = query.toLowerCase();
    this.props.filterAuthors(query);
    // let filteredAuthors = this.props.authors.filter(author => {
    //   return `${author.first_name} ${author.last_name}`
    //     .toLowerCase()
    //     .includes(query);
    // });
    // this.setState({ filteredAuthors });
  }

  render() {
    const authorCards = this.props.authsfilter.map(author => (
      <AuthorCard key={author.first_name + author.last_name} author={author} />
    ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        <SearchBar />
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
       authsfilter: state.rootAuthors.filterAuthors,
       authors:state.rootAuthors.authors
  }
};

const mapDispatchToProps = dispatch => {
  return {
    filterAuthors: (query) => dispatch(actionCreators.filterAuthors(query)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsList);
