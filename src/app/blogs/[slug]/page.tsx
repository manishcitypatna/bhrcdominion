import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogArticleBySlug, getAllBlogSlugs } from "@/lib/blog";
import { mdxComponents } from "@/components/blog/MDXComponents";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getBlogArticleBySlug(params.slug);

  if (!article) {
    return notFound();
  }

  const { metadata, content } = article;

  return (
    <main className="relative bg-white min-h-screen">
      {/* HERO SECTION */}
      <header className="relative w-full h-[60vh] md:h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src={metadata.coverImage}
          alt={metadata.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="container-custom relative z-10 text-white text-center">
          <Link 
            href="/blogs" 
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 hover:text-secondary transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {metadata.categories.map((cat) => (
              <span key={cat} className="px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider border border-white/20">
                {cat}
              </span>
            ))}
          </div>

          <h1 className="text-[clamp(32px,5vw,72px)] font-heading leading-[1.1] max-w-4xl mx-auto mb-8 text-balance">
            {metadata.title}
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm font-medium text-white/90">
            <div className="flex items-center gap-2">
              <User size={18} className="text-secondary" />
              <span>{metadata.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-secondary" />
              <span>{new Date(metadata.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-secondary" />
              <span>{metadata.readingTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* ARTICLE CONTENT */}
      <article className="relative -mt-16 pb-32 px-6">
        <div className="max-w-[800px] mx-auto bg-white rounded-t-3xl md:rounded-3xl shadow-2xl shadow-primary/5 p-8 md:p-16 lg:p-24">
          <div className="prose prose-xl prose-primary max-w-none prose-headings:font-heading prose-headings:font-normal prose-headings:text-primary prose-p:text-primary/80 prose-p:leading-relaxed prose-blockquote:border-none prose-img:rounded-2xl">
            <MDXRemote source={content} components={mdxComponents} />
          </div>
          
          {/* ARTICLE FOOTER */}
          <footer className="mt-20 pt-10 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-primary/40 font-bold">Categories</span>
              <div className="flex gap-2">
                {metadata.categories.map(cat => (
                  <Link key={cat} href={`/blogs?category=${cat}`} className="text-sm font-medium text-primary hover:text-accent transition-colors">
                    #{cat}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <Link 
                href="/consultation" 
                className="px-8 py-3 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Book a Consultation
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </main>
  );
}
