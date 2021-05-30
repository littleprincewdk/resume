import React from 'react';
import Header from './Header';
import Body from './Body';
import styles from './index.less';

export default function Resume() {
  return (
    <main className={styles.resume}>
      <Header />
      <Body />
    </main>
  );
}
