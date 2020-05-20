import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

import GlobalStyle from './shared/styles/base/global';

const Header = loadable(() => import('./components/Header/Header'));
const MovieList = loadable(() => import('./components/MovieList/MovieList'));
const MovieDetail = loadable(() =>
  import('./components/MovieDetail/MovieDetail')
);

export default function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path='/movie/:id'>
          <MovieDetail />
        </Route>
        <Route path='/'>
          <MovieList />
        </Route>
      </Switch>
      <GlobalStyle />
    </Fragment>
  );
}
