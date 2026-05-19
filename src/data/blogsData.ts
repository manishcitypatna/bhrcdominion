export type Blog = {
  id: number;
  slug: string; 
  title: string;
  category: string[];
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  isFeatured?: boolean;
};

export const blogsData: Blog[] = [
  {
    id: 1,
    slug: "how-long-do-sculptra-results-last",
    title: "Sculptra Results: How Long Do They Last? The Truth Might Surprise You",
    category: ["Injectables", "Anti-Aging", "Skin Care"],
    date: "May 19, 2026",
    description: "Discover the truth about Sculptra longevity. Learn how this unique biostimulator rebuilds natural collagen to deliver youthful, radiant results that can last up to 3 years.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1000",
    imageAlt: "A woman with radiant, youthful skin showcasing natural-looking facial rejuvenation results from Sculptra.",
    isFeatured: true
  },
  {
    id: 2,
    slug: "sculptra-san-antonio-how-many-sessions-do-you-need",
    title: "Sculptra San Antonio: How Many Sessions Do You Need for Optimal Results?",
    category: ["Injectables", "Anti Aging", "Skin Care"],
    date: "March 19, 2026",
    description: "Wondering how many Sculptra sessions you need? Discover the timeline, factors that influence your treatment plan, and how to get long-lasting facial rejuvenation.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1000",
    imageAlt: "A professional injector preparing a treatment in a modern medical spa setting.",
    isFeatured: false
  },
  {
    id: 3,
    slug: "how-long-dermal-fillers-last",
    title: "How Long Do Dermal Fillers Last?",
    category: ["Wrinkle Prevention", "Botox"],
    date: "April 12, 2026",
    description: "The demand for dermal fillers has significantly increased worldwide as a non-surgical way to rejuvenate the skin. Learn about their duration and factors that influence longevity.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Close-up of a woman's face with dermal filler injection points marked",
    isFeatured: true
  },
  {
    id: 4,
    slug: "pdo-threads-vs-fillers-which-is-better",
    title: "PDO Threads vs Fillers: Which is Better?",
    category: ["Anti Aging"],
    date: "April 12, 2026",
    description: "PDO threads and dermal fillers both offer anti-aging benefits, but they work in different ways. Find out which treatment is right for your aesthetic goals.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Comparison of PDO thread lift and dermal filler techniques",
    isFeatured: true
  },
  {
    id: 5,
    slug: "skinpen-microneedling-benefits-for-skin-texture-and-scars",
    title: "The Real Benefits of SkinPen Microneedling for Skin Texture and Scars",
    category: ["Microneedling"],
    date: "May 17, 2026",
    description: "Discover how SkinPen Microneedling helps improve acne scars, skin texture, fine lines, and collagen production with minimal downtime.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "SkinPen Microneedling device being used for skin texture improvement",
    isFeatured: false
  }
];

// FEATURED BLOG
export const featuredBlog = blogsData[0];

// PAGINATION
export const BLOGS_PER_PAGE = 6;
