import { motion } from "framer-motion";
import { Bug } from "lucide-react";

export function CTABanner() {
  return (
    <section id="cta" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,241,53,0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: Math.random() * 1000, y: Math.random() * 400, opacity: 0 }}
            animate={{
              x: [null, Math.random() * 1000, Math.random() * 1000],
              y: [null, Math.random() * 400, Math.random() * 400],
              opacity: [0, 0.15, 0],
            }}
            transition={{ duration: 18 + i * 2, repeat: Infinity, delay: i * 0.6 }}
            className="absolute text-primary/30"
          >
            <Bug className="h-8 w-8" />
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto max-w-[900px] px-6 text-center lg:px-16">
        <h2 className="font-display text-5xl font-bold tracking-tight md:text-7xl">
          Ready to reclaim<br /><span className="text-primary text-glow">your space?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          Join 10,000+ families who live pest-free with VermGuard.
        </p>
        <motion.a
          href="#"
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="shimmer mt-10 inline-flex rounded-full bg-primary px-10 py-5 text-lg font-bold text-primary-foreground lime-shadow"
        >
          Book Free Inspection Today
        </motion.a>
        <p className="mt-5 text-xs text-muted-foreground">
          No contracts. No surprises. 100% guaranteed.
        </p>
      </div>
    </section>
  );
}
