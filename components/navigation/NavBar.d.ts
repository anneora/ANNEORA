import * as React from 'react';

export interface NavBarProps {
  /** Wordmark text (Cinzel). Default 'ANNEORA'. */
  brand?: string;
  /** Link labels — strings, rendered uppercase wide-tracked. */
  links?: string[];
  /** Currently active link label. */
  active?: string;
  onNavigate?: (label: string) => void;
  /** Optional handler for the visually unchanged wordmark. */
  onBrandClick?: () => void;
  /** Links shown in the compact mobile menu. */
  menuLinks?: string[];
  /** Optional node pinned to the far right (e.g. a Button). */
  right?: React.ReactNode;
  /** Frost + hairline border once the page has scrolled. */
  scrolled?: boolean;
  style?: React.CSSProperties;
}

/**
 * Sparse transparent top bar — Cinzel wordmark left, tracked links right.
 * @startingPoint section="Navigation" subtitle="Transparent → frosted top bar" viewport="900x90"
 */
export function NavBar(props: NavBarProps): JSX.Element;
