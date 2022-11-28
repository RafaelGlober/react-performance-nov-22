import React, { useState, useEffect } from 'react'
import { throttle } from 'lodash';
import { GoBack } from '../../components';

export const Throttling = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [throttledMouseX, setThrottledMouseX] = useState(0);
  const [throttledMouseY, setThrottledMouseY] = useState(0);

  const handleMousePosition = (e) => {
    e.preventDefault();
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  }

  const throttledMousePosition = (e) => {
    e.preventDefault();
    setThrottledMouseX(e.clientX);
    setThrottledMouseY(e.clientY);
  }

  const throttledEventListener = throttle(throttledMousePosition, 300);

  useEffect(() => {
    document.addEventListener("mousemove", handleMousePosition);
    document.addEventListener("mousemove", throttledEventListener);

    return () => {
      document.removeEventListener("mousemove", handleMousePosition);
      document.removeEventListener("mousemove", throttledEventListener);
    }
  }, [])

  return (
    <div>
      <GoBack />
      <h1>Mouse Position X: {mouseX}, Y: {mouseY} </h1>
      <h1>Throttled Mouse Position X: {throttledMouseX}, Y: {throttledMouseY} </h1>
    </div>
  )
}
