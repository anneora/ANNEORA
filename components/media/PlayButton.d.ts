import * as React from 'react';

export interface PlayButtonProps {
  /** Toggles the glyph between play triangle and pause bars. */
  playing?: boolean;
  /** Diameter in px. Default 56. */
  size?: number;
  onToggle?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  style?: React.CSSProperties;
}

/** Circular transport control — play/pause with a haloed playing state. */
export function PlayButton(props: PlayButtonProps): JSX.Element;
