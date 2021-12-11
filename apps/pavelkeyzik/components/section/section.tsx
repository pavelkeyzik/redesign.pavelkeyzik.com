import { PropsWithChildren } from 'react';
import styles from './section.module.scss';

/* eslint-disable-next-line */
export interface SectionProps {
  config: {
    title: string;
  };
}

export function Section(props: PropsWithChildren<SectionProps>) {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionContainerTitle}>{props.config.title}</h2>
      <div>{props.children}</div>
    </section>
  );
}

export default Section;
