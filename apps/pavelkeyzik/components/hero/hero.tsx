import { Button } from '@pavelkeyzik/design-system';
import styles from './hero.module.scss';

export function Hero() {
  return (
    <header className={styles.heroContainer}>
      <h1>Hi! My name&apos;s Pavel Keyzik</h1>
      <p>I&apos;m a Front-end Engineer and I really love to work with React</p>
      <Button className="mt-6">Wanna see my last works?</Button>
    </header>
  );
}

export default Hero;
