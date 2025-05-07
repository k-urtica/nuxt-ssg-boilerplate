import type { MotionProps } from 'motion-v';

export const slideUp = (
  options: { y?: number; delay?: number; duration?: number } = {}
): Partial<MotionProps<'div'>> => {
  const { y = 15, delay, duration = 0.5 } = options;

  return {
    initial: { opacity: 0, y, filter: 'blur(10px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    inViewOptions: { once: true },
    transition: { delay, duration },
  };
};
