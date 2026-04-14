import BlogCard from "./BlogCard";
import { Blog } from "@/data/blogsData";

export default function BlogGrid({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog, index) => (
        <BlogCard key={blog.id} blog={blog} index={index} />
      ))}
    </div>
  );
}