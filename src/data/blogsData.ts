export type Blog = {
  id: number;
  title: string;
  category: string[];
  date: string;
  description: string;
  image: string;
};

export const blogsData: Blog[] = [
  {
    id: 1,
    title: "How Long Do Dermal Fillers Last?",
    category: ["Wrinkle Prevention"],
    date: "April 12, 2026",
    description:
      "The demand for dermal fillers has significantly increased worldwide as a non-surgical way to rejuvenate the skin. These treatments help reduce fine lines, restore lost volume, and enhance facial contours, offering a refreshed and youthful appearance without downtime.",
    image: "/images/blog/01.jpg",
  },
  {
    id: 2,
    title: "Simple Results: How Long Do They Last?",
    category: ["Botox"],
    date: "April 12, 2026",
    description:
      "Understanding how long aesthetic treatments last is essential for planning your skincare journey. Results vary based on lifestyle, skin type, and product used, but with proper care and maintenance, you can extend the longevity and enjoy consistent improvements over time.",
    image: "/images/blog/02.jpg",
  },
  {
    id: 3,
    title: "Sculptra Results: How Long Do They Last?",
    category: ["Skin Care"],
    date: "April 12, 2026",
    description:
      "Sculptra works differently from traditional fillers by stimulating your body’s natural collagen production. Over time, this results in gradual volume restoration and improved skin texture, making it a long-lasting and subtle solution for facial rejuvenation.",
    image: "/images/blog/03.jpg",
  },
  {
    id: 4,
    title: "PDO Threads vs Fillers: Which is Better?",
    category: ["Anti Aging"],
    date: "April 12, 2026",
    description:
      "PDO threads and dermal fillers both offer anti-aging benefits, but they work in different ways. Threads lift and tighten the skin, while fillers restore volume. Choosing the right option depends on your goals, facial structure, and desired outcome.",
    image: "/images/blog/04.jpg",
  },
  {
    id: 5,
    title: "What Causes Volume Loss in the Face as We Age?",
    category: ["Wellness"],
    date: "April 12, 2026",
    description:
      "As we age, our skin loses collagen, fat, and elasticity, leading to volume loss and sagging. Environmental factors, lifestyle habits, and genetics also play a role. Understanding these causes helps in selecting the right treatments to maintain a youthful look.",
    image: "/images/blog/05.jpg",
  },
  {
    id: 6,
    title: "How Long Does Botox Last in Forehead?",
    category: ["Botox"],
    date: "April 12, 2026",
    description:
      "Botox is a popular solution for reducing forehead lines and wrinkles. Typically lasting between three to four months, results can vary depending on muscle activity and metabolism. Regular treatments can help maintain smoother and more youthful skin.",
    image: "/images/blog/06.jpg",
  },
  {
    id: 7,
    title: "How Long Do Dermal Fillers Last?",
    category: ["Botox", "Wrinkle Prevention"],
    date: "April 12, 2026",
    description:
      "Dermal fillers provide a quick and effective way to enhance facial features and reduce signs of aging. Depending on the type used, results can last several months to over a year, offering flexibility for those seeking non-permanent cosmetic improvements.",
    image: "/images/blog/01.jpg",
  },
  {
    id: 8,
    title: "Simple Results: How Long Do They Last?",
    category: ["Botox"],
    date: "April 12, 2026",
    description:
      "Achieving long-lasting aesthetic results requires consistency and proper aftercare. While treatments provide visible improvements, maintaining hydration, sun protection, and a healthy routine ensures that your results remain effective for a longer period.",
    image: "/images/blog/02.jpg",
  },
  {
    id: 9,
    title: "Sculptra Results: How Long Do They Last?",
    category: ["Skin Care"],
    date: "April 12, 2026",
    description:
      "Unlike instant fillers, Sculptra gradually enhances your skin by boosting collagen levels over time. This leads to natural-looking results that improve steadily, making it an excellent choice for those seeking subtle yet long-term rejuvenation.",
    image: "/images/blog/03.jpg",
  },
  {
    id: 10,
    title: "PDO Threads vs Fillers: Which is Better?",
    category: ["Anti Aging"],
    date: "April 12, 2026",
    description:
      "When comparing PDO threads and fillers, it’s important to consider your aesthetic goals. Threads are ideal for lifting sagging skin, while fillers add volume. A personalized consultation helps determine the best approach for achieving balanced results.",
    image: "/images/blog/04.jpg",
  },
    {
    id: 11,
    title: "Sculptra Results: How Long Do They Last?",
    category: ["Skin Care"],
    date: "April 12, 2026",
    description:
      "Unlike instant fillers, Sculptra gradually enhances your skin by boosting collagen levels over time. This leads to natural-looking results that improve steadily, making it an excellent choice for those seeking subtle yet long-term rejuvenation.",
    image: "/images/blog/03.jpg",
  },
  {
    id: 12,
    title: "PDO Threads vs Fillers: Which is Better?",
    category: ["Anti Aging"],
    date: "April 12, 2026",
    description:
      "When comparing PDO threads and fillers, it’s important to consider your aesthetic goals. Threads are ideal for lifting sagging skin, while fillers add volume. A personalized consultation helps determine the best approach for achieving balanced results.",
    image: "/images/blog/04.jpg",
  },
];


// ✅ FEATURED BLOG
export const featuredBlog = blogsData[0];

// ✅ PAGINATION
export const BLOGS_PER_PAGE = 6;