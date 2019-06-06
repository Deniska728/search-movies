import React from 'react'

import styles from './style.scss';
import Film from 'common/icons/Film';

console.log(styles)

const Header = () => (
  <div className={styles.header}>
    <Film className={styles.film}/>
    <span>React Movie Cards</span>
  </div>
)

export default Header