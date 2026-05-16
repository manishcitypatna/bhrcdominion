import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

// get single blog by slug
export async function getBlogBySlug(slug: string) {
  const fullPath = path.join(blogsDirectory, `${slug}.md`);

  // read file
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // parse frontmatter
  const { data, content } = matter(fileContents);

  // convert markdown → HTML
  const processedContent = await remark()
    .use(html)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    ...data,
    contentHtml,
  };
}