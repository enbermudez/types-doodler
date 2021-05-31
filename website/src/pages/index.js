import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

const features = [
  {
    title: 'Easy to use',
    content: 'You just need to install types-doodler on your project to start using it.'
  },
  {
    title: 'Fully tested',
    content: 'Every single util has been tested to prevent weird behaviours and unexpected results.'
  },
  {
    title: 'Documented',
    content: 'We provide a documentation with usage examples for you to read at any time.'
  }
];

const HomepageHeader = () => {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
};

const Home = () => (
  <Layout
    permalink={'/'}
    description="Utility library filled with non-common (and some random) helpers."
  >
    <HomepageHeader />

    <main>
      {features && features.length && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, content }, idx) => (
                <div
                  key={idx}
                  className={clsx('col col--4')}
                >
                  <h2>{title}</h2>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  </Layout>
);

export default Home;
