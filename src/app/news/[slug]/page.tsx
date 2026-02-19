import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CtaBand from "../../components/CtaBand";
import { getNewsPost, newsPosts } from "../data";

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const post = getNewsPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--brand-deep)] text-[var(--brand-cream)]">
      <Header />
      <main className="bg-white text-[#3a2b22]">
        <section className="bg-[#f7efe3]">
          <div className="mx-auto w-full max-w-6xl px-6 pb-32 pt-12 lg:px-10 lg:pb-36 lg:pt-16">
            <h1 className="font-display text-[36px] font-bold uppercase leading-none tracking-[0] text-[#3a2b22] md:text-[44px]">
              {post.title}
            </h1>
            <p className="mt-3 text-sm text-[#6d6057] font-body">
              <Link className="hover:text-[#3a2b22]" href="/">
                Home
              </Link>{" "}
              /{" "}
              <Link className="hover:text-[#3a2b22]" href="/news">
                Blog
              </Link>{" "}
              / <span className="text-[var(--brand-gold)]">{post.title}</span>
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-10 lg:px-10 lg:pb-20">
            <div className="relative z-10 -mt-20 aspect-[16/7] w-full overflow-hidden border border-[#e7e1da] bg-[#c8c0b6] shadow-[0_12px_30px_rgba(20,12,8,0.12)] lg:-mt-24">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-[#6d6057] font-body">
              <span>{post.category}</span>
              <span className="h-1 w-1 rounded-full bg-[#c9b69a]" aria-hidden />
              <span>{post.date}</span>
            </div>

            <div className="mt-8 space-y-8 text-left">
              {post.sections.map((section) => (
                <div key={section.title} className="space-y-3">
                  <h2 className="font-display text-[22px] font-normal uppercase leading-[26px] tracking-[0] text-[#3a2b22]">
                    {section.title}
                  </h2>
                  {section.body.map((paragraph, index) => (
                    <p
                      key={`${section.title}-${index}`}
                      className="text-[16px] leading-[24px] text-[#6d6057] font-body"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
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
