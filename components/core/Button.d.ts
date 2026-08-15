import * as React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  /** ghost = hairline glass (default), glow = filled bone halo, text = bare link */
  variant?: 'ghost' | 'glow' | 'text';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Primary action control. Uppercase, wide-tracked Inter on a pill.
 * @startingPoint section="Core" subtitle="Glass & glow pill buttons" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
