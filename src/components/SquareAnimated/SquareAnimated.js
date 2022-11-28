import React from 'react'
import { motion } from "framer-motion";
import styles from "./SquareAnimated.module.scss";


export const SquareAnimated = () => {
  return (
    <motion.div
      className={styles.animatedBox}
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{ ease: "linear", duration: 2, repeat: Infinity }}
    />
  )
}

