import * as React from 'react';

export interface TrackRowProps {
  title: string;
  /** Secondary line — album, year, "single". */
  meta?: string;
  /** Duration label — hidden when omitted. */
  duration?: string;
  /** Optional album-art URL — shown as a disc with the play control overlaid. */
  art?: string;
  /** Optional external link applied to the title (opens in a new tab). */
  href?: string;
  /** Playback progress 0..1 — fills the seek line. */
  progress?: number;
  playing?: boolean;
  /** Highlights the row as the current track. */
  active?: boolean;
  onToggle?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * One song in the player list — play disc, title/meta, seek line, duration.
 * @startingPoint section="Media" subtitle="Glass track list rows" viewport="700x150"
 */
export function TrackRow(props: TrackRowProps): JSX.Element;
