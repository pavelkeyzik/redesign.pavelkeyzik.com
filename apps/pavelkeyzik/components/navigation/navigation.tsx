import Link from 'next/link';
import { useRouter } from 'next/router';
import { Home, Book } from 'react-feather';
import styles from './navigation.module.scss';

export function Navigation() {
  const router = useRouter();

  return (
    <nav className={styles.navigation}>
      <Link href="/" passHref>
        <a className={router.pathname === '/' ? styles.active : ''}>
          <Home />
          Home
        </a>
      </Link>
      <Link href="/blog" passHref>
        <a className={router.pathname === '/blog' ? styles.active : ''}>
          <Book />
          Blog
        </a>
      </Link>
    </nav>
  );
}

export default Navigation;
