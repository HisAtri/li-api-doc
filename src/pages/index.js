import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <img 
            src="/img/logo.png" 
            alt="Avatar" 
            className={styles.avatar}
          />
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={styles.subtitle}>Where the dream begins</p>
          
          <Link
            className={styles.button}
            to="/docs/intro">
            接入文档 →
          </Link>
        </div>

        <div className={styles.sections}>
          <div className={styles.section}>
            <h2>Support Me</h2>
            <p>Give me a star at <a href="https://github.com/username">GitHub</a></p>
          </div>
          
          <div className={styles.section}>
            <h2>About Me</h2>
            <p>now working at bytedance</p>
          </div>
          
          <div className={styles.section}>
            <h2>Contact Me</h2>
            <p>Wechat: *</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
