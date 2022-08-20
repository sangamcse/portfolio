/* eslint-disable jsx-a11y/alt-text */
import { useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';

export const AppearingImage = ({ offset, onLoad, ...props }) => {
  const [animatedStyle, set] = useSpring(() => ({
    opacity: 0,
  }));

  const handleOnLoad = useCallback(() => {
    set({
      opacity: 1,
    });
  }, [set]);

  return (
    <animated.div style={animatedStyle}>
      <Image {...props} onLoad={handleOnLoad} loading="lazy" />
    </animated.div>
  );
};
