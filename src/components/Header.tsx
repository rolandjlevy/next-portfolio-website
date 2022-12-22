import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Header({ page }) {
  const { query, route, asPath } = useRouter();
  let breadcrumbsNav:any = []
  if (asPath.includes('/projects')) {
    breadcrumbsNav = ['projects', ...Object.values(query)];
  }
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        {breadcrumbsNav?.length ? 
         (<ul>
          {breadcrumbsNav.map((item:any, index:number, arr:any) => {
           const del = index < arr.length-1 ? ' > ' : '';
           return <li key={item}>{item}{del}</li>
         })}
        </ul>) : null}
      </nav>
      <h1 className={styles.title}>
        {page}
      </h1>
    </header>
  )
}