import { takeLatest, call, put } from 'redux-saga/effects'
import { requestMovies } from 'api/movies'
import { requestMoviesSuccess, requestMoviesError } from 'modules/MoviesList/actions/movies'
import types from 'modules/MoviesList/constants/movies'

function* requestMoviesSaga() {
  try {
    const { data } = yield call(requestMovies)
    
    yield put(requestMoviesSuccess(data))
  } catch (error) {
    yield put(requestMoviesError(error))
  }
}

export default function* watchMovies() {
  yield takeLatest(types.REQUEST_MOVIES, requestMoviesSaga)
}