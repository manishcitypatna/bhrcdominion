"use client";

const categories = [
  "All",
  "Botox",
  "Skin Care",
  "Hair Restoration",
  "Body Contouring",
  "Weight Loss",
  "Anti Aging",
  "Microneedling",
  "Wellness",
  "Wrinkle Prevention",
];

export default function BlogSidebar({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (category: string) => void;
}) {
  return (
    <div className="w-[260px] hidden lg:block">

      <div className="bg-white rounded-[8px] p-6">

        <h3 className="text-primary font-heading text-[20px] mb-4">
          Recent Blogs
        </h3>

        <p className="text-primary/60 text-sm mb-3">All Filter</p>

        <ul className="flex flex-col gap-2">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => onSelect(cat)}
              className={`
                cursor-pointer text-[14px] transition
                ${selected === cat ? "text-primary font-medium" : "text-primary/70"}
                hover:text-primary
              `}
            >
              {cat}
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}