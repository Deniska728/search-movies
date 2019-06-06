import { connect } from 'react-redux'

import MoviesList from '../MoviesList'

import { requestMovies } from 'modules/MoviesList/actions/movies'
import { getMovies } from 'modules/MoviesList/selectors/movies'

const mapStateToProps = state => ({
  movies: getMovies(state)
})

const mapDispatchToProps = dispatch => ({
  requestMovies: () => dispatch(requestMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)