import { takeLatest, call, put, select } from 'redux-saga/effects'

import { requestMovie } from 'api/movies'
import { requestMovieSuccess, requestMovieError } from 'modules/MovieItem/actions/movie'
import types from 'modules/MovieItem/constants/movie'

const getId = state => state.router.location.pathname

function* requestMovieSaga() {
  try {
    const id = yield select(getId)
    const replaceId = id.replace('/movies/', '')
    const { data } = yield call(requestMovie, replaceId)
    
    yield put(requestMovieSuccess(data))
  } catch (error) {
    yield put(requestMovieError(error))
  }
}

export default function* watchMovie() {
  yield takeLatest(types.REQUEST_MOVIE, requestMovieSaga)
}