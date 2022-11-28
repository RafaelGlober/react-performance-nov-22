import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './GoBack.module.scss';

export function GoBack() {
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(-1);
  }

  return (
    <div className={styles.goBack} onClick={handleBack}>
      <img src="https://bestanimations.com/media/left/135922352left-arrow-16.gif" alt="" width="40" />
    </div>
  )
}
