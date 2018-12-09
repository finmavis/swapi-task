import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './component/Header';
import MovieList from './container/MovieList';
import MovieDetail from './container/MovieDetail';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route path='/movie/:id' component={MovieDetail} />
          <Route path='/' component={MovieList} />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
