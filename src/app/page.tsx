import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "next/image";
import heroImage from "./assets/Image BG.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--brand-deep)] text-[var(--brand-cream)]">
      <Header />
      <main>
        <section className="relative aspect-[1512/673] w-full overflow-hidden text-white">
          <Image
            src={heroImage}
            alt="JM Quality Construction exterior"
            fill
            className="object-cover object-[center_35%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/15 to-black/35" />
          <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col items-start justify-end px-6 pb-16 pt-10 lg:px-10">
            <h1 className="font-body text-[40px] font-bold uppercase tracking-[0.04em] drop-shadow-md sm:text-[46px]">
              JM Quality Construction
            </h1>
            <p className="mt-2 max-w-[520px] text-[12px] leading-relaxed text-white/90">
              At JM Quality Construction, we specialize in modular installation,
              transportation and framing for commercial and residential projects.
            </p>
            <a
              className="mt-5 inline-flex min-w-[130px] items-center justify-center bg-[var(--brand-gold)] px-5 py-2.5 text-[11px] uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.25)] transition hover:bg-[var(--brand-gold-soft)]"
              href="#"
            >
              Our Services
            </a>
          </div>
        </section>
      </main>
      <CtaBand />
      <Footer />
    </div>
  );
}
