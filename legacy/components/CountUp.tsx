import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface CountUpProps {
  value: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

const CountUp = ({ value, className = "", prefix = "", suffix = "" }: CountUpProps) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const displayValue = Math.floor(latest);
        (ref.current as HTMLSpanElement).textContent = `${prefix}${displayValue.toString().padStart(2, "0")}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, prefix, suffix]);

  return <span ref={ref} className={className}>{`${prefix}00${suffix}`}</span>;
};

export default CountUp;
