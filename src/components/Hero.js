import { useState, useEffect } from 'react';
import { shuffle } from 'lodash';
import { useTransition, animated } from 'react-spring';
import Image from 'next/image';

import { allRoles } from 'components/allRoles';

const RESELECT_INTERVAL = 1500;

export const Hero = () => {
  const [firstRole, ...otherRoles] = allRoles;
  const [roles, setRoles] = useState([firstRole, ...shuffle(otherRoles)]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!document?.hasFocus()) return;

      setRoles((currentRoles) =>
        currentRoles.length > 1 ? currentRoles.slice(1) : shuffle(allRoles)
      );
    }, RESELECT_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const transitions = useTransition(roles[0], null, {
    from: {
      opacity: 0,
      transform: 'translate3d(0,2rem,0)',
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0,0,0)',
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(0,-2rem,0)',
    },
  });

  return (
    <section className="p-8">
      <div className="container flex items-center justify-center flex-wrap sm:flex-nowrap">
        <div className="text-left" style={{ flexBasis: '60ch' }}>
          <p className="text-3xl mb-1 text-heading">
            Hi, I&apos;m Sangam and I&apos;m
          </p>
          <p className="relative text-4xl text-primary h-24 sm:h-auto">
            {transitions.map(({ item, key, props }) => (
              <animated.span
                className="absolute text-shadow-md"
                key={key}
                style={props}
              >
                {item}
              </animated.span>
            ))}
          </p>
        </div>
        <Image
          width={256}
          height={256}
          src="https://avatars.githubusercontent.com/u/26381717?s=512"
          className="rounded-full shadow-lg h-64 w-64 mb-8 sm:mr-16 sm:mb-0"
          title="Sangam's avatar"
          alt="Sangam's avatar"
          priority
        />
      </div>
    </section>
  );
};
