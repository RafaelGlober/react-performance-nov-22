import React from 'react';
import styles from './PureComponent.module.scss';
import { GoBack } from '../../components';

export class PureComponent extends React.PureComponent {
  state = {
    counter: 0
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter !== this.state.counter;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log('Triggering setState without updating the counter value')
      this.setState(prevState => ({ counter: 0 }))
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { title, description } = this.props.data;
    console.log('component is getting rendered')

    return (
      <div className={styles.pureComponent}>
        <GoBack />
        <h1>{title}</h1>
        <p>{description} {this.state.counter}</p>
      </div>
    );
  }
}