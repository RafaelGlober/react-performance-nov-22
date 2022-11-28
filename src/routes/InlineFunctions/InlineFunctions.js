import React from 'react';
import styles from './InlineFunctions.module.scss';
import { GoBack } from '../../components';

export const InlineFunctions = () => {
  const [counter, setCounter] = React.useState(0);

  const handleCounter = (value) => () => {
    setCounter(prevState => {
      return prevState + value > 0 ? prevState + value : 0;
    })
  }

  return (
    <div className={styles.inlineFunctions}>
      <h1>Inline Functions</h1>
      <h2>Counter: {counter}</h2>
      <div className={styles.buttonsGroup}>
        <button onClick={handleCounter(1)}>+1</button>
        <button onClick={handleCounter(-1)}>-1</button>
      </div>
      <GoBack />
    </div>
  )
}