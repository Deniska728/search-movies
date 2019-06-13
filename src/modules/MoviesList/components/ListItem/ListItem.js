import React from 'react'

import styles from './style.scss'

import { Link } from 'react-router-dom'

const ListItem = ({ data: { Title, Poster, Year, imdbID } }) => (
    <div className={styles['card-film']}>
      <div 
        style={{ 'backgroundImage': `url(${Poster})` }}
        className={styles['film-img']}
      ></div>
      <div className={styles['card-body']}>
        <Link to={`/movies/${imdbID}`} className={styles.link}>{Title} ({Year})</Link>
      </div>
    </div>
)

export default ListItem
