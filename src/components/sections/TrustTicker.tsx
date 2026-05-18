const row1 = ["🏆 NPMA Certified", "✅ EPA Approved", "10,000+ Homes Protected", "🦟 Zero Pest Guarantee", "🌿 Eco-Safe Products", "⭐ 4.9 Average Rating"];
const row2 = ["48hr Response Time", "Family & Pet Safe", "15+ Years Experience", "50+ Technicians", "Quarterly Follow-Ups", "Money-Back Promise"];

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const all = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`flex w-max gap-12 whitespace-nowrap py-5 ${reverse ? "marquee-reverse" : "marquee"}`}>
        {all.map((t, i) => (
          <div key={i} className="flex items-center gap-12 text-sm tracking-wide text-muted-foreground">
            <span>{t}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function TrustTicker() {
  return (
    <section className="border-y border-border bg-surface py-2">
      <Row items={row1} />
      <Row items={row2} reverse />
    </section>
  );
}
