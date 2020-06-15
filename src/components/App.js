import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import Header from './elements/Header';
import Home from './Home';
import Movie from './Movie';
import NotFound from './NotFound';

import { GlobalStyle } from '../components/styles/GlobalStyle';

const App = () => (
  <Fragment>
    <Header />
    <Router>
      <Home path='/' />
      <Movie path='/:movieId' />
      <NotFound default />
    </Router>
    <GlobalStyle />
  </Fragment>
);

export default App;
