import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import axios from "axios";
import * as actionCreators from './store/actions/authors';

// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

import {connect} from "react-redux";



const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     authors: [],
  //     loading: true
  //   };
  // }

  // fetchAllAuthors() {
  //   return instance.get("/api/authors/").then(res => res.data);
  // }

  componentDidMount() {
    this.props.fetchAuthors();
    // this.fetchAllAuthors()
    //   .then(authors =>
    //     this.setState({
    //       authors: authors,
    //       loading: false
    //     })
    //   )
    //   .catch(err => console.error(err));
  }

  getView() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      return (
        <Switch>
          <Redirect exact from="/" to="/authors" />
          <Route path="/authors/:authorID" component={AuthorDetail} />
          <Route
            path="/authors/"
            render={props => (
              <AuthorsList {...props} authors={this.props.authsfilter} />
            )}
          />
        </Switch>
      );
    }
  }

  render() {


    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">{this.getView()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
     auths: state.rootAuthors.authors,
     loading: state.rootAuthors.loading,
     authsfilter: state.rootAuthor.filterAuthors
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAuthors: () => dispatch(actionCreators.fetchAuthors()),
  };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
