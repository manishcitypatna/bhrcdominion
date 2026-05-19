# Blog System Architecture Guide

This project uses a modern MDX-based blog architecture built with Next.js App Router and Tailwind CSS.

The system is designed to be:

* SEO-friendly
* Easy to scale
* Developer-friendly
* CMS-ready in the future
* Flexible for editorial layouts and luxury content presentation

---

# 1. Content & Metadata

## `/src/data/blogArticle`

Contains all `.mdx` article files.

This is where the actual blog content lives.

### Use this folder when:

* Adding a new blog article
* Editing article text
* Updating headings
* Adding/removing images
* Changing article structure
* Adding quotes, lists, or callouts

### Example

```txt
/src/data/blogArticle/
  skinpen-microneedling-benefits.mdx
  botox-aftercare-guide.mdx
  salmon-dna-treatment.mdx
```

### Supported Content

The MDX system supports:

* Headings
* Paragraphs
* Bold text
* Quotes
* Lists
* Images
* Embedded JSX layouts
* Editorial section structures

### Image Handling

All article images currently use Cloudinary URLs.

Example:

```mdx
![Treatment Image](https://res.cloudinary.com/your-cloud/image/upload/example.jpg)
```

---

## `/src/data/blogsData.ts`

This file acts as the master metadata index for the blog system.

It powers:

* Blog listing page
* Featured blog sections
* Blog cards
* Category filtering
* Article hero metadata

### Touch this file when:

* Adding a new blog
* Updating title/slug/description
* Changing categories
* Updating preview image
* Updating publish date

### Important

Adding a new `.mdx` file alone is NOT enough.

Every article must also have an entry inside:

```txt
blogsData.ts
```

Otherwise it will not appear in the blog listing grid.

---

# 2. Pages & Layouts

## `/app/blogs/page.tsx`

Main blog listing page.

Responsible for:

* Blog grid
* Page layout
* Featured article section
* Search/filter experience
* Pagination structure

### Touch this file when:

* Redesigning blog page layout
* Changing section spacing
* Adding search
* Adding sorting
* Modifying featured article placement
* Changing grid structure

---

## `/app/blogs/[slug]/page.tsx`

Dynamic article page template.

Responsible for:

* Hero section
* Article rendering
* Metadata display
* Article layout structure
* Typography container

### Touch this file when:

* Redesigning article hero
* Adjusting article spacing
* Changing editorial layout
* Updating reading experience
* Adding share/CTA sections
* Modifying article width

---

# 3. Reusable Components

## `BlogCard.tsx`

Reusable blog preview card used in grids.

### Touch this file when:

* Redesigning blog cards
* Updating hover effects
* Adjusting image ratios
* Refining typography
* Changing spacing or button styles

---

## `FeaturedBlogCard.tsx`

Large featured article component.

### Touch this file when:

* Updating featured article layout
* Changing image placement
* Adjusting editorial spacing
* Modifying CTA styling

---

## `BlogSidebar.tsx`

Category filtering sidebar.

### Touch this file when:

* Adding new categories
* Updating filter logic
* Redesigning sidebar UI
* Changing filter interaction behavior

---

## `MDXComponents.tsx`

Global styling system for article content.

This controls how MDX elements render site-wide.

### Responsible for:

* H1/H2/H3 styling
* Paragraph spacing
* Blockquotes
* Lists
* Images
* Editorial typography rhythm
* Reusable article UI blocks

### Touch this file when:

* Refining article typography
* Updating prose styling
* Adding reusable editorial components
* Creating luxury content presentation styles

---

# 4. System Logic (Core Engine)

## `/lib/blog.ts`

Core utility responsible for:

* Reading `.mdx` files
* Parsing frontmatter
* Generating slugs
* Returning article metadata
* Rendering MDX content

### Touch this file ONLY when:

* Changing content loading behavior
* Adding new frontmatter fields
* Updating MDX parsing logic
* Modifying article fetching system

Avoid editing unless necessary.

---

# Frontmatter Structure

Each `.mdx` file should follow this structure:

```mdx
---
title: "The Real Benefits of SkinPen Microneedling"
description: "Discover how SkinPen improves acne scars, texture, and collagen production."
date: "2026-05-17"
author: "BHRC Team"
categories: ["Microneedling"]
coverImage: "https://res.cloudinary.com/..."
readingTime: "6 min read"
---
```

---

# Developer Quick Reference

## Add New Blog

1. Create new `.mdx` file inside:

```txt
/src/data/blogArticle
```

2. Add metadata entry inside:

```txt
blogsData.ts
```

---

## Add New Category

Update categories array inside:

```txt
BlogSidebar.tsx
```

---

## Change Article Styling

Modify:

* `MDXComponents.tsx`
* `[slug]/page.tsx`

---

## Redesign Blog Cards

Modify:

* `BlogCard.tsx`
* `FeaturedBlogCard.tsx`

---

## Change Blog Page Layout

Modify:

```txt
/app/blogs/page.tsx
```

---

# Recommended Content Strategy

The blog system is designed for:

* Luxury editorial layouts
* Educational treatment articles
* SEO-focused content
* Long-form skincare guides
* Conversion-focused medspa content

Keep articles:

* visually clean
* educational
* easy to scan
* medically trustworthy
* image-rich
* mobile-friendly

---

# Future Scalability

This architecture is intentionally designed to support future migration to:

* Sanity CMS
* Payload CMS
* Contentful
* Headless CMS platforms

without rebuilding the frontend structure.
