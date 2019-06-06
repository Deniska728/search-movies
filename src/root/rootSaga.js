import { all, fork } from 'redux-saga/effects'

import watchMovies from 'modules/MoviesList/sagas/movies'

export default function* rootSaga() {
  yield all([
    fork(watchMovies)
  ])
}