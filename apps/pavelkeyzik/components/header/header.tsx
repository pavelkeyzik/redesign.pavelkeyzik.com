import Link from 'next/link';
import { Button } from '@pavelkeyzik/design-system';
import Navigation from '../navigation/navigation';
import styles from './header.module.scss';

export function Header() {
  return (
    <div className={styles.header}>
      <Link href="/" passHref>
        <a className={styles.logo}>Pavel Keyzik</a>
      </Link>
      <div className={styles.headerContent}>
        <Navigation />
        <Button>Follow Me</Button>
      </div>
    </div>
  );
}

export default Header;
