import * as React from 'react';

export interface InputProps {
  /** line = hairline underline (default), capsule = glass pill */
  variant?: 'line' | 'capsule';
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Optional overline label. */
  label?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Quiet text field — underline or glass-capsule. */
export function Input(props: InputProps): JSX.Element;
