import { motion } from "framer-motion";
import { Phone, Search, CheckCircle2 } from "lucide-react";

const steps = [
  { n: "01", icon: Phone, title: "Book Online", desc: "Schedule your free inspection in under two minutes." },
  { n: "02", icon: Search, title: "Expert Assessment", desc: "Certified technicians inspect every corner of your property." },
  { n: "03", icon: CheckCircle2, title: "Guaranteed Results", desc: "We treat, monitor, and follow up until you're pest-free." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">/ Process</p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            From call to clear<br />in <span className="text-primary">three steps.</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          <svg className="absolute left-0 top-16 hidden h-px w-full md:block" preserveAspectRatio="none">
            <motion.line
              x1="16%" y1="0" x2="84%" y2="0"
              stroke="currentColor" strokeWidth="2" strokeDasharray="6 8"
              className="text-primary/40"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </svg>

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.6 }}
                className="relative overflow-hidden rounded-xl border border-border bg-card p-8"
              >
                <span className="pointer-events-none absolute -right-2 -top-6 font-display text-[8rem] font-bold leading-none text-muted/30">
                  {s.n}
                </span>
                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
