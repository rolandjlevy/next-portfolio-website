import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../src/components/Header';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Home" />

      <main className={styles.main}>

        <a href="/projects" className={styles.card}>
          <h2>Projects</h2>
          <p>A collection of side projects I have made in my spare time</p>
        </a>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h2>About</h2>
            <p>My background, CV, Links</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://docs.replit.com/category/hosting"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Automatically deployed on Replit by hitting the run button!
            </p>
          </a>
        </div>
      </main>
 
      <footer className={styles.footer}>
        Homemade by Roland Levy
      </footer>
    </div>
  )
}

export default Home;
