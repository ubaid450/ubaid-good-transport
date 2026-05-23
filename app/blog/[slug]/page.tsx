import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { getCmsContent } from "@/lib/cms";
import { siteConfig } from "@/data/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const cms = await getCmsContent();
  return cms.blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cms = await getCmsContent();
  const post = cms.blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const cms = await getCmsContent();
  const post = cms.blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PageHero eyebrow={post.category} title={post.title} description={post.excerpt} />
      <article className="section-pad bg-white">
        <div className="container-pad max-w-3xl">
          <p className="text-sm font-semibold text-slate-500">
            {new Date(post.date).toLocaleDateString("en-PK", { month: "long", day: "numeric", year: "numeric" })} - {post.readTime}
          </p>
          <div className="mt-8 space-y-6 text-base leading-8 text-slate-700" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </>
  );
}
