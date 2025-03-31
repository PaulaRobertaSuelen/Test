import React from 'react';
import styles from './styles.module.css';

export default function Footer({children}) {
  return (
    <div className={styles.footer}>{children}</div>
  )
}
