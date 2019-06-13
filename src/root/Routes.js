import { hot } from 'react-hot-loader/root';
import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom'

import MovieItem from 'modules/MovieItem/containers/MovieItem'
import MoviesList from 'modules/MoviesList/containers/MoviesList'

import Layout from 'common/components/Layout/Layout'

const Routes = () => (
  <Layout>
    <Switch>
      <Redirect exact from='/' to='/movies' />
      <Route exact path='/movies' render={ () => (
        <MoviesList />
      )}/>
      <Route path='/movies/:movieId' render={ () => (
        <MovieItem />
      )}/>
    </Switch>
  </Layout>
)
  
export default hot(Routes);