import React, { Component } from 'react'

import ListItem from 'modules/MoviesList/components/ListItem/ListItem'

import styles from './style.scss'

export default class MoviesList extends Component {

  componentDidMount() {
     const { requestMovies } = this.props
     requestMovies()
  }

  render() {
    const { movies } = this.props

    if(!movies.Search) return <div>Loading...</div>

    return (
      <div className={styles['card-film-list']}>
        {
          movies.Search.map((movie, idx) => (
            <ListItem 
              key={idx}
              data={movie}
            />
          ))
        }
      </div>
    )
  }
}
