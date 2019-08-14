import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import loadable from '@loadable/component';

import Header from './component/Header';

import GlobalStyle from './shared/styles/Global';

const MovieList = loadable(() => import('./container/MovieList'));
const MovieDetail = loadable(() => import('./container/MovieDetail'));

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route path='/movie/:id' component={MovieDetail} />
          <Route path='/' component={MovieList} />
        </Switch>
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default withRouter(App);
