export default function CtaBand() {
  return (
    <section className="bg-[var(--brand-gold)] text-[var(--brand-cream)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 py-9 lg:flex-row lg:items-center lg:px-10">
        <div className="max-w-2xl">
          <p className="font-display text-[24px] font-bold uppercase leading-[26px] tracking-[0] text-white">
            Get Your Project Moving
          </p>
          <p className="mt-3 text-[16px] leading-none text-white/90 font-body">
            For modular installation, expert framing or reliable transportation
            services, JM Quality Construction delivers efficient, forward-thinking
            solutions backed by decades of experience.
          </p>
        </div>
        <a
          className="inline-flex min-w-[200px] items-center justify-center bg-white px-8 py-3 text-[18px] font-extrabold leading-none tracking-[0] text-[#2B221A] shadow-[0_10px_30px_rgba(32,24,18,0.28)] transition hover:bg-white/90"
          href="#"
        >
          Request a Quote
        </a>
      </div>
    </section>
  );
}
