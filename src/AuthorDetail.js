import React, { Component } from "react";
import axios from "axios";
import {connect} from "react-redux";
import * as actionCreators from './store/actions/author';

// Components
import BookTable from "./BookTable";
import Loading from "./Loading";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

class AuthorDetail extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     author: {},
  //     loading: true
  //   };
  // }

  componentDidMount() {
    this.getAuthor();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.authorID !== this.props.match.params.authorID) {
      this.getAuthor();
    }
  }

  getAuthor() {
    const authorID = this.props.match.params.authorID;
    this.props.fetchAuthor(authorID);
    // this.setState({ loading: true });
    // instance
    //   .get(`/api/authors/${authorID}`)
    //   .then(res => res.data)
    //   .then(author => this.setState({ author: author, loading: false }))
    //   .catch(err => console.error(err));
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      const author = this.props.authdetail;
      return (
        <div className="author">
          <div>
            <h3>{author.first_name + " " + author.last_name}</h3>
            <img
              src={author.imageUrl}
              className="img-thumbnail img-fluid"
              alt={author.first_name + " " + author.last_name}
            />
          </div>
          <BookTable books={author.books} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
      authdetail: state.rootAuthor.author,
      loading: state.rootAuthor.loading,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAuthor: (authorID) => dispatch(actionCreators.fetchAuthorDetail(authorID)),
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(AuthorDetail);
