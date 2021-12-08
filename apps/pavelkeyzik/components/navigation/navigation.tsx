import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './navigation.module.scss';

export function Navigation() {
  const router = useRouter();

  return (
    <nav className={styles.navigation}>
      <Link href="/" passHref>
        <a className={router.pathname === '/' ? styles.active : ''}>Home</a>
      </Link>
      <Link href="/blog" passHref>
        <a className={router.pathname === '/blog' ? styles.active : ''}>Blog</a>
      </Link>
    </nav>
  );
}

export default Navigation;
