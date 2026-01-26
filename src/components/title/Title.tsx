'use client';

import styles from './title.module.css';


interface TitleType {
  className?: string;
  children: React.ReactNode;
}

export function Title({ className, children, ...props }: TitleType) {
  return (
    <h2 className={`${styles.title} ${className}`} {...props}> {children}</h2>
  );
}
export function TitleAccent({ className, children, ...props }: TitleType) {
  return (
    <span className={`${styles.titleAccent} ${className}`} {...props}>
      {children}
    </span>
  );
}

export function TagTitle({ className, children, ...props }: TitleType) {
  return (
    <span className={`${styles.tagline} ${className}`} {...props}>
      {children}
    </span>

  );
}
