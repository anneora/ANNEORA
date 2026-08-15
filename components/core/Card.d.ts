import * as React from 'react';

export interface CardProps {
  children: React.ReactNode;
  /** CSS padding shorthand. Default '1rem'. */
  padding?: string;
  /** Add a faint outer + inner halo. */
  glow?: boolean;
  style?: React.CSSProperties;
}

/** Frosted-glass surface — the system's universal container. */
export function Card(props: CardProps): JSX.Element;
