import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogArticleDirectory = path.join(process.cwd(), "src/data/blogArticle");

export interface BlogArticleMetadata {
  title: string;
  description: string;
  date: string;
  author: string;
  categories: string[];
  coverImage: string;
  readingTime: string;
  slug: string;
}

export interface BlogArticle {
  metadata: BlogArticleMetadata;
  content: string;
}

/**
 * Get all blog article slugs from the MDX files
 */
export function getAllBlogSlugs() {
  if (!fs.existsSync(blogArticleDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(blogArticleDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

/**
 * Get a single blog article by its slug
 */
export async function getBlogArticleBySlug(slug: string): Promise<BlogArticle | null> {
  try {
    const fullPath = path.join(blogArticleDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      metadata: {
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        author: data.author || "Admin",
        categories: data.categories || data.tags || [],
        coverImage: data.coverImage || "/images/blog/placeholder.jpg",
        readingTime: data.readingTime || "5 min read",
        slug,
      },
      content,
    };
  } catch (error) {
    console.error(`Error loading blog article ${slug}:`, error);
    return null;
  }
}

/**
 * Get all blog articles metadata
 */
export async function getAllBlogArticlesMetadata(): Promise<BlogArticleMetadata[]> {
  const slugs = getAllBlogSlugs();
  const articles = await Promise.all(
    slugs.map(async (slug) => {
      const article = await getBlogArticleBySlug(slug);
      return article ? article.metadata : null;
    })
  );

  return articles
    .filter((article): article is BlogArticleMetadata => article !== null)
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}
