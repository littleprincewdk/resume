import React from 'react';
import styles from './Section.less';

export default function Section(props) {
  const { title, children } = props;

  let body = <div className={styles.body} dangerouslySetInnerHTML={{ __html: children }} />;

  if (children.includes('<hr>')) {
    const [left, right] = children.split('<hr>');
    body = (
      <div className={styles.body}>
        <div className="row">
          <div
            className="col"
            style={{ marginRight: 30 }}
            dangerouslySetInnerHTML={{ __html: left }}
          />
          <div className="col" dangerouslySetInnerHTML={{ __html: right }} />
        </div>
      </div>
    );
  }

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
      </header>
      {body}
    </section>
  );
}
