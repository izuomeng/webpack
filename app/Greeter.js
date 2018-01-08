import text from './hello'
import React from 'react'
import styles from './greet.css'

export default () => (
  <div className={styles.root}>{text}</div>
)