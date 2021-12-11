import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import styles from './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps {}

export function Card(props: React.ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={classNames(styles.cardContainer, props.className)}
    >
      {props.children}
    </div>
  );
}

export function CardTitle(props: PropsWithChildren<unknown>) {
  return <h3 className={styles.cardTitle}>{props.children}</h3>;
}

export function CardContent(props: PropsWithChildren<unknown>) {
  return <div className={styles.cardContent}>{props.children}</div>;
}

Card.Title = CardTitle;
Card.Content = CardContent;

export default Card;
