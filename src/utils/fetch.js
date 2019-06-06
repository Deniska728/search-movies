import axios from 'axios'

const backendURI = 'http://www.omdbapi.com/'

export const fetch = axios.create({
  baseURL: backendURI
})

fetch.interceptors.response.use((response) => {
  return response
}, function (error) {
  return Promise.reject(error.response)
})