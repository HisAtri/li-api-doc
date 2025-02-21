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
            <h2>支持我</h2>
            <p>在<a href="https://github.com/hisatri/lrcapi">GitHub</a>上给我一个Star</p>
          </div>
          
          <div className={styles.section}>
            <h2>这是什么</h2>
            <p>一个API接口聚合平台</p>
          </div>
          
          <div className={styles.section}>
            <h2>联系方式</h2>
            <p>Telegram: <a href="https://t.me/MatsuzakaSatona">@MatsuzakaSatona</a></p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
