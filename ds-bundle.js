/* @ds-bundle: {"format":3,"namespace":"AnneoraDesignSystem_7f3db2","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"PlayButton","sourcePath":"components/media/PlayButton.jsx"},{"name":"TrackRow","sourcePath":"components/media/TrackRow.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"02589c5df348","components/core/Button.jsx":"5d4b6fda1a62","components/core/Card.jsx":"6db94834a9fd","components/core/IconButton.jsx":"ce8f9fe7fb1d","components/core/Input.jsx":"e09c53f475ca","components/media/PlayButton.jsx":"c6bfc54d0280","components/media/TrackRow.jsx":"12e8b5a0c5bb","components/navigation/NavBar.jsx":"fe25c8568ad9","ui_kits/website/AboutSection.jsx":"285abb59e230","ui_kits/website/AngelDissolve.jsx":"683fc52f0453","ui_kits/website/DropImage.jsx":"7f57dac4b080","ui_kits/website/Footer.jsx":"bea496b55206","ui_kits/website/Gallery.jsx":"1a158a195a86","ui_kits/website/Hero.jsx":"9f3dcb17491b","ui_kits/website/LiveSection.jsx":"fe185d3cce43","ui_kits/website/MusicSection.jsx":"8b578bd1649b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AnneoraDesignSystem_7f3db2 = window.AnneoraDesignSystem_7f3db2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Anneora Badge — a small overline token: a year, a tag, "new",
 * a genre. Uppercase, wide-tracked, hairline or faint-fill.
 */
function Badge({
  children,
  variant = 'outline',
  style = {},
  ...rest
}) {
  const variants = {
    outline: {
      background: 'transparent',
      border: '1px solid rgba(255,255,255,0.16)',
      color: 'var(--bone-200, #c8c8c8)'
    },
    soft: {
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid transparent',
      color: 'var(--bone-100, #e5e5e5)'
    },
    glow: {
      background: 'transparent',
      border: '1px solid rgba(255,255,255,0.4)',
      color: 'var(--bone-50, #f5f5f5)',
      boxShadow: '0 0 14px rgba(255,255,255,0.1)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '5px 12px',
      borderRadius: '999px',
      fontFamily: "'Inter', system-ui, sans-serif",
      fontWeight: 400,
      fontSize: '0.65rem',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Anneora Button — glass in the dark.
 * Variants: ghost (default, hairline outline), glow (filled bone with halo),
 * text (bare link). Quiet by default; light leaks on hover.
 */
function Button({
  children,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 18px',
      fontSize: '0.75rem'
    },
    md: {
      padding: '12px 28px',
      fontSize: '0.8rem'
    },
    lg: {
      padding: '16px 40px',
      fontSize: '0.9rem'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontFamily: "'Inter', system-ui, sans-serif",
    fontWeight: 400,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    borderRadius: '999px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.35 : 1,
    transition: 'all 320ms cubic-bezier(0.22,0.61,0.36,1)',
    whiteSpace: 'nowrap',
    ...sizes[size]
  };
  const variants = {
    ghost: {
      background: 'rgba(255,255,255,0.02)',
      color: 'var(--bone-100, #e5e5e5)',
      border: '1px solid rgba(255,255,255,0.18)',
      backdropFilter: 'blur(10px)'
    },
    glow: {
      background: 'var(--bone-50, #f5f5f5)',
      color: '#0a0a0a',
      border: '1px solid rgba(255,255,255,0.6)',
      boxShadow: '0 0 24px rgba(255,255,255,0.16)'
    },
    text: {
      background: 'transparent',
      color: 'var(--bone-300, #9a9a9a)',
      border: '1px solid transparent',
      padding: '8px 4px'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverFx = !disabled && hover ? variant === 'glow' ? {
    boxShadow: '0 0 36px rgba(255,255,255,0.35)',
    transform: 'translateY(-1px)'
  } : variant === 'text' ? {
    color: 'var(--bone-50, #f5f5f5)'
  } : {
    borderColor: 'rgba(255,255,255,0.45)',
    boxShadow: '0 0 20px rgba(255,255,255,0.08)',
    color: '#f5f5f5'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverFx,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Anneora Card — frosted glass panel floating in the void.
 * Hairline veil border, barely-there fill, 10px radius, soft blur.
 */
function Card({
  children,
  padding = '1rem',
  glow = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '10px',
      backdropFilter: 'blur(10px)',
      padding,
      color: 'var(--bone-100, #e5e5e5)',
      boxShadow: glow ? '0 0 32px rgba(255,255,255,0.06), inset 0 0 24px rgba(255,255,255,0.03)' : 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Anneora IconButton — a circular glass control for a single glyph
 * (play, pause, social, menu). Pass an SVG/icon node as children.
 */
function IconButton({
  children,
  size = 'md',
  variant = 'ghost',
  label,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 36,
    md: 44,
    lg: 56
  };
  const d = dims[size] || 44;
  const [hover, setHover] = React.useState(false);
  const variants = {
    ghost: {
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.12)',
      color: 'var(--bone-100, #e5e5e5)'
    },
    glow: {
      background: 'var(--bone-50, #f5f5f5)',
      border: '1px solid rgba(255,255,255,0.6)',
      color: '#0a0a0a',
      boxShadow: '0 0 22px rgba(255,255,255,0.18)'
    }
  };
  const hoverFx = !disabled && hover ? variant === 'glow' ? {
    boxShadow: '0 0 34px rgba(255,255,255,0.4)'
  } : {
    borderColor: 'rgba(255,255,255,0.4)',
    color: '#f5f5f5',
    boxShadow: '0 0 18px rgba(255,255,255,0.08)'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.35 : 1,
      backdropFilter: 'blur(10px)',
      transition: 'all 320ms cubic-bezier(0.22,0.61,0.36,1)',
      padding: 0,
      ...variants[variant],
      ...hoverFx,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Anneora Input — a quiet field that sits on a hairline underline or
 * inside a glass capsule. Light, wide-tracked, calm.
 */
function Input({
  variant = 'line',
  type = 'text',
  placeholder = '',
  value,
  onChange,
  label,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const shared = {
    width: '100%',
    fontFamily: "'Inter', system-ui, sans-serif",
    fontWeight: 300,
    fontSize: '0.95rem',
    letterSpacing: '0.02em',
    color: 'var(--bone-50, #f5f5f5)',
    background: variant === 'capsule' ? 'rgba(255,255,255,0.04)' : 'transparent',
    outline: 'none',
    transition: 'all 320ms cubic-bezier(0.22,0.61,0.36,1)',
    opacity: disabled ? 0.4 : 1
  };
  const variants = {
    line: {
      border: 'none',
      borderBottom: `1px solid ${focus ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.14)'}`,
      borderRadius: 0,
      padding: '10px 2px'
    },
    capsule: {
      border: `1px solid ${focus ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.1)'}`,
      borderRadius: '999px',
      padding: '12px 20px',
      backdropFilter: 'blur(10px)',
      boxShadow: focus ? '0 0 18px rgba(255,255,255,0.07)' : 'none'
    }
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: '8px',
      fontSize: '0.7rem',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--bone-400, #6b6b6b)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...shared,
      ...variants[variant]
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/media/PlayButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Anneora PlayButton — the transport control. A circular glass disc
 * that toggles between a play triangle and pause bars, with a soft
 * pulsing halo while playing.
 */
function PlayButton({
  playing = false,
  size = 56,
  onToggle,
  label,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const glyph = size * 0.34;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label || (playing ? 'Pause' : 'Play'),
    "aria-pressed": playing,
    onClick: onToggle,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      padding: 0,
      background: playing ? 'var(--bone-50, #f5f5f5)' : 'rgba(255,255,255,0.04)',
      color: playing ? '#0a0a0a' : 'var(--bone-50, #f5f5f5)',
      border: `1px solid ${playing ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.2)'}`,
      backdropFilter: 'blur(10px)',
      boxShadow: playing ? '0 0 34px rgba(255,255,255,0.4)' : hover ? '0 0 22px rgba(255,255,255,0.12)' : 'none',
      transition: 'all 320ms cubic-bezier(0.22,0.61,0.36,1)',
      ...style
    }
  }, rest), playing ? /*#__PURE__*/React.createElement("svg", {
    width: glyph,
    height: glyph,
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "3",
    width: "5",
    height: "18",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "5",
    height: "18",
    rx: "1"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: glyph,
    height: glyph,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    style: {
      marginLeft: size * 0.04
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 4l14 8-14 8z"
  })));
}
Object.assign(__ds_scope, { PlayButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/PlayButton.jsx", error: String((e && e.message) || e) }); }

// components/media/TrackRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Anneora TrackRow — a single song in the list. Glass row holding a
 * play disc (or album-art disc), title + meta, a slim seek line, and
 * duration. Active rows brighten and leak a faint halo.
 */
function TrackRow({
  title,
  meta,
  duration,
  art,
  // optional album-art URL — PlayButton overlays it
  href,
  // optional external link (e.g. Spotify) on the title
  progress = 0,
  // 0..1
  playing = false,
  active = false,
  onToggle,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lit = active || hover;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '18px',
      padding: '14px 18px',
      borderRadius: '10px',
      background: lit ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
      border: `1px solid ${lit ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.07)'}`,
      backdropFilter: 'blur(10px)',
      boxShadow: active ? 'inset 0 0 24px rgba(255,255,255,0.03)' : 'none',
      transition: 'all 320ms cubic-bezier(0.22,0.61,0.36,1)',
      ...style
    }
  }, rest), art ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 48,
      height: 48,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: art,
    alt: "",
    style: {
      width: 48,
      height: 48,
      borderRadius: 8,
      objectFit: 'cover',
      border: '1px solid rgba(255,255,255,0.12)',
      filter: playing ? 'none' : 'grayscale(0.3) brightness(0.85)',
      transition: 'filter 320ms'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 8,
      background: lit ? 'rgba(0,0,0,0.45)' : 'rgba(0,0,0,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background 320ms'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PlayButton, {
    playing: playing,
    size: 34,
    onToggle: onToggle
  }))) : /*#__PURE__*/React.createElement(__ds_scope.PlayButton, {
    playing: playing,
    size: 42,
    onToggle: onToggle
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement(href ? 'a' : 'div', {
    ...(href ? {
      href,
      target: '_blank',
      rel: 'noreferrer'
    } : {}),
    style: {
      display: 'inline-block',
      textDecoration: 'none',
      fontFamily: "'Inter', system-ui, sans-serif",
      fontWeight: 400,
      fontSize: '0.95rem',
      letterSpacing: '0.06em',
      color: active ? 'var(--bone-50, #f5f5f5)' : 'var(--bone-100, #e5e5e5)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%'
    }
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '5px',
      fontSize: '0.7rem',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--bone-400, #6b6b6b)'
    }
  }, meta), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '10px',
      height: '2px',
      borderRadius: '2px',
      background: 'rgba(255,255,255,0.08)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${Math.max(0, Math.min(1, progress)) * 100}%`,
      height: '100%',
      background: 'rgba(255,255,255,0.55)',
      boxShadow: '0 0 8px rgba(255,255,255,0.4)',
      transition: 'width 320ms linear'
    }
  }))), duration && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontWeight: 300,
      fontSize: '0.78rem',
      letterSpacing: '0.08em',
      color: 'var(--bone-300, #9a9a9a)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, duration));
}
Object.assign(__ds_scope, { TrackRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/TrackRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Anneora NavBar — a sparse, transparent top bar. Wordmark left,
 * wide-tracked links right. Goes frosted on scroll (pass scrolled).
 */
function NavBar({
  brand = 'ANNEORA',
  links = [],
  active,
  onNavigate,
  onBrandClick,
  right = null,
  scrolled = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 40px',
      background: scrolled ? 'rgba(10,10,10,0.6)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.07)' : 'transparent'}`,
      transition: 'all 320ms cubic-bezier(0.22,0.61,0.36,1)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onBrandClick,
    "aria-label": "Back to top",
    style: {
      padding: 0,
      border: 'none',
      background: 'transparent',
      cursor: onBrandClick ? 'pointer' : 'default',
      fontFamily: "'Cinzel', serif",
      fontWeight: 500,
      fontSize: '1.05rem',
      letterSpacing: '0.25em',
      color: 'var(--bone-50, #f5f5f5)',
      textShadow: '0 0 20px rgba(255,255,255,0.18)'
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '32px'
    }
  }, links.map(l => {
    const key = typeof l === 'string' ? l : l.label;
    const isActive = active === key;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      type: "button",
      onClick: () => onNavigate && onNavigate(key),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '6px 0',
        fontFamily: "'Inter', system-ui, sans-serif",
        fontWeight: 400,
        fontSize: '0.72rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: isActive ? 'var(--bone-50, #f5f5f5)' : 'var(--bone-400, #6b6b6b)',
        borderBottom: `1px solid ${isActive ? 'rgba(255,255,255,0.5)' : 'transparent'}`,
        transition: 'color 320ms, border-color 320ms'
      },
      onMouseEnter: e => {
        if (!isActive) e.currentTarget.style.color = 'var(--bone-100, #e5e5e5)';
      },
      onMouseLeave: e => {
        if (!isActive) e.currentTarget.style.color = 'var(--bone-400, #6b6b6b)';
      }
    }, key);
  }), right));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutSection.jsx
try { (() => {
// Anneora website — About section. Quiet centered prose, low contrast,
// flanked by hairline dividers. A glass portrait placeholder sits above.
const {
  Badge
} = window.AnneoraDesignSystem_7f3db2;
function Divider() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 60,
      background: 'linear-gradient(var(--veil-12), transparent)',
      margin: '0 auto'
    }
  });
}
function AboutSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      padding: '90px 24px 70px',
      maxWidth: 600,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      margin: '40px 0 26px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://i.scdn.co/image/ab6761610000e5eb67568745a8d4d5348827036d",
    alt: "Anneora",
    style: {
      width: 132,
      height: 132,
      borderRadius: '50%',
      objectFit: 'cover',
      border: '1px solid var(--veil-12)',
      filter: 'grayscale(0.4) contrast(1.05) brightness(0.9)',
      boxShadow: '0 0 40px rgba(255,255,255,0.08)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '30px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, "The artist")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "'Inter', sans-serif",
      fontWeight: 300,
      fontSize: '1.25rem',
      lineHeight: 1.8,
      letterSpacing: '0.02em',
      color: 'var(--bone-100)',
      textWrap: 'pretty'
    }
  }, "I'm a singer / songwriter creating dark, atmospheric soundscapes \u2014 music built from negative space, breath, and reverb. Each track is a room you walk into alone."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '28px',
      fontFamily: "'Inter', sans-serif",
      fontWeight: 300,
      fontSize: '0.95rem',
      lineHeight: 1.7,
      color: 'var(--bone-300)',
      textWrap: 'pretty'
    }
  }, "Recorded in the quiet hours. Released into the void, for whoever is listening on the other side."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Divider, null)));
}
window.AboutSection = AboutSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AngelDissolve.jsx
try { (() => {
// Anneora — AngelDissolve. A scroll-pinned canvas: an angel image that
// disintegrates into drifting ash as you scroll through the section.
// Pixel-sampled particle field with depth parallax (reads volumetric / 3D).
// Drop your own angel render in; it persists in localStorage.
//
// Mechanics: the outer wrapper is tall; an inner sticky stage holds the
// canvas. Scroll progress across the wrapper (0..1) drives the dissolve.

const ANGEL_KEY = 'anneora:img:angel';
function smoothstep(a, b, x) {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}
function AngelDissolve() {
  const wrapRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const stageRef = React.useRef(null);
  const [hasAngel, setHasAngel] = React.useState(false);
  const [over, setOver] = React.useState(false);
  const fileRef = React.useRef(null);

  // mutable engine state (not React state — avoids re-renders per frame)
  const eng = React.useRef({
    particles: [],
    imgW: 0,
    imgH: 0,
    bitmap: null,
    progress: 0,
    target: 0,
    mouse: {
      x: 0,
      y: 0
    },
    raf: 0,
    inView: true
  });

  // ---- build particle field from an image ----------------------------
  const buildField = img => {
    const e = eng.current;
    const stage = stageRef.current;
    if (!stage) return;
    const vh = stage.clientHeight,
      vw = stage.clientWidth;
    // fill nearly the full stage height, bottom-anchored. keep aspect.
    const maxH = vh * 0.96,
      maxW = vw * 0.8;
    let dw = img.width,
      dh = img.height;
    const s = Math.min(maxW / dw, maxH / dh);
    dw = Math.round(dw * s);
    dh = Math.round(dh * s);

    // offscreen sample
    const oc = document.createElement('canvas');
    oc.width = dw;
    oc.height = dh;
    const octx = oc.getContext('2d');
    octx.drawImage(img, 0, 0, dw, dh);
    const data = octx.getImageData(0, 0, dw, dh).data;
    const STEP = Math.max(3, Math.round(dw / 150)); // ~150 cols
    const parts = [];
    for (let y = 0; y < dh; y += STEP) {
      for (let x = 0; x < dw; x += STEP) {
        const i = (y * dw + x) * 4;
        const a = data[i + 3];
        if (a < 40) continue;
        const r = data[i],
          g = data[i + 1],
          b = data[i + 2];
        const lum = (r + g + b) / 3;
        if (lum < 16) continue; // drop near-black bg
        parts.push({
          x,
          y,
          r,
          g,
          b,
          a: a / 255,
          depth: Math.random(),
          // 0..1 -> parallax/size
          ang: -Math.PI / 2 + (Math.random() - 0.5) * 1.6,
          // mostly upward
          spd: 0.6 + Math.random() * 0.9,
          t0: (1 - y / dh) * 0.45 + Math.random() * 0.25,
          // lower dissolves first
          wob: Math.random() * Math.PI * 2
        });
      }
    }
    e.particles = parts;
    e.imgW = dw;
    e.imgH = dh;
    e.bitmap = img;
  };
  const loadImage = dataURL => {
    const img = new Image();
    img.onload = () => {
      buildField(img);
      setHasAngel(true);
    };
    img.src = dataURL;
  };
  const handleFile = file => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        localStorage.setItem(ANGEL_KEY, reader.result);
      } catch (err) {}
      loadImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // ---- mount: restore + listeners + render loop ----------------------
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(ANGEL_KEY);
      if (saved) loadImage(saved);
    } catch (e) {}
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
    const resize = () => {
      const stage = stageRef.current;
      if (!stage) return;
      canvas.width = stage.clientWidth * dpr;
      canvas.height = stage.clientHeight * dpr;
      canvas.style.width = stage.clientWidth + 'px';
      canvas.style.height = stage.clientHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (eng.current.bitmap) buildField(eng.current.bitmap);
    };
    resize();
    window.addEventListener('resize', resize);
    const onScroll = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const r = wrap.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = total > 0 ? Math.max(0, Math.min(1, -r.top / total)) : 0;
      eng.current.target = p;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    const onMove = ev => {
      const stage = stageRef.current;
      if (!stage) return;
      const r = stage.getBoundingClientRect();
      eng.current.mouse.x = (ev.clientX - r.left) / r.width - 0.5;
      eng.current.mouse.y = (ev.clientY - r.top) / r.height - 0.5;
    };
    window.addEventListener('mousemove', onMove);
    const io = new IntersectionObserver(entries => {
      eng.current.inView = entries[0].isIntersecting;
    }, {
      threshold: 0
    });
    if (stageRef.current) io.observe(stageRef.current);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let time = 0;
    const frame = () => {
      const e = eng.current;
      const stage = stageRef.current;
      eng.current.raf = requestAnimationFrame(frame);
      if (!stage || !e.inView) return;

      // ease progress toward scroll target
      e.progress += (e.target - e.progress) * 0.12;
      const p = e.progress;
      time += 0.016;
      const W = stage.clientWidth,
        H = stage.clientHeight;
      ctx.clearRect(0, 0, W, H);
      if (!e.particles.length) return;
      const ox = (W - e.imgW) / 2;
      const oy = H - e.imgH; // bottom-anchored: image bottom sits on the viewport bottom
      const floatY = reduce ? 0 : Math.sin(time * 0.8) * 6;
      const mx = reduce ? 0 : e.mouse.x,
        my = reduce ? 0 : e.mouse.y;

      // crisp base image early, fading out as it dissolves
      const imgAlpha = 1 - smoothstep(0.04, 0.42, p);
      if (imgAlpha > 0.01 && e.bitmap) {
        ctx.save();
        ctx.globalAlpha = imgAlpha;
        ctx.filter = 'grayscale(0.2) contrast(1.05) brightness(0.95)';
        ctx.drawImage(e.bitmap, ox, oy + floatY, e.imgW, e.imgH);
        ctx.restore();
      }

      // particle ash
      const rise = H * 0.9;
      for (let k = 0; k < e.particles.length; k++) {
        const q = e.particles[k];
        const lp = smoothstep(q.t0, 1, p); // per-particle local progress
        const appear = smoothstep(0.0, 0.18, p);
        const pa = q.a * appear * (1 - smoothstep(0.7, 1, lp));
        if (pa <= 0.01) continue;
        const dist = lp * rise * q.spd;
        const turb = reduce ? 0 : Math.sin(time * 1.3 + q.wob) * 16 * lp;
        const par = 0.4 + q.depth; // depth parallax factor
        const px = ox + q.x + Math.cos(q.ang) * dist + turb + mx * 28 * par;
        const py = oy + floatY + q.y + Math.sin(q.ang) * dist + my * 18 * par;
        const size = (1.4 + q.depth * 1.8) * (1 - lp * 0.5);
        const bright = 0.7 + q.depth * 0.5;
        ctx.globalAlpha = pa;
        ctx.fillStyle = `rgb(${Math.min(255, q.r * bright)},${Math.min(255, q.g * bright)},${Math.min(255, q.b * bright)})`;
        ctx.fillRect(px, py, size, size);
      }
      ctx.globalAlpha = 1;
    };
    eng.current.raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(eng.current.raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
      io.disconnect();
    };
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    ref: wrapRef,
    style: {
      position: 'relative',
      height: '280vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: stageRef,
    style: {
      position: 'sticky',
      top: 0,
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    style: {
      position: 'absolute',
      inset: 0
    }
  }), !hasAngel && /*#__PURE__*/React.createElement("div", {
    onDragOver: e => {
      e.preventDefault();
      setOver(true);
    },
    onDragLeave: () => setOver(false),
    onDrop: e => {
      e.preventDefault();
      setOver(false);
      handleFile(e.dataTransfer.files[0]);
    },
    onClick: () => fileRef.current && fileRef.current.click(),
    style: {
      width: 280,
      height: 360,
      borderRadius: 12,
      cursor: 'pointer',
      border: `1px dashed ${over ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.18)'}`,
      background: 'rgba(255,255,255,0.02)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
      textAlign: 'center',
      padding: 24,
      zIndex: 2,
      boxShadow: over ? '0 0 30px rgba(255,255,255,0.12)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "rgba(255,255,255,0.45)",
    strokeWidth: "1.3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v6M12 21v-6M5 7c2 1 3 3 3 5M19 7c-2 1-3 3-3 5M3 12h4M17 12h4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2.4"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.66rem',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--bone-200)',
      lineHeight: 1.9
    }
  }, "Drop your angel", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bone-400)'
    }
  }, "it disintegrates as you scroll"))), hasAngel && /*#__PURE__*/React.createElement("button", {
    onClick: () => fileRef.current && fileRef.current.click(),
    style: {
      position: 'absolute',
      bottom: '6vh',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 2,
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 999,
      padding: '8px 18px',
      cursor: 'pointer',
      backdropFilter: 'blur(10px)',
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.6rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--bone-300)'
    }
  }, "Replace angel"), /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: "image/*",
    style: {
      display: 'none'
    },
    onChange: e => handleFile(e.target.files[0])
  })));
}
window.AngelDissolve = AngelDissolve;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AngelDissolve.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DropImage.jsx
try { (() => {
// Anneora — DropImage. A self-persisting image drop target (localStorage,
// works from any folder). Drag an image on, or click to browse. Calls
// onImage(dataURL) whenever the image changes (incl. on restore).
function DropImage({
  id,
  placeholder = 'Drop image',
  caption,
  fit = 'cover',
  onImage,
  style = {}
}) {
  const KEY = 'anneora:img:' + id;
  const [src, setSrc] = React.useState(null);
  const [over, setOver] = React.useState(false);
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) {
        setSrc(saved);
        onImage && onImage(saved);
      }
    } catch (e) {}
  }, []);
  const load = file => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      const data = reader.result;
      setSrc(data);
      try {
        localStorage.setItem(KEY, data);
      } catch (e) {}
      onImage && onImage(data);
    };
    reader.readAsDataURL(file);
  };
  return /*#__PURE__*/React.createElement("div", {
    onDragOver: e => {
      e.preventDefault();
      setOver(true);
    },
    onDragLeave: () => setOver(false),
    onDrop: e => {
      e.preventDefault();
      setOver(false);
      load(e.dataTransfer.files[0]);
    },
    onClick: () => inputRef.current && inputRef.current.click(),
    style: {
      position: 'relative',
      cursor: 'pointer',
      overflow: 'hidden',
      borderRadius: 10,
      background: 'var(--veil-02, rgba(255,255,255,0.02))',
      border: `1px solid ${over ? 'rgba(255,255,255,0.4)' : 'var(--veil-08, rgba(255,255,255,0.08))'}`,
      backdropFilter: 'blur(10px)',
      transition: 'border-color 320ms, box-shadow 320ms',
      boxShadow: over ? '0 0 22px rgba(255,255,255,0.12)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "file",
    accept: "image/*",
    style: {
      display: 'none'
    },
    onChange: e => load(e.target.files[0])
  }), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: fit,
      display: 'block',
      filter: 'grayscale(0.25) contrast(1.05) brightness(0.92)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      textAlign: 'center',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "rgba(255,255,255,0.4)",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 16l5-5 4 4 3-3 6 6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "1.5"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.62rem',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--bone-400, #6b6b6b)'
    }
  }, placeholder)), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '14px 14px 12px',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
      fontSize: '0.6rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--bone-200, #c8c8c8)',
      pointerEvents: 'none'
    }
  }, caption));
}
window.DropImage = DropImage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DropImage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Anneora website — Footer. Wordmark, social icon row (Lucide), mailing-list
// capsule, and a faint copyright. Social glyphs use Lucide via IconButton.
const {
  IconButton,
  Input
} = window.AnneoraDesignSystem_7f3db2;

// Minimal inline Lucide-style paths (stroke, 1.5) — Spotify-ish / IG / mail / yt
function Glyph({
  d,
  viewBox = '0 0 24 24',
  fill = false
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: viewBox,
    fill: fill ? 'currentColor' : 'none',
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, d);
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--veil-08)',
      padding: '54px 24px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cinzel', serif",
      fontWeight: 500,
      fontSize: '1.1rem',
      letterSpacing: '0.28em',
      color: 'var(--bone-50)',
      textShadow: '0 0 20px rgba(255,255,255,0.15)'
    }
  }, "ANNEORA"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 14,
      margin: '28px 0'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Instagram",
    size: "md"
  }, /*#__PURE__*/React.createElement(Glyph, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17.5",
      cy: "6.5",
      r: "0.6",
      fill: "currentColor"
    }))
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Spotify",
    size: "md"
  }, /*#__PURE__*/React.createElement(Glyph, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 9.5c3-1 6-0.8 9 0.8M7.5 12.6c2.4-0.8 4.8-0.6 7 0.7M8 15.4c1.9-0.6 3.7-0.4 5.4 0.5"
    }))
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "YouTube",
    size: "md"
  }, /*#__PURE__*/React.createElement(Glyph, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "6",
      width: "18",
      height: "12",
      rx: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11 9.5l4 2.5-4 2.5z",
      fill: "currentColor",
      stroke: "none"
    }))
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Email",
    size: "md"
  }, /*#__PURE__*/React.createElement(Glyph, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3.5 7l8.5 6 8.5-6"
    }))
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 340,
      margin: '0 auto 30px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    variant: "capsule",
    type: "email",
    placeholder: "you@void.com",
    label: "Join the mailing list"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.65rem',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--bone-400)'
    }
  }, "\xA9 2025 Anneora \xB7 voice from the void"));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Gallery.jsx
try { (() => {
// Anneora website — Gallery. Four gothic / angelic themed image slots the
// user fills (I can't pull from Google). Drop images in; they persist.
const {
  Badge
} = window.AnneoraDesignSystem_7f3db2;
const SLOTS = [{
  id: 'gal-1',
  placeholder: 'Cathedral light',
  caption: 'Cathedral light'
}, {
  id: 'gal-2',
  placeholder: 'Fallen feathers',
  caption: 'Fallen feathers'
}, {
  id: 'gal-3',
  placeholder: 'Veil & smoke',
  caption: 'Veil & smoke'
}, {
  id: 'gal-4',
  placeholder: 'Cold marble',
  caption: 'Cold marble'
}];
function Gallery() {
  const DropImage = window.DropImage;
  return /*#__PURE__*/React.createElement("section", {
    id: "visions",
    style: {
      padding: '80px 24px',
      maxWidth: 1000,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      marginBottom: 38
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.65rem',
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      color: 'var(--bone-400)'
    }
  }, "The themes"), /*#__PURE__*/React.createElement(window.SectionLabel, null, "Visions"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, "Drop your imagery"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14
    }
  }, SLOTS.map((s, i) => /*#__PURE__*/React.createElement(DropImage, {
    key: s.id,
    id: s.id,
    placeholder: s.placeholder,
    caption: s.caption,
    style: {
      aspectRatio: i % 2 === 0 ? '3 / 4' : '3 / 4.4',
      width: '100%'
    }
  }))));
}
window.Gallery = Gallery;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Gallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Anneora website — Hero. Full-bleed void with the wordmark breathing in
// the center, a one-line tagline, and a single glow CTA. Grain overlays all.
const {
  Button
} = window.AnneoraDesignSystem_7f3db2;
function Hero({
  onListen
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: '92vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 24px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: '0.7rem',
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: 'var(--bone-400)',
      marginBottom: '34px'
    }
  }, "Singer \xB7 Songwriter"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "'Cinzel', serif",
      fontWeight: 500,
      fontSize: 'clamp(3rem, 11vw, 6.5rem)',
      letterSpacing: '0.26em',
      color: 'var(--bone-50)',
      textShadow: '0 0 30px rgba(255,255,255,0.22)',
      textIndent: '0.26em'
    }
  }, "ANNEORA"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '20px',
      fontFamily: "'Inter', sans-serif",
      fontWeight: 300,
      fontSize: '1rem',
      letterSpacing: '0.22em',
      color: 'var(--bone-300)',
      opacity: 0.85
    }
  }, "voice from the void"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '46px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "glow",
    size: "lg",
    onClick: onListen
  }, "Listen")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '34px',
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: '0.65rem',
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      color: 'var(--bone-400)',
      opacity: 0.6
    }
  }, "scroll \u2193"));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LiveSection.jsx
try { (() => {
// Anneora website — Live / shows. A sparse list of tour dates as glass rows,
// each with city, venue, date, and a ghost "RSVP" action.
const {
  Button,
  SectionLabel
} = window;
const SHOWS = [{
  date: 'Jul 12',
  city: 'London',
  venue: 'St Pancras Old Church',
  status: 'rsvp'
}, {
  date: 'Aug 03',
  city: 'Berlin',
  venue: 'Funkhaus · Saal 3',
  status: 'rsvp'
}, {
  date: 'Sep 19',
  city: 'Reykjavík',
  venue: 'Harpa · Norðurljós',
  status: 'soldout'
}];
function LiveSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "live",
    style: {
      padding: '70px 24px 100px',
      maxWidth: 700,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.65rem',
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      color: 'var(--bone-400)'
    }
  }, "In the room"), /*#__PURE__*/React.createElement(window.SectionLabel, null, "Live")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, SHOWS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.city,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      padding: '18px 22px',
      borderRadius: 10,
      background: 'var(--veil-02)',
      border: '1px solid var(--veil-08)',
      backdropFilter: 'blur(10px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cinzel', serif",
      fontWeight: 500,
      fontSize: '0.95rem',
      letterSpacing: '0.1em',
      color: 'var(--bone-50)',
      minWidth: 64
    }
  }, s.date), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: '0.95rem',
      letterSpacing: '0.06em',
      color: 'var(--bone-100)'
    }
  }, s.city), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: '0.72rem',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--bone-400)'
    }
  }, s.venue)), s.status === 'soldout' ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.65rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--bone-400)'
    }
  }, "Sold out") : /*#__PURE__*/React.createElement(window.AnneoraDesignSystem_7f3db2.Button, {
    size: "sm",
    variant: "ghost"
  }, "RSVP")))));
}
window.LiveSection = LiveSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LiveSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MusicSection.jsx
try { (() => {
// Anneora website — Music section. The real discography from Spotify, as a
// column of glass TrackRows with album art. Click art to play; click title
// to open on Spotify.
const {
  TrackRow
} = window.AnneoraDesignSystem_7f3db2;
const ART = hash => `https://i.scdn.co/image/ab67616d00001e02${hash}`;

// Real releases — open.spotify.com/artist/2Ny3eT14SfY0h8owBDWgGQ
const TRACKS = [{
  title: 'Beyond The Veil',
  meta: 'Single · 2025',
  art: ART('7db50b00803ac494607c12da'),
  href: 'https://open.spotify.com/album/0uxp5yJowPAsKvc233in1E'
}, {
  title: 'Angel Wings',
  meta: 'Single · 2025',
  art: ART('c97e74d5b6618f91b522087f'),
  href: 'https://open.spotify.com/album/7y2o2KHNtYdTrpmdulMSBc'
}, {
  title: 'ECHOS',
  meta: 'Single · 2025',
  art: ART('12b4519cf8c515414ef003f1'),
  href: 'https://open.spotify.com/album/4Jk7gWeZcedfLUjwMEPtff'
}, {
  title: 'SPENTTIMEALONE',
  meta: 'Single · 2025',
  art: ART('a94c4b8130bdc2c316c8b5d7'),
  href: 'https://open.spotify.com/album/7KawqYHuInjqwzXuhnjp3H'
}, {
  title: 'NO NAME',
  meta: 'Single · 2023',
  art: ART('711986a98fcc645f9b35d506'),
  href: 'https://open.spotify.com/album/481EtNXt19MdtdqfPXvk8U'
}, {
  title: 'BLEED TO SURVIVE',
  meta: 'Single · 2023',
  href: 'https://open.spotify.com/album/4lSKlt8Bk1hZBjuMg2RjAh'
}];
function SectionLabel({
  children
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "'Cinzel', serif",
      fontWeight: 500,
      fontSize: '1.6rem',
      letterSpacing: '0.18em',
      color: 'var(--bone-50)',
      textShadow: '0 0 22px rgba(255,255,255,0.12)'
    }
  }, children);
}
window.SectionLabel = SectionLabel;
function MusicSection({
  playing,
  progress,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "music",
    style: {
      padding: '90px 24px',
      maxWidth: 700,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.65rem',
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      color: 'var(--bone-400)'
    }
  }, "Discography \xB7 Spotify"), /*#__PURE__*/React.createElement(SectionLabel, null, "Music")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, TRACKS.map(t => /*#__PURE__*/React.createElement(TrackRow, {
    key: t.title,
    title: t.title,
    meta: t.meta,
    art: t.art,
    href: t.href,
    progress: playing === t.title ? progress : 0,
    playing: playing === t.title,
    active: playing === t.title,
    onToggle: () => onToggle(t.title)
  }))));
}
window.MusicSection = MusicSection;
window.TRACKS = TRACKS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MusicSection.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.PlayButton = __ds_scope.PlayButton;

__ds_ns.TrackRow = __ds_scope.TrackRow;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
