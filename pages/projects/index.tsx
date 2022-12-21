import type { NextPage, NextApiRequest, NextApiResponse } from 'next';
import type { AppProps, AppContext } from 'next/app';
import App from 'next/app';
import Head from 'next/head';
import Header from '../../src/components/Header';
import styles from '../../styles/Home.module.css';

const Projects: NextPage = ({ projectData }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header page="Projects" />

      <main className={styles.main}>

        <div className={styles.grid}>
          {projectData?.length ?
            (<ul>
              {projectData.map((item: String, index: Number) => {
                return <li><a href={`/projects/${item}`}>{item}</a></li>
              })}
            </ul>)
            :
            <div>Loading Project Categories...</div>}
        </div>
      </main>

      <footer className={styles.footer}>
        Homemade by Roland Levy
      </footer>
    </div>
  )
}

Projects.getInitialProps = async (context) => {
  try {
    const { req, res, asPath, pathname } = context;
    const { host }:any = req?.headers;
    const url = `https://${host}/api/projects`;
    const response = await fetch(url);
    const projectData = await response.json();
    return {
      projectData
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}

export default Projects;
