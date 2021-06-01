import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import Resume from './template/vue';
import ResetIcon from './assets/reset.svg';
import MenuIcon from './assets/menu.svg';
import GithubIcon from './assets/github.svg';
import SaveIcon from './assets/save.svg';
import EditIcon from './assets/edit.svg';
import PreviewIcon from './assets/preview.svg';
import data from './template/vue/data.html';
import styles from './App.less';

// const Resume = React.lazy(() => import('./template/vue'));

export default function App() {
  const [resumeData, setResumeData] = useState(localStorage.getItem('resume') || data);
  let [resumeTime, setResumeTime] = useState(localStorage.getItem('resumeTime'));
  const [showMenu, setShowMenu] = useState(true);
  const [mode, setMode] = useState('edit');
  const $resume = useRef(null);

  if (resumeTime) {
    resumeTime = new Date();
    resumeTime = `${resumeTime.getFullYear()}-${
      resumeTime.getMonth() + 1
    }-${resumeTime.getDate()} ${resumeTime.getHours()}:${resumeTime.getMinutes()}:${resumeTime.getSeconds()}`;
  }

  useEffect(() => {
    window.onbeforeunload = (e) => {
      save();
      return true;
    };
  }, []);

  function switchMode() {
    if (mode === 'edit') {
      setMode('preview');
      setShowMenu(false);
    } else {
      setMode('edit');
      setShowMenu(true);
    }
  }

  function save() {
    const now = Date.now();
    localStorage.setItem('resume', $resume.current.innerHTML);
    localStorage.setItem('resumeTime', now);
    setResumeTime(now);
  }

  function reset() {
    const confirm = window.confirm('重置将清空草稿，确定重置吗？');
    if (confirm) {
      setResumeData(data);

      localStorage.removeItem('resume');
      localStorage.removeItem('resumeTime');
      setResumeTime(0);
    }
  }

  return (
    <React.Fragment>
      <p className={styles.lastModified}>最后更新于2021年5月</p>
      <a className={styles.downloadPdf} href="https://littleprincewdk.github.io/resume/resume.pdf">
        下载 PDF
      </a>
      <div className={styles.tips}>
        <MenuIcon className={styles.menuIcon} onClick={() => setShowMenu(!showMenu)} />
        <a href="https://github.com/littleprincewdk/resume">
          <GithubIcon className={styles.githubIcon} />
        </a>
        <br />
        <br />
        <div className={classnames(styles.tipContent, showMenu && styles.show)}>
          <b style={{ display: 'inline-block', marginBottom: 5 }}>使用说明:</b>
          <br />
          1. 可以直接点相应文字编辑，编辑后自动保存在本地
          <br />
          2. 点击右上角
          <ResetIcon />
          可重置草稿
          <br />
          3. 右键可选择【打印】保存为PDF，注意设置【网页】为"自定义"，去除空白页
          <br />
          <br />
          TODO：
          <br />
          1. feat: 更多模板选择 <br />
          2. feat: 编辑链接 <br />
          3. fix: key-value无法扩展
        </div>
      </div>
      <div className={styles.toolbar}>
        <button onClick={switchMode} title={mode === 'preview' ? '编辑' : '预览'}>
          {mode === 'preview' ? <EditIcon /> : <PreviewIcon />}
        </button>
        <button onClick={reset} title="重置">
          <ResetIcon />
        </button>
        <button onClick={save} title="保存">
          <SaveIcon />
        </button>
      </div>
      {resumeTime ? <div className={styles.resumeTime}>保存于 {resumeTime}</div> : null}
      <main
        ref={$resume}
        id="resume"
        contentEditable={mode === 'edit'}
        dangerouslySetInnerHTML={{ __html: resumeData }}
      />
      {/* <main id="resume" contentEditable>
        <Resume />
      </main> */}
      {/* <React.Suspense fallback={<div />}>
        <main id="resume" contentEditable>
          <Resume />
        </main>
      </React.Suspense> */}
      <footer className={styles.footer}>
        <a className={styles.footerLink} href="https://github.com/littleprincewdk/resume">
          页面托管在Github Pages上
        </a>
      </footer>
    </React.Fragment>
  );
}
