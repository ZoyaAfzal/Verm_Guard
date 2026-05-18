import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal, Bug } from "lucide-react";

export function BeforeAfter() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);

  const onDrag = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  };

  const pests = [
    { top: "20%", left: "15%", rotate: 45, size: 24 },
    { top: "60%", left: "10%", rotate: -20, size: 32 },
    { top: "45%", left: "25%", rotate: 180, size: 20 },
    { top: "80%", left: "40%", rotate: 90, size: 28 },
    { top: "15%", left: "60%", rotate: -45, size: 22 },
    { top: "70%", left: "75%", rotate: 15, size: 30 },
    { top: "30%", left: "85%", rotate: 210, size: 26 },
  ];

  return (
    <section className="py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
        <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">/ Results</p>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
              Drag to see<br />the difference.
            </h2>
          </div>
          <p className="text-muted-foreground">
            Real before-and-after from a recent treatment. Use the handle to see how we transformed this infested space.
          </p>
        </div>

        <div
          ref={ref}
          className="relative aspect-[16/9] w-full select-none overflow-hidden rounded-2xl border border-border shadow-2xl"
          onMouseMove={(e) => e.buttons === 1 && onDrag(e.clientX)}
          onTouchMove={(e) => onDrag(e.touches[0].clientX)}
        >
          {/* Before Image (Background) */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2069" 
              alt="Before treatment" 
              className="h-full w-full object-cover grayscale brightness-[0.3] contrast-125 sepia-[0.4]"
            />
            {/* Pest Overlays */}
            {pests.map((p, i) => (
              <div 
                key={i} 
                className="absolute text-primary/40"
                style={{ top: p.top, left: p.left, transform: `rotate(${p.rotate}deg)` }}
              >
                <Bug size={p.size} />
              </div>
            ))}
            <div className="absolute inset-0 bg-destructive/20 mix-blend-multiply" />
            <div className="absolute left-8 top-8 rounded-full bg-destructive/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-destructive-foreground backdrop-blur-sm">
              Infested (Before)
            </div>
          </div>

          {/* After Image (Clipped Overlay) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2069" 
              alt="After treatment" 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/5 mix-blend-soft-light" />
            <div className="absolute right-8 top-8 rounded-full bg-primary/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground backdrop-blur-sm">
              Protected (After)
            </div>
          </div>

          {/* Divider & Handle */}
          <div
            className="absolute inset-y-0 z-10 w-1 bg-primary lime-shadow"
            style={{ left: `${pos}%` }}
          >
            <motion.div
              drag="x"
              dragConstraints={ref}
              dragElastic={0}
              dragMomentum={false}
              onDrag={(_, info) => onDrag(info.point.x)}
              className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-grab place-items-center rounded-full bg-primary text-primary-foreground shadow-xl active:cursor-grabbing"
            >
              <MoveHorizontal className="h-5 w-5" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
