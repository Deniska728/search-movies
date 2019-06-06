import { hot } from 'react-hot-loader/root';
import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom'

import MoviesList from 'modules/MoviesList/containers/MoviesList'
import Header from 'common/components/Header/Header';

const Routes = () => (
  <Switch>
    <Redirect exact from='/' to='/movies' />
    <Route path='/movies' render={ () => (
      <>
        <Header />
        <MoviesList />
      </>
    )}/>
  </Switch>
)
  
export default hot(Routes);