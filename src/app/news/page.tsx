import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CtaBand from "../components/CtaBand";
import heroImage from "../assets/news hero.png";
import Link from "next/link";
import { newsPosts } from "./data";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[var(--brand-deep)] text-[var(--brand-cream)]">
      <Header />
      <main className="bg-white text-[#3a2b22]">
        <section className="relative h-[240px] w-full overflow-hidden text-white sm:h-[280px]">
          <Image
            src={heroImage}
            alt="JM Quality Construction work site"
            fill
            className="object-cover object-[center_55%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/15" />
          <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col items-start justify-center px-6 lg:px-10">
            <h1 className="font-display text-[48px] font-bold uppercase leading-none tracking-[0]">
              Blog
            </h1>
            <p className="mt-2 text-sm text-white/80 font-body">
              Home / <span className="text-[var(--brand-gold)]">Blog</span>
            </p>
            
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {newsPosts.map((item) => (
                <article
                  key={item.slug}
                  className="flex h-full flex-col overflow-hidden border border-[#e7e1da] bg-white shadow-[0_12px_30px_rgba(20,12,8,0.12)]"
                >
                  <div className="relative aspect-[4/3] w-full bg-[#c8c0b6]">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-6 py-6">
                    <p className="font-display text-[20px] font-normal uppercase leading-[24px] tracking-[0] text-[#3a2b22]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-[16px] leading-none text-[#6d6057] font-body">
                      {item.excerpt}
                    </p>
                    <Link
                      className="mt-6 inline-flex w-fit items-center justify-center bg-[var(--brand-gold)] px-6 py-2.5 text-[18px] font-extrabold leading-none tracking-[0] !text-white transition hover:bg-[var(--brand-gold-soft)]"
                      href={`/news/${item.slug}`}
                    >
                      Learn More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CtaBand />
      <Footer />
    </div>
  );
}
