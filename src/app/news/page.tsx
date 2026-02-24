import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CtaBand from "../components/CtaBand";
import heroImage from "../assets/hero/blog hero background.jpg";
import Link from "next/link";
import { newsPosts } from "./data";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[var(--brand-deep)] text-[var(--brand-cream)]">
      <Header />
      <main className="bg-[#efefef] text-[#3a2b22]">
        <section className="relative h-[250px] w-full overflow-hidden text-white sm:h-[285px] lg:h-[320px]">
          <Image
            src={heroImage}
            alt="JM Quality Construction work site"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/65" />
          <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col items-start justify-end px-6 pb-8 lg:px-10 lg:pb-10">
            <h1 className="font-display text-[46px] font-bold uppercase leading-[0.85] tracking-[0] sm:text-[62px]">
              Blog
            </h1>
            <p className="mt-2 text-sm font-body text-white/80">
              <Link className="transition-colors hover:text-white" href="/">
                Home
              </Link>{" "}
              / <span className="text-[var(--brand-gold)]">Blog</span>
            </p>
          </div>
        </section>

        <section className="bg-[#efefef]">
          <div className="mx-auto w-full max-w-6xl px-6 py-14 lg:px-10 lg:py-16">
            <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-3">
              {newsPosts.map((item) => (
                <Link key={item.slug} className="group block h-full" href={`/blog/${item.slug}`}>
                  <article className="flex h-full flex-col overflow-hidden border border-[#ddd6ce] bg-white shadow-[0_8px_18px_rgba(20,12,8,0.12)] transition duration-200 group-hover:shadow-[0_12px_24px_rgba(20,12,8,0.18)]">
                    <div className="relative aspect-[4/3] w-full bg-[#8b8b8b]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                      <p className="line-clamp-2 font-display text-[24px] font-normal uppercase leading-[26px] tracking-[0] text-[#3a2b22]">
                        {item.title}
                      </p>
                      <div className="relative mt-4">
                        <span
                          className="pointer-events-none absolute -left-6 top-0 h-full w-[3px] bg-[var(--brand-gold)]"
                          aria-hidden="true"
                        />
                        <p className="line-clamp-3 text-[15px] leading-[1.25] text-[#6d6057] font-body">
                          {item.excerpt}
                        </p>
                      </div>
                      <span className="mt-4 inline-flex w-fit items-center justify-center bg-[var(--brand-gold)] px-6 py-2.5 text-[18px] font-extrabold leading-none tracking-[0] !text-white transition group-hover:bg-[var(--brand-gold-soft)]">
                        Learn More
                      </span>
                    </div>
                  </article>
                </Link>
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
