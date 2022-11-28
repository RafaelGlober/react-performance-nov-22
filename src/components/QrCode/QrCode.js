import React from 'react'
import ReactQrCode from 'react-qr-code';
import styles from './QrCode.module.scss'

export function QrCode({link}) {
  return (
    <div className={styles.qrCodeContainer}>
      <ReactQrCode
        size={256}
        style={{ height: "auto", width: "300px", margin: "auto" }}
        value={link}
        viewBox={`0 0 256 256`}
      />
    </div>
  )
};