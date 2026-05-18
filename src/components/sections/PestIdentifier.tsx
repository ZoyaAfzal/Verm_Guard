import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Bug } from "lucide-react";

type Pest = {
  name: string;
  emoji?: string;
  icon?: any;
  danger: "Low" | "Medium" | "High";
  desc: string;
  signs: string[];
  treatment: string;
  faqs: { q: string; a: string }[];
};

const pests: Pest[] = [
  {
    name: "Cockroach", icon: Bug, danger: "High",
    desc: "Disease vectors that multiply at alarming rates in warm, dark spaces.",
    signs: ["Droppings near food storage", "Musty odor in cabinets", "Egg casings behind appliances"],
    treatment: "Gel baiting + IGR application across nesting zones.",
    faqs: [
      { q: "Are cockroaches dangerous?", a: "Yes! they spread Salmonella, E. coli, and trigger asthma." },
      { q: "How fast do they spread?", a: "A single female can produce 300+ offspring per year." },
    ],
  },
  {
    name: "Rat", emoji: "🐀", danger: "High",
    desc: "Structural chewers that compromise wiring, insulation, and food safety.",
    signs: ["Gnaw marks on wood/wires", "Greasy rub marks along walls", "Scratching in walls at night"],
    treatment: "Exclusion + multi-catch traps + bait stations.",
    faqs: [
      { q: "Can rats damage my home?", a: "Severely, chewed wiring is a leading cause of house fires." },
      { q: "How quickly can you remove them?", a: "Most infestations clear within 14 days." },
    ],
  },
  {
    name: "Termite", emoji: "🐜", danger: "High",
    desc: "Silent destroyers that consume up to $5B in US property annually.",
    signs: ["Mud tubes on foundation", "Hollow-sounding wood", "Discarded wings near windows"],
    treatment: "Liquid soil treatment + Sentricon bait system.",
    faqs: [
      { q: "How do I know it's termites?", a: "Look for mud tubes, blistering paint, and swarmers in spring." },
    ],
  },
  {
    name: "Bed Bug", emoji: "🛏️", danger: "Medium",
    desc: "Resilient nocturnal biters that hitchhike on luggage and furniture.",
    signs: ["Small blood spots on sheets", "Itchy welts in a line", "Rust-colored stains on mattress seams"],
    treatment: "Heat treatment + residual insecticide perimeter.",
    faqs: [
      { q: "Will heat treatment work?", a: "Yes! 120°F for 90 minutes kills all life stages." },
    ],
  },
  {
    name: "Mosquito", emoji: "🦟", danger: "Medium",
    desc: "Vectors for West Nile, Zika, and Eastern Equine Encephalitis.",
    signs: ["Bites on exposed skin at dusk", "Standing water on property", "Buzzing in shaded yard areas"],
    treatment: "Barrier spray + larvicide in standing water sources.",
    faqs: [
      { q: "How long does spraying last?", a: "Our barrier treatment lasts approximately 30 days." },
    ],
  },
  {
    name: "Spider", emoji: "🕷️", danger: "Low",
    desc: "Mostly beneficial — but venomous species require expert handling.",
    signs: ["Funnel webs in corners", "Egg sacs in undisturbed areas", "Sightings in basements/garages"],
    treatment: "Web removal + perimeter residual treatment.",
    faqs: [
      { q: "Which spiders are dangerous?", a: "Black widow and brown recluse are the two of medical concern." },
    ],
  },
];

const dangerColor: Record<Pest["danger"], string> = {
  Low: "bg-secondary/20 text-secondary",
  Medium: "bg-yellow-500/20 text-yellow-400",
  High: "bg-destructive/20 text-destructive",
};

export function PestIdentifier() {
  const [active, setActive] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const p = pests[active];

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
        <div className="mb-16">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">/ Identify</p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            Not sure what<br />you're dealing with?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="grid grid-cols-3 gap-3 self-start">
            {pests.map((pest, i) => {
              const Icon = pest.icon;
              return (
                <motion.button
                  key={pest.name}
                  onClick={() => { setActive(i); setOpenFaq(0); }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`group flex aspect-square flex-col items-center justify-center rounded-xl border p-4 transition-all ${
                    active === i ? "border-primary bg-primary/10 lime-shadow" : "border-border bg-card hover:border-primary/40"
                  }`}
                >
                  {pest.icon ? (
                    <Icon className={`h-12 w-12 transition-transform group-hover:scale-110 ${active === i ? "text-primary" : "text-muted-foreground"}`} />
                  ) : (
                    <div className="text-5xl transition-transform group-hover:scale-110">{pest.emoji}</div>
                  )}
                  <div className="mt-3 text-xs font-medium">{pest.name}</div>
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={p.name}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div className="grid h-20 w-20 place-items-center rounded-2xl bg-primary/15">
                    {p.icon ? (
                      <p.icon className="h-12 w-12 text-primary" />
                    ) : (
                      <span className="text-6xl">{p.emoji}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-semibold">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Detailed pest profile</p>
                  </div>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${dangerColor[p.danger]}`}>
                  {p.danger} Risk
                </span>
              </div>
              <p className="mt-6 text-muted-foreground">{p.desc}</p>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Signs of infestation</p>
                <ul className="mt-3 space-y-2">
                  {p.signs.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm">
                      <span className="mt-2 h-1 w-3 shrink-0 bg-primary" /> {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-lg border border-border bg-background/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Treatment</p>
                <p className="mt-1.5 text-sm">{p.treatment}</p>
              </div>

              <div className="mt-6 space-y-2">
                {p.faqs.map((f, i) => (
                  <div key={f.q} className="rounded-lg border border-border">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium"
                    >
                      {f.q}
                      <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }}>
                        <ChevronDown className="h-4 w-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="px-4 pb-4 text-sm text-muted-foreground">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <a href="#cta" className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
                Get treatment for {p.name.toLowerCase()}s →
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
