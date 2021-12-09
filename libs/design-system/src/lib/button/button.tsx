import classNames from 'classnames';
import React from 'react';
import styles from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: React.ComponentPropsWithRef<'button'>) {
  return (
    <button {...props} className={classNames(styles.button, props.className)} />
  );
}
