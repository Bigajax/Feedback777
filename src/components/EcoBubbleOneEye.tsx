import React from 'react';
import EyeBubbleBase, {
  EyeBubbleToken,
  MotionConfig,
} from './EyeBubbleBase';

const ecoBubbleToken: EyeBubbleToken = {
  backgroundFrom: '#E9FFE3',
  backgroundTo: '#9CE8B1',
  outline: 'rgba(52, 129, 78, 0.5)',
  iris: '#2A7747',
  irisHighlight: '#5CE596',
  pupil: '#0E2419',
  highlight: 'rgba(255, 255, 255, 0.95)',
  sparkle: 'rgba(255, 255, 255, 0.75)',
  shadow: 'rgba(92, 229, 150, 0.45)',
  glossFrom: 'rgba(255, 255, 255, 0.8)',
  glossTo: 'rgba(255, 255, 255, 0)',
};

export type EcoBubbleOneEyeProps = Omit<
  React.ComponentProps<typeof EyeBubbleBase>,
  'token'
>;

const EcoBubbleOneEye: React.FC<EcoBubbleOneEyeProps> = ({
  children,
  ...rest
}) => (
  <MotionConfig
    transition={{ duration: 1.1, ease: [0.6, 0.01, -0.05, 0.95] }}
    reducedMotion={{ type: 'user' }}
  >
    <EyeBubbleBase token={ecoBubbleToken} {...rest}>
      {children}
    </EyeBubbleBase>
  </MotionConfig>
);

export default EcoBubbleOneEye;
