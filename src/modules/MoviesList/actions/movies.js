import types from '../constants/movies'

export const requestMovies = () => ({
  type: types.REQUEST_MOVIES
})

export const requestMoviesSuccess = data => ({
  type: types.REQUEST_MOVIES_SUCCESS,
  payload: data
})

export const requestMoviesError = (error) => {
  console.log(error);
}