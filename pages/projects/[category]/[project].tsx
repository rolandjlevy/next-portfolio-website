import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../../../src/components/Header';
import styles from '../../../styles/Home.module.css';
import { PROJECTS_ENDPOINT, PROJECTS_ORIGIN } from '../../../src/helpers/constants';

const Project: NextPage = ({ projectData }: any) => {
  const [data] = projectData;
  const router = useRouter();
  const { project, category } = router.query;
  
  return (
    <div className={styles.container}>
      <Head>
        <title>{project}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header title={project} />

      <main className={styles.main}>
        
        <div className={styles.grid}>
          <pre>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </main>

      <footer className={styles.footer}>
        Homemade by Roland Levy
      </footer>
    </div>
  )
}

Project.getInitialProps = async (context) => {
  const { req, res, query } = context;
  const { category, project } = query;
  const response = await fetch(`${PROJECTS_ENDPOINT}/project-category/${category}/${project}?origin=${PROJECTS_ORIGIN}`);
  const projectData = await response.json();
  return {
    projectData
  };
}

export default Project;
