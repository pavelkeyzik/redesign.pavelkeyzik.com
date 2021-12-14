import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import styles from './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps {}

export function Card(props: React.ComponentProps<'a'>) {
  return (
    <a {...props} className={classNames(styles.cardContainer, props.className)}>
      {props.children}
    </a>
  );
}

export function CardTitle(props: PropsWithChildren<unknown>) {
  return <h3 className={styles.cardTitle}>{props.children}</h3>;
}

export function CardContent(props: PropsWithChildren<unknown>) {
  return <div className={styles.cardContent}>{props.children}</div>;
}

type CardImageProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

export function CardImage(props: CardImageProps) {
  return (
    <picture className={styles.cardImageContainer}>
      <Image
        src={props.src}
        alt={props.alt}
        layout="responsive"
        objectFit="cover"
        width={props.width || 700}
        height={props.height || 500}
        className={styles.cardImage}
      />
    </picture>
  );
}

Card.Title = CardTitle;
Card.Content = CardContent;
Card.Image = CardImage;

export default Card;
