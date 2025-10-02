import React, { useId } from 'react';
import { motion, MotionConfig as FramerMotionConfig } from 'framer-motion';

export type EyeBubbleToken = {
  /** Outer gradient starting tone */
  backgroundFrom: string;
  /** Outer gradient ending tone */
  backgroundTo: string;
  /** Outline color used around the bubble */
  outline: string;
  /** Base color of the iris */
  iris: string;
  /** Highlight colour for the iris gradient */
  irisHighlight: string;
  /** Pupil colour */
  pupil: string;
  /** Eye highlight colour */
  highlight: string;
  /** Sparkle accent colour */
  sparkle: string;
  /** Shadow used for drop shadows */
  shadow: string;
  /** Gloss gradient starting colour */
  glossFrom: string;
  /** Gloss gradient ending colour */
  glossTo: string;
};

export interface EyeBubbleBaseProps
  extends React.HTMLAttributes<HTMLDivElement> {
  token: EyeBubbleToken;
  size?: number;
  children?: React.ReactNode;
}

export const MotionConfig = FramerMotionConfig;

const EyeBubbleBase: React.FC<EyeBubbleBaseProps> = ({
  token,
  size = 240,
  className,
  style,
  children,
  ...rest
}) => {
  const gradientId = useId();
  const glossId = useId();
  const irisId = useId();

  const containerClassName = [
    'relative inline-flex items-center justify-center',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const mergedStyle: React.CSSProperties = {
    width: size,
    height: size,
    ...style,
  };

  return (
    <div className={containerClassName} style={mergedStyle} {...rest}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 240 240"
        role="img"
        aria-hidden
        initial={{ rotate: -2 }}
        animate={{ rotate: [-2, 2, -1.5, 1.5, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <radialGradient id={gradientId} cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor={token.backgroundFrom} />
            <stop offset="100%" stopColor={token.backgroundTo} />
          </radialGradient>
          <linearGradient id={glossId} x1="30%" y1="20%" x2="70%" y2="80%">
            <stop offset="0%" stopColor={token.glossFrom} stopOpacity="0.9" />
            <stop offset="100%" stopColor={token.glossTo} stopOpacity="0" />
          </linearGradient>
          <radialGradient id={irisId} cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor={token.irisHighlight} />
            <stop offset="100%" stopColor={token.iris} />
          </radialGradient>
        </defs>

        <motion.circle
          cx="120"
          cy="120"
          r="108"
          fill={`url(#${gradientId})`}
          stroke={token.outline}
          strokeWidth="2"
          style={{ filter: `drop-shadow(0 25px 40px ${token.shadow})` }}
          initial={{ scale: 0.95, opacity: 0.9 }}
          animate={{ scale: [0.95, 1, 0.97], opacity: [0.9, 1, 0.95] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.ellipse
          cx="120"
          cy="120"
          rx="54"
          ry="46"
          fill={`url(#${irisId})`}
          stroke={token.outline}
          strokeWidth="1"
          initial={{ x: -3 }}
          animate={{ x: [-3, 4, -5, 3, 0], y: [1, -2, 1.5, -1.5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.circle
          cx="120"
          cy="120"
          r="20"
          fill={token.pupil}
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1.05, 0.95] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.circle
          cx="108"
          cy="104"
          r="8"
          fill={token.highlight}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: [0.8, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.circle
          cx="140"
          cy="140"
          r="6"
          fill={token.sparkle}
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: [0.5, 0.9, 0.4], scale: [0.5, 0.9, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.path
          d="M70 90 C 90 70, 150 70, 170 100"
          fill="none"
          stroke={`url(#${glossId})`}
          strokeWidth="12"
          strokeLinecap="round"
          initial={{ pathLength: 0.7, opacity: 0.6 }}
          animate={{ pathLength: [0.7, 1, 0.8], opacity: [0.6, 0.9, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.svg>

      {children ? (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default EyeBubbleBase;
