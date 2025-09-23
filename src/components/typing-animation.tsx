
'use client';

import { TypeAnimation } from 'react-type-animation';
import { cn } from '../lib/utils';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type TypingAnimationProps = {
  sequence: (string | number)[];
  className?: string;
};

export function TypingAnimation({ sequence, className }: TypingAnimationProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);
    }
  }, [inView, hasStarted]);

  return (
    <div ref={ref}>
      {hasStarted ? (
        <TypeAnimation
          sequence={sequence}
          wrapper="div"
          speed={60}
          className={cn(className)}
          cursor={true}
          repeat={0}
        />
      ) : (
        <div className={cn("text-transparent", className)}>
            {sequence.filter(item => typeof item === 'string').join('\n')}
        </div>
      )}
    </div>
  );
}
