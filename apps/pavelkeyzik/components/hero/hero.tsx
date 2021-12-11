import { Button } from '@pavelkeyzik/design-system';
import { ReactComponent as ReactIcon } from '../../assets/icons/react.svg';
import { ReactComponent as CssIcon } from '../../assets/icons/css.svg';
import { ReactComponent as FigmaIcon } from '../../assets/icons/figma.svg';
import { ReactComponent as JavaScriptIcon } from '../../assets/icons/javascript.svg';
import { ReactComponent as JestIcon } from '../../assets/icons/jest.svg';
import { ReactComponent as NextIcon } from '../../assets/icons/next.svg';
import { ReactComponent as SassIcon } from '../../assets/icons/sass.svg';
import styles from './hero.module.scss';

export function Hero() {
  return (
    <div className={styles.heroMainContainer}>
      <div className={styles.technologiesGrid}>
        <div className={styles.technologiesGridItem}>
          <ReactIcon />
        </div>
        <div className={styles.technologiesGridItem}>
          <CssIcon />
        </div>
        <div className={styles.technologiesGridItem}>
          <FigmaIcon />
        </div>
        <div className={styles.technologiesGridItem}>
          <JavaScriptIcon />
        </div>
        <div className={styles.technologiesGridItem}>
          <JestIcon />
        </div>
        <div className={styles.technologiesGridItem}>
          <NextIcon />
        </div>
        <div className={styles.technologiesGridItem}>
          <SassIcon />
        </div>
      </div>
      <header className={styles.heroContainer}>
        <h1>Hi! My name&apos;s Pavel Keyzik</h1>
        <p>
          I&apos;m a Front-end Engineer and I really love to work with React
        </p>
        <Button className="mt-6">Wanna see my last works?</Button>
      </header>
    </div>
  );
}

export default Hero;
