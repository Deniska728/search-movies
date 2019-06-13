import types from '../constants/movie'

export const requestMovie = () => ({
  type: types.REQUEST_MOVIE
})

export const requestMovieSuccess = data => ({
  type: types.REQUEST_MOVIE_SUCCESS,
  payload: data
})

export const requestMovieError = (error) => {
  console.log(error);
}

export const clearMovieStore = () => ({
  type: types.CLEAR_MOVIE_STORE
})