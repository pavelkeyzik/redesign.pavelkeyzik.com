import { Button } from '@pavelkeyzik/design-system';
import Navigation from '../navigation/navigation';
import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
      <Button>Follow me</Button>
    </header>
  );
}

export default Header;
