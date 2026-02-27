import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CtaBand from "../../components/CtaBand";
import { getNewsPost, newsPosts } from "../../news/data";

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = getNewsPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--brand-deep)] text-[var(--brand-cream)]">
      <Header />
      <main className="bg-[#efefef] text-[#3a2b22]">
        <section className="relative bg-[#ece8df]">
          <div className="relative z-20 mx-auto w-full max-w-6xl px-6 pb-36 pt-28 lg:px-10 lg:pb-40 lg:pt-32">
            <h1 className="max-w-4xl font-display text-[36px] font-normal uppercase leading-[0.9] tracking-[0] text-[#32271f] sm:text-[46px] lg:text-[56px]">
              {post.title}
            </h1>
            <p className="mt-3 text-sm text-[#695c53] font-body">
              <Link className="transition-colors hover:text-[#3a2b22]" href="/">
                Home
              </Link>{" "}
              /{" "}
              <Link className="transition-colors hover:text-[#3a2b22]" href="/blog">
                Blog
              </Link>{" "}
              / <span className="text-[var(--brand-gold)]">{post.title}</span>
            </p>
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-full z-10">
            <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
              <div className="relative aspect-[16/7] w-full overflow-hidden bg-[#8b8b8b] shadow-[0_8px_22px_rgba(20,12,8,0.14)]">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#efefef]">
          <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-0 lg:px-10 lg:pb-20">
            <div className="aspect-[16/7] w-full" aria-hidden />

            <div className="mt-3 flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-[#7b6d63] font-body">
              <span>{post.category}</span>
              <span className="h-1 w-1 rounded-full bg-[#c9b69a]" aria-hidden />
              <span>{post.date}</span>
            </div>

            <div className="mt-10 max-w-4xl space-y-11 text-left">
              {post.sections.map((section) => (
                <article key={section.title} className="space-y-3">
                  <h2 className="font-display text-[24px] font-normal uppercase leading-[0.9] tracking-[0] text-[#3a2b22] sm:text-[28px] lg:text-[31px]">
                    {section.title}
                  </h2>
                  {section.body.map((paragraph, index) => (
                    <p
                      key={`${section.title}-${index}`}
                      className="text-justify text-[16px] leading-[1] tracking-[0] text-[#6d6057] font-body"
                    >
                      {paragraph}
                    </p>
                  ))}
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
