'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

type CounterProps = {
  end: number;
  suffix?: string;
};

export function Counter({ end, suffix }: CounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <span ref={ref}>
      {inView ? <CountUp end={end} duration={2.5} suffix={suffix} /> : '0'}
    </span>
  );
}
