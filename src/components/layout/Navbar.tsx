import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Bug } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={false}
        animate={{ paddingTop: scrolled ? 8 : 18, paddingBottom: scrolled ? 8 : 18 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl"
        style={{ background: scrolled ? "color-mix(in oklab, var(--background) 70%, transparent)" : "transparent" }}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 lg:px-16">
          <a href="#top" className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Bug className="h-5 w-5" strokeWidth={2.4} />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">VermGuard</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <a
            href="#cta"
            className="shimmer hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110 md:inline-flex"
          >
            Get Free Inspection
          </a>
          <button onClick={() => setOpen(true)} className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-xl font-bold">VermGuard</span>
              <button onClick={() => setOpen(false)}><X className="h-6 w-6" /></button>
            </div>
            <nav className="flex flex-col items-start gap-6 px-8 pt-16">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: 0.1 + i * 0.07 } }}
                  className="font-display text-4xl font-bold"
                >
                  {l.label}
                </motion.a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)} className="mt-8 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
                Get Free Inspection
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
