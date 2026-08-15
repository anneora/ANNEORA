import * as React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  /** outline (default), soft fill, or glow */
  variant?: 'outline' | 'soft' | 'glow';
  style?: React.CSSProperties;
}

/** Small uppercase overline token — year, genre, "new". */
export function Badge(props: BadgeProps): JSX.Element;
