import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bug, Rat, Trees, Syringe, Flower2, Plus } from "lucide-react";

const services = [
  { icon: Bug, title: "General Pest Control", desc: "Cockroaches, ants, silverfish — eradicated.", sub: ["German Cockroaches", "Carpenter Ants", "Silverfish", "Earwigs", "Crickets"] },
  { icon: Rat, title: "Rodent Elimination", desc: "Trap, seal, prevent. Total exclusion.", sub: ["House Mice", "Norway Rats", "Mole Control", "Entry-Point Sealing"] },
  { icon: Bug, title: "Spider & Web Removal", desc: "From harmless to hazardous — handled.", sub: ["Black Widow", "Brown Recluse", "Web Clearing", "Egg-Sac Removal"] },
  { icon: Trees, title: "Termite Treatment", desc: "Defend your structure before damage starts.", sub: ["Subterranean", "Drywood", "Tent Fumigation", "Bait Systems"] },
  { icon: Syringe, title: "Mosquito Control", desc: "Reclaim your yard, all season long.", sub: ["Yard Spray", "Larvae Treatment", "Barrier Protection", "Standing-Water Audit"] },
  { icon: Flower2, title: "Bee & Wasp Removal", desc: "Humane removal, hive relocation.", sub: ["Hive Removal", "Wasp Nests", "Queen Relocation", "Hornet Control"] },
];

export function ServicesSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">/ Services</p>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
              Specialists for every<br />unwelcome guest.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Six core protocols, refined over fifteen years of field work. Click any service to see what's inside.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const isOpen = open === i;
            const Icon = s.icon;
            return (
              <motion.button
                key={s.title}
                onClick={() => setOpen(isOpen ? null : i)}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className={`group relative overflow-hidden rounded-xl border bg-card p-7 text-left transition-all ${
                  isOpen ? "border-primary lime-shadow" : "border-border hover:border-primary/40"
                }`}
              >
                <div className="flex items-start justify-between">
                  <motion.div
                    animate={{ rotate: isOpen ? 12 : 0 }}
                    className={`grid h-12 w-12 place-items-center rounded-lg transition-colors ${
                      isOpen ? "bg-primary text-primary-foreground" : "bg-muted text-primary"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <motion.div animate={{ rotate: isOpen ? 45 : 0 }} className="text-muted-foreground">
                    <Plus className="h-5 w-5" />
                  </motion.div>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-5 space-y-2 border-t border-border pt-5">
                        {s.sub.map((it, j) => (
                          <motion.li
                            key={it}
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0, transition: { delay: j * 0.05 } }}
                            className="flex items-center gap-3 text-sm"
                          >
                            <span className="h-1 w-4 bg-primary" />
                            {it}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
