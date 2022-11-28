import React, { useState, useEffect } from 'react'
import { debounce } from 'lodash';
import { GoBack, QrCode } from '../../components';
import styles from './Debouncing.module.scss';

export const Debouncing = () => {
  const [showQrCode, setShowQrCode] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [debouncedMouseX, setDebouncedMouseX] = useState(0);
  const [debouncedMouseY, setDebouncedMouseY] = useState(0);

  const handleQrCode = () => {
    setShowQrCode(true);
  }

  const handleMousePosition = (e) => {
    e.preventDefault();
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  }

  const debouncedMousePosition = (e) => {
    e.preventDefault();
    setDebouncedMouseX(e.clientX);
    setDebouncedMouseY(e.clientY);
  }

  const debouncedEventListener = debounce(debouncedMousePosition, 200);

  useEffect(() => {
    document.addEventListener("mousemove", handleMousePosition);
    document.addEventListener("mousemove", debouncedEventListener);
    document.addEventListener("click", handleQrCode, { once: true });


    return () => {
      document.removeEventListener("mousemove", handleMousePosition);
      document.removeEventListener("mousemove", debouncedEventListener);
      document.removeEventListener("click", handleQrCode);
    }
  }, []);



  return (
    <div className={styles.debouncing}>
      <div>
        <h1>Mouse Position X: {mouseX}, Y: {mouseY} </h1>
        <h1>Debounced Mouse Position X: {debouncedMouseX}, Y: {debouncedMouseY}</h1>
      </div>
      {showQrCode && <QrCode link="https://www.freecodecamp.org/news/javascript-debounce-example/" />}
      <GoBack />
    </div>
  )
}