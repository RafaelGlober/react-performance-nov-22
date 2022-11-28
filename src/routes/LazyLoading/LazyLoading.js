import React, { Suspense, useState } from 'react'
import { GoBack } from '../../components'
import { Fallback } from '../../components/Fallback';
import { SquareButton } from '../../components'
import styles from './LazyLoading.module.scss';
// import LazyComponent from './LazyComponent';

const LazyComponent = React.lazy(() => import('./LazyComponent'));


export const LazyLoading = () => {
  const [imageToggle, setImageToggle] = useState(false);

  const handleToggle = () => {
    setImageToggle(true);
  }

  return (
    <div className={styles.lazyLoading}>
      <h1>Hands on Lazy Loading</h1>
      {!imageToggle && (
      <SquareButton onClick={handleToggle} text="Show Image" />
      )}

      <Suspense fallback={<Fallback />}>
        {imageToggle && (
          <LazyComponent />
        )}
      </Suspense>
      <GoBack />
    </div>
  )
}
