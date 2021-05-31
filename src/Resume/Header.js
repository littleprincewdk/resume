import React from 'react';
import baseInfo from '../resume.config/baseInfo.json';
import BlogIcon from '../assets/blog.svg';
import GithubIcon from '../assets/github.svg';
import EmailIcon from '../assets/email.svg';
import PhoneIcon from '../assets/phone.svg';
import WechatIcon from '../assets/wechat.svg';
import styles from './Header.less';

export default function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.title}>
        <div className={styles.name}>
          <h1>{baseInfo.name}</h1>
        </div>
        <div className={styles.job}>
          <h2>{baseInfo.job}</h2>
        </div>
      </section>
      <section className={styles.info}>
        <ul>
          <li>
            {baseInfo.gender} / {baseInfo.birthday}
          </li>
          <li>
            {baseInfo.school.name} · {baseInfo.school.profession}
          </li>
          <li>
            {baseInfo.school.degree} / {baseInfo.school.startTime}-{baseInfo.school.endTime}
          </li>
        </ul>
      </section>
      <section className={styles.contact}>
        <ul>
          <li>
            <a href="https://juejin.cn/user/4248168662309022/posts">
              <span className={styles.contactLink}>blog</span>
              <BlogIcon />
            </a>
          </li>
          <li>
            <a href="https://github.com/littleprincewdk">
              <span className={styles.contactLink}>github - littleprincewdk</span>
              <GithubIcon />
            </a>
          </li>
          <li>
            <a href="mailto:2889110370@qq.com">
              <span className={styles.contactLink}>2889110370@qq.com</span>
              <EmailIcon />
            </a>
          </li>
          <li>
            <a href="https://littleprincewdk.github.io/resume/">
              <span className={styles.contactLink}>13552484093</span>
              <PhoneIcon />
            </a>
          </li>
          <li>
            <a href="https://littleprincewdk.github.io/resume/">
              <span className={styles.contactLink}>wdk28891103700409</span>
              <WechatIcon />
            </a>
          </li>
        </ul>
      </section>
    </header>
  );
}
