import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "@/lib/hooks/useCountUp";

const stats = [
  { value: 10000, suffix: "+", label: "Homes Protected" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Certified Technicians" },
];

function Stat({ value, suffix, label, start }: typeof stats[number] & { start: boolean }) {
  const n = useCountUp(value, 2000, start);
  return (
    <div className="text-center">
      <div className="font-display text-5xl font-bold tracking-tight text-primary md:text-7xl">
        {n.toLocaleString()}<span>{suffix}</span>
      </div>
      <div className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
    </div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="relative overflow-hidden border-y border-border py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,241,53,0.08),transparent_60%)]" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="relative mx-auto grid max-w-[1280px] grid-cols-2 gap-8 px-6 md:grid-cols-4 lg:px-16"
      >
        {stats.map((s) => <Stat key={s.label} {...s} start={inView} />)}
      </motion.div>
    </section>
  );
}
