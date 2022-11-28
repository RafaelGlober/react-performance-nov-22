import React, { Component } from 'react'
import { SquareButton } from '../../components/SquareButton';
import styles from './Welcome.module.scss';

export class Welcome extends Component {
  render() {
    return (
      <div className={styles.welcome}>
        <h1>Welcome to Viernes de Mentoring</h1>
        <div>
          <SquareButton text="Debouncing" link="/debounce" />
          <SquareButton text="Throttling" link="/throttle" />
          <SquareButton text="Fragments" link="/fragments" />
          <SquareButton text="Inline Functions" link="/inline-functions" />
          <SquareButton text="Lazy Loading" link="/lazy-loading" />
          <SquareButton text="Memoization" link="/memoization" />
          <SquareButton text="Pure Components" link="/pure-components" />
          <SquareButton text="Virtualization" link="/virtualization" />
        </div>
      </div>
    )
  }
}
