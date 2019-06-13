import { fetch } from 'utils/fetch'

export const requestMovies = () => fetch.get(`?s=Batman&apikey=d5677312`)

export const requestMovie = (movieId) => fetch.get(`?i=${movieId}&apikey=d5677312`)