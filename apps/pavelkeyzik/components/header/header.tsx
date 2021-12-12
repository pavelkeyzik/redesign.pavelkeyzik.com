import Link from 'next/link';
import { Button } from '@pavelkeyzik/design-system';
import { Twitter } from 'react-feather';
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
        <a href="https://twitter.com/pavelkeyzik">
          <Button>
            <Twitter />
            Follow Me
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Header;
