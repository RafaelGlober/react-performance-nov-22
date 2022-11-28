import React from 'react'
import styles from './SquareButton.module.scss';

export default function SquareButton({ text, link, onClick = () => {} }) {
  return (
    <a className={styles.squareButton} href={link} onClick={onClick}>
     {text}
    </a>
  )
}
