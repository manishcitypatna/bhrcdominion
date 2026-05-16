export type Blog = {
  id: number;
  slug: string; 
  title: string;
  category: string[];
  date: string;
  description: string;
  image: string;
};

export const blogsData: Blog[] = [
  {
    id: 1,
    slug: "how-long-dermal-fillers-last",
    title: "How Long Do Dermal Fillers Last?",
    category: ["Wrinkle Prevention"],
    date: "April 12, 2026",
    description:
      "The demand for dermal fillers has significantly increased worldwide as a non-surgical way to rejuvenate the skin...",
    image: "/images/blog/01.jpg",
  },
  {
    id: 2,
    slug: "simple-results-how-long-do-they-last",
    title: "Simple Results: How Long Do They Last?",
    category: ["Botox"],
    date: "April 12, 2026",
    description:
      "Understanding how long aesthetic treatments last is essential for planning your skincare journey...",
    image: "/images/blog/02.jpg",
  },
  {
    id: 3,
    slug: "sculptra-results-how-long-do-they-last",
    title: "Sculptra Results: How Long Do They Last?",
    category: ["Skin Care"],
    date: "April 12, 2026",
    description:
      "Sculptra works differently from traditional fillers by stimulating your body’s natural collagen production...",
    image: "/images/blog/03.jpg",
  },
  {
    id: 4,
    slug: "pdo-threads-vs-fillers-which-is-better",
    title: "PDO Threads vs Fillers: Which is Better?",
    category: ["Anti Aging"],
    date: "April 12, 2026",
    description:
      "PDO threads and dermal fillers both offer anti-aging benefits, but they work in different ways...",
    image: "/images/blog/04.jpg",
  },
  {
    id: 5,
    slug: "what-causes-volume-loss-in-face",
    title: "What Causes Volume Loss in the Face as We Age?",
    category: ["Wellness"],
    date: "April 12, 2026",
    description:
      "As we age, our skin loses collagen, fat, and elasticity, leading to volume loss and sagging...",
    image: "/images/blog/05.jpg",
  },
  {
    id: 6,
    slug: "how-long-does-botox-last-forehead",
    title: "How Long Does Botox Last in Forehead?",
    category: ["Botox"],
    date: "April 12, 2026",
    description:
      "Botox is a popular solution for reducing forehead lines and wrinkles...",
    image: "/images/blog/06.jpg",
  },
  {
    id: 7,
    slug: "dermal-fillers-duration-guide",
    title: "How Long Do Dermal Fillers Last?",
    category: ["Botox", "Wrinkle Prevention"],
    date: "April 12, 2026",
    description:
      "Dermal fillers provide a quick and effective way to enhance facial features...",
    image: "/images/blog/01.jpg",
  },
  {
    id: 8,
    slug: "long-lasting-aesthetic-results-guide",
    title: "Simple Results: How Long Do They Last?",
    category: ["Botox"],
    date: "April 12, 2026",
    description:
      "Achieving long-lasting aesthetic results requires consistency and proper aftercare...",
    image: "/images/blog/02.jpg",
  },
  {
    id: 9,
    slug: "sculptra-collagen-benefits",
    title: "Sculptra Results: How Long Do They Last?",
    category: ["Skin Care"],
    date: "April 12, 2026",
    description:
      "Unlike instant fillers, Sculptra gradually enhances your skin by boosting collagen levels...",
    image: "/images/blog/03.jpg",
  },
  {
    id: 10,
    slug: "pdo-vs-fillers-comparison",
    title: "PDO Threads vs Fillers: Which is Better?",
    category: ["Anti Aging"],
    date: "April 12, 2026",
    description:
      "When comparing PDO threads and fillers, it’s important to consider your aesthetic goals...",
    image: "/images/blog/04.jpg",
  },
  {
    id: 11,
    slug: "skinpen-microneedling-benefits-for-skin-texture-and-scars",
    title: "Everything You Need to Know About SkinPen Microneedling",
    category: ["Microneedling"],
    date: "May 17, 2026",
    description:
      "Discover how SkinPen Microneedling helps improve acne scars, skin texture, fine lines, and collagen production with minimal downtime.",
    image: "/images/blog/04.jpg",
  },
];

// FEATURED BLOG
export const featuredBlog = blogsData[0];

// PAGINATION
export const BLOGS_PER_PAGE = 6;