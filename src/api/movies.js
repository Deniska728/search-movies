import { fetch } from 'utils/fetch'

export const requestMovies = () => fetch.get(`?s=Batman&apikey=d5677312`)