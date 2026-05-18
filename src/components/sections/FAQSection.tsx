import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "How safe are your products for children and pets?", a: "All formulas are EPA-approved and certified safe for families. We use targeted application, once dry (typically 30 minutes), they're fully safe for re-entry." },
  { q: "How long does a treatment session take?", a: "Most interior + exterior treatments take 45–75 minutes. Larger properties or specialized work like termites may take longer." },
  { q: "Do I need to leave my home during treatment?", a: "No, most services don't require you to leave. We'll advise on specific rooms to vacate briefly if needed." },
  { q: "How soon will I see results?", a: "Most clients see dramatic reduction within 48–72 hours. Full elimination of a colony can take 2–4 weeks." },
  { q: "Do you offer same-day service?", a: "Yes, subject to technician availability. We guarantee a response within 48 hours for every booking." },
  { q: "What's your satisfaction guarantee?", a: "If pests return between scheduled visits, we re-treat at no charge. Annual plans include a money-back guarantee." },
  { q: "How often should I schedule pest control?", a: "Quarterly is the gold standard for prevention. Active infestations may need monthly visits initially." },
  { q: "Do you serve commercial properties?", a: "Absolutely. We have dedicated programs for restaurants, offices, multi-family housing, and warehouses." },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
        <div className="mb-16 grid gap-6 lg:grid-cols-[1fr_2fr] lg:items-end">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">/ FAQ</p>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
              Questions,<br />answered.
            </h2>
          </div>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`rounded-xl border bg-card transition ${isOpen ? "border-primary" : "border-border"}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition ${
                    isOpen ? "border-l-2 border-primary" : ""
                  }`}
                >
                  <span className={`font-display text-lg font-medium ${isOpen ? "text-foreground" : "text-muted-foreground"}`}>
                    {f.q}
                  </span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="shrink-0 text-primary">
                    <Plus className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
