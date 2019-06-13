import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import styles from './style.scss'

export default class MovieItem extends Component {

  componentDidMount() {
    this.props.requestMovie()
  }

  componentWillUnmount() {
    this.props.clearMovieStore()
  }

  render() {
    const { movie } = this.props

    if(!movie) return <div>Loading...</div>

    const {  movie: { Title, Actors, Plot, Poster, imdbRating, Year, Runtime, Released, Production, Genre, Country, Director }} = this.props

    const movieInfo = [
      {
        title: 'year',
        content: Year
      },
      {
        title: 'country',
        content: Country
      },
      {
        title: 'director',
        content: Director
      },
      {
        title: 'actors',
        content: Actors
      },
      {
        title: 'production',
        content: Production
      },
      {
        title: 'genre',
        content: Genre
      },
      {
        title: 'released',
        content: Released
      },
      {
        title: 'runtime',
        content: Runtime
      },
      {
        title: 'IMDBRaing',
        content: imdbRating
      },
    ]

    return (
      <div className={styles.container}>
        <div className={styles['movie-info']}>
          <div className={styles.poster}>
            <img src={Poster} alt=""/>
          </div>
          <div className={styles.description}>
            <ul className={styles['description-list']}>
              {movieInfo.map((t, idx) => (
                <li className={styles['description-list-item']} key={idx}>
                  <div className={styles.title}>{t.title}</div>
                  <div className={styles.content}>{t.content}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.plot}>
          <p>Description: {Plot}</p>
        </div>
        <Link to="/movies" className={styles.exit}>Back</Link>
      </div>
    )
  }
}
