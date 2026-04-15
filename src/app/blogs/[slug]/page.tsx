import { blogsData } from "@/data/blogsData";
import { getBlogBySlug } from "@/lib/blogs";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  // ✅ match blog meta
  const blogMeta = blogsData.find((b) => b.slug === params.slug);

  if (!blogMeta) return notFound();

  // ✅ get markdown content
  const blog = await getBlogBySlug(params.slug);

  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="w-full h-[400px] relative">
        <Image
          src={blogMeta.image}
          alt={blogMeta.title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <p className="text-sm mb-2">
              {blogMeta.category.join(", ")} | {blogMeta.date}
            </p>

            <h1 className="text-3xl md:text-5xl font-heading max-w-[800px]">
              {blogMeta.title}
            </h1>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-[900px] mx-auto px-6 py-16">
        <div
          className="
            prose 
            prose-lg 
            max-w-none
            prose-headings:text-primary
            prose-p:text-primary/80
            prose-strong:text-primary
            prose-blockquote:border-l-primary
            prose-blockquote:text-primary/70
          "
          dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
        />
      </section>

    </div>
  );
}