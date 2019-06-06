import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import movies from '../modules/MoviesList/reducers/movies'

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  movies
})

export default rootReducer
