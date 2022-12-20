import styles from '../../styles/Home.module.css';

export default function Header({ title }) {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <h1 className={styles.title}>
        {title}
      </h1>
    </header>
  )
}