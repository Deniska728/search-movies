import { connect } from 'react-redux'

import MoviesItem from '../MovieItem'

import { requestMovie, clearMovieStore } from 'modules/MovieItem/actions/movie'
import { getMovie } from 'modules/MovieItem/selectors/movie'

const mapStateToProps = state => ({
  movie: getMovie(state)
})

const mapDispatchToProps = dispatch => ({
  requestMovie: () => dispatch(requestMovie()),
  clearMovieStore: () => dispatch(clearMovieStore())
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesItem)