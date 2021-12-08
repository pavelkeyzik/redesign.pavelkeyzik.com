import { PropsWithChildren } from 'react';
import styles from './container.module.scss';

export function Container(props: PropsWithChildren<unknown>) {
  return <div className={styles.container}>{props.children}</div>;
}

export default Container;
