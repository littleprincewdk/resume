import React from 'react';
import Resume from './Resume';
import styles from './App.less';

export default function App() {
  return (
    <React.Fragment>
      <p className={styles.lastModified}>最后更新于2021年5月</p>
      <a className={styles.downloadPdf} href="https://littleprincewdk.github.io/resume/resume.pdf">
        下载 PDF
      </a>
      <Resume />
      <footer className={styles.footer}>
        <a className={styles.footerLink} href="https://github.com/littleprincewdk/resume">
          页面托管在Github Pages上
        </a>
      </footer>
    </React.Fragment>
  );
}
