import React from 'react'

import styles from './style.scss'

const ListItem = ({ data: { Title, Poster, Year } }) => (
  <div className={styles['card-film']}>
    <div 
      style={{ 'backgroundImage': `url(${Poster})` }}
      className={styles['film-img']}
    ></div>
    <div className={styles['card-body']}>
      <span>{Title} ({Year})</span>
    </div>
  </div>
)

export default ListItem
