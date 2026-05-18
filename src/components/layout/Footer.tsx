import { Bug, Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Bug className="h-5 w-5" strokeWidth={2.4} />
              </div>
              <span className="font-display text-xl font-bold">VermGuard</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Premium pest control engineered for modern homes. Certified, eco-safe, guaranteed.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:border-primary hover:text-primary">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">Services</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground">General Pest</a></li>
              <li><a href="#services" className="hover:text-foreground">Rodents</a></li>
              <li><a href="#services" className="hover:text-foreground">Termites</a></li>
              <li><a href="#services" className="hover:text-foreground">Mosquitos</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">Newsletter</p>
            <p className="text-sm text-muted-foreground">Tips, alerts, and seasonal advisories.</p>
            <form className="mt-4 flex overflow-hidden rounded-full border border-border bg-background">
              <input
                type="email"
                placeholder="you@home.com"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button className="bg-primary px-4 text-sm font-semibold text-primary-foreground">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-end justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div />
          <a href="https://axistechgroup.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            Powered by AxisTechGroup
          </a>
        </div>
      </div>
    </footer>
  );
}
