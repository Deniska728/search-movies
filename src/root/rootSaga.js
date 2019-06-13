import { all, fork } from 'redux-saga/effects'

import watchMovies from 'modules/MoviesList/sagas/movies'
import watchMovie from 'modules/MovieItem/sagas/movie'

export default function* rootSaga() {
  yield all([
    fork(watchMovies),
    fork(watchMovie)
  ])
}