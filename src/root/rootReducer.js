import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import movies from 'modules/MoviesList/reducers/movies'
import movie from 'modules/MovieItem/reducers/movie'

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  movies,
  movie
})

export default rootReducer
