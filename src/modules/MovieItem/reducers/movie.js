import types from '../constants/movie'

const initialState = {
  movie: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_MOVIE_SUCCESS:
      return { ...state, movie: action.payload }
    case types.CLEAR_MOVIE_STORE:
      return { ...state, movie: null }
    default:
      return state
  }
}