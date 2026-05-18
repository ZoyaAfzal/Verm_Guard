import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Basic Shield", price: 49, popular: false,
    desc: "Essential protection for one pest type.",
    features: ["Monthly perimeter spray", "One pest type covered", "Email support", "30-day guarantee"],
  },
  {
    name: "Home Guard", price: 89, popular: true,
    desc: "Our most popular all-around plan.",
    features: ["Quarterly interior + exterior", "All common pests covered", "Priority scheduling", "Free re-treatments", "90-day guarantee"],
  },
  {
    name: "Total Fortress", price: 149, popular: false,
    desc: "Maximum coverage including termites & rodents.",
    features: ["Monthly visits", "All pests + rodents + termites", "Dedicated technician", "Annual termite inspection", "12-month guarantee"],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">/ Pricing</p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            Simple plans.<br />Iron-clad <span className="text-primary">protection.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl border p-8 transition ${
                t.popular ? "border-primary bg-card lime-shadow scale-[1.02]" : "border-border bg-card hover:border-primary/40"
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold">{t.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-6xl font-bold tracking-tighter">${t.price}</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <a
                href="#cta"
                className={`mt-6 block rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
                  t.popular ? "bg-primary text-primary-foreground hover:brightness-110" : "border border-border text-foreground hover:border-primary"
                }`}
              >
                {t.popular ? "Choose Plan" : "Get Started"}
              </a>
              <ul className="mt-8 space-y-3">
                {t.features.map((f, j) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + j * 0.06 }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                    {f}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
