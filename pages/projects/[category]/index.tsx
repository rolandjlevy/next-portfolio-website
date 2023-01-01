import { useEffect, useContext } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../../styles/Home.module.css';
import Header from '../../../src/components/Header';
import { getInitialPropsData } from '../../../utils/helpers';

const Category: NextPage = ({ data, error }: any) => {
  const router = useRouter();
  const { category } = router.query;
  return (
    <div className={styles.container}>
      <Head>
        <title>{category}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header page={category} />

      <main className={styles.main}>

        <div className={styles.grid}>
          {data?.length && (
            <ul className={styles.card}>
              {data?.map((item:any) => (
                <li key={item.id}>
                  <Link 
                    href="/projects/[category]/[${item.id}]"
                    as={`/projects/${category}/${item.id}`}
                  >    
                    <a>{item.heading}</a>
                  </Link>  
                </li>
              ))}
            </ul>)}
          
          {error ? (<p> Error: {error} </p>) : null}
          
        </div>
      </main>

      <footer className={styles.footer}>
        Homemade by Roland Levy
      </footer>
    </div>
  )
}

Category.getInitialProps = async (context) => {
	const { req, res, query } = context;
	const { category } = query;
	const { host }:any = req?.headers;
	const url = `https://${host}/api/category/${category}`;
  const { data, error } = await getInitialPropsData(url);
  return { data, error };
}

export default Category;
