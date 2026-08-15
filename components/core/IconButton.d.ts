import * as React from 'react';

export interface IconButtonProps {
  /** A single icon node (e.g. an inline SVG or Lucide glyph). */
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'ghost' | 'glow';
  /** Accessible label, required since the button is icon-only. */
  label: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/** Circular glass control holding a single glyph (play, social, menu). */
export function IconButton(props: IconButtonProps): JSX.Element;
