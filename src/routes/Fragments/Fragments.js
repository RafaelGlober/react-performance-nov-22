import React from 'react';
import styles from './Fragments.module.scss'
import { GoBack } from '../../components/GoBack';

const ElementsWithDiv = () => (
  <div className={styles.useless}>
    <li>Item List</li>
    <li>Item List</li>
    <li>Item List</li>
  </div>
)

const ElementsWithFragment = () => (
  <React.Fragment>
    <li>Item List</li>
    <li>Item List</li>
    <li>Item List</li>
  </React.Fragment>
)

const ElementsWithFragmentShort = () => (
  <>
    <li>Item List</li>
    <li>Item List</li>
    <li>Item List</li>
    <>
      <li>Item List</li>
      <li>Item List</li>
      <>
        <li>Item List</li>
        <li>Item List</li>
      </>
    </>
  </>
)


export const Fragments = () => {
  const [renderedComponent, setRenderedComponent] = React.useState(ElementsWithDiv);

  const setDiv = () => setRenderedComponent(ElementsWithDiv);
  const setFragment = () => setRenderedComponent(ElementsWithFragment);
  const setShortFragment = () => setRenderedComponent(ElementsWithFragmentShort);

  return (
    <div className={styles.fragments}>
      <GoBack />
      <button onClick={setDiv}>Elements with div</button>
      <button onClick={setFragment}>Elements with React.Fragment</button>
      <button onClick={setShortFragment}>Elements with {`<> </>`} tags</button>

      <h3>Elements</h3>
      <ul>
        {renderedComponent}
        {renderedComponent}
        {renderedComponent}
      </ul>
    </div>
  )
}