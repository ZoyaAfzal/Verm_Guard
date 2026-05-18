import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, ShieldCheck, Star, Clock } from "lucide-react";
import { useTypewriter } from "@/lib/hooks/useTypewriter";
import heroImg from "@/assets/hero-technician.jpg";

function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    let raf = 0;
    const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const N = 60;
    const dots = Array.from({ length: N }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a: Math.random() * 0.6 + 0.2,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      for (const d of dots) {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > c.width) d.vx *= -1;
        if (d.y < 0 || d.y > c.height) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 241, 53, ${d.a})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(200,241,53,0.7)";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 h-full w-full" />;
}

const headline = ["Pest-free", "homes.", "Engineered."];

export function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  const word = useTypewriter(["Termites.", "Cockroaches.", "Rodents.", "Bed Bugs.", "Mosquitos."]);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28">
      <ParticleField />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,241,53,0.08),transparent_60%)]" />

      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 pb-32 pt-12 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:px-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-3 py-1.5 text-xs text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Now booking in your area — 48hr response
          </motion.div>

          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.95] tracking-tighter">
            <motion.span
              initial="hidden" animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
              className="block"
            >
              {headline.map((w, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="mr-4 inline-block"
                >
                  {w === "Engineered." ? <span className="text-primary text-glow">{w}</span> : w}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <div className="mt-6 flex items-baseline gap-3 font-display text-3xl md:text-4xl">
            <span className="text-muted-foreground">We eliminate</span>
            <span className="text-primary text-glow">
              {word}
              <span className="ml-0.5 inline-block h-8 w-[3px] animate-pulse bg-primary align-middle" />
            </span>
          </div>

          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Certified technicians. Eco-safe formulas. A guarantee that holds. VermGuard is the new standard of residential pest protection.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.a
              href="#cta"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="shimmer rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground lime-shadow"
            >
              Book Inspection →
            </motion.a>
            <button
              onClick={() => setShowVideo(true)}
              className="group flex items-center gap-3 rounded-full border border-border px-6 py-3.5 text-sm text-foreground transition hover:border-primary hover:text-primary"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Play className="h-4 w-4" fill="currentColor" />
              </span>
              Watch how it works
            </button>
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border"
            style={{ clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)" }}
          >
            <img src={heroImg} alt="VermGuard technician in protective gear" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-primary/10" />
          </motion.div>

          {[
            { i: 0, top: "10%", left: "-8%", icon: <ShieldCheck className="h-4 w-4 text-primary" />, text: "100% Safe for Families" },
            { i: 1, top: "45%", left: "-14%", icon: <Clock className="h-4 w-4 text-primary" />, text: "48-hr Response" },
            { i: 2, top: "78%", left: "-4%", icon: <Star className="h-4 w-4 text-primary" fill="currentColor" />, text: "4.9 · 2,400+ Reviews" },
          ].map((b) => (
            <motion.div
              key={b.i}
              initial={{ opacity: 0, x: -40, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.9 + b.i * 0.18, type: "spring", stiffness: 180, damping: 14 }}
              style={{ top: b.top, left: b.left }}
              className="glass absolute hidden items-center gap-2 rounded-full px-4 py-2 text-xs font-medium lg:flex"
            >
              {b.icon}
              {b.text}
            </motion.div>
          ))}
        </div>
      </div>

      {showVideo && (
        <div
          className="fixed inset-0 z-[150] flex items-center justify-center bg-background/90 p-6 backdrop-blur-xl"
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid h-full w-full place-items-center text-muted-foreground">
              <div className="text-center">
                <Play className="mx-auto h-16 w-16 text-primary" />
                <p className="mt-4 font-display text-2xl">How VermGuard Works</p>
                <p className="text-sm">Video coming soon</p>
              </div>
            </div>
            <button onClick={() => setShowVideo(false)} className="absolute right-4 top-4 rounded-full bg-background/80 p-2">✕</button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
