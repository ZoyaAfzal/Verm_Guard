import { Star } from "lucide-react";

const items = [
  { name: "Sarah K.", city: "Austin, TX", quote: "Booked Friday, treated Monday. Roaches gone — and they actually followed up.", initials: "SK" },
  { name: "Marcus D.", city: "Denver, CO", quote: "Termite team caught a colony I had no idea existed. Saved my foundation.", initials: "MD" },
  { name: "Priya R.", city: "Seattle, WA", quote: "Pet-safe, no chemical smell, and the technician explained every step.", initials: "PR" },
  { name: "Jordan T.", city: "Miami, FL", quote: "Mosquito barrier turned our backyard into a usable space again.", initials: "JT" },
  { name: "Elena V.", city: "Chicago, IL", quote: "Rat issue handled with surgical precision. No more midnight scratching.", initials: "EV" },
  { name: "Ben H.", city: "Portland, OR", quote: "Quarterly plan is genuinely set-and-forget. Worth every dollar.", initials: "BH" },
];

function Card({ t }: { t: typeof items[number] }) {
  return (
    <div className="glass w-[360px] shrink-0 rounded-2xl p-6 transition-transform hover:scale-[1.02]">
      <div className="flex gap-1 text-primary">
        {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4" fill="currentColor" />)}
      </div>
      <p className="mt-4 text-sm leading-relaxed">"{t.quote}"</p>
      <div className="mt-5 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-bold text-primary-foreground">
          {t.initials}
        </div>
        <div>
          <div className="text-sm font-semibold">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.city}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const doubled = [...items, ...items];
  return (
    <section className="overflow-hidden py-32">
      <div className="mx-auto mb-14 max-w-[1280px] px-6 lg:px-16">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">/ Reviews</p>
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
          Backed by 2,400+ <span className="text-primary">happy homes.</span>
        </h2>
      </div>
      <div className="group relative">
        <div className="flex w-max gap-6 marquee group-hover:[animation-play-state:paused]">
          {doubled.map((t, i) => <Card key={i} t={t} />)}
        </div>
      </div>
    </section>
  );
}
