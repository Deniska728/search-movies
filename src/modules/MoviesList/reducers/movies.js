import types from '../constants/movies'

const initialState = {
  movies: []
}
  

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_MOVIES_SUCCESS:
      return { ...state, movies: action.payload }
    default:
      return state
  }
}