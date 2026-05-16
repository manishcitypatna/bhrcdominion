import Image from "next/image";
import Link from "next/link";

const CustomImage = (props: any) => {
  return (
    <div className="relative w-full aspect-video my-12 rounded-2xl overflow-hidden shadow-xl group">
      <Image
        src={props.src}
        alt={props.alt || "Article Image"}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {props.caption && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white text-sm">
          {props.caption}
        </div>
      )}
    </div>
  );
};

const CustomQuote = (props: any) => {
  return (
    <blockquote className="relative py-8 my-12 border-none italic text-2xl md:text-3xl font-heading text-primary/90 leading-relaxed">
      <span className="absolute -top-4 -left-6 text-7xl text-secondary/20 font-serif leading-none">"</span>
      {props.children}
      <span className="absolute -bottom-12 -right-6 text-7xl text-secondary/20 font-serif leading-none rotate-180">"</span>
    </blockquote>
  );
};

const CustomCallout = (props: any) => {
  return (
    <div className="my-12 p-8 bg-bg-light rounded-2xl border-l-4 border-accent shadow-sm">
      <div className="flex gap-4">
        <div className="text-accent shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        </div>
        <div className="text-primary/80 font-medium">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export const mdxComponents = {
  img: CustomImage,
  blockquote: CustomQuote,
  Callout: CustomCallout,
  a: (props: any) => (
    <Link 
      href={props.href} 
      className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent transition-all font-medium"
      {...props}
    />
  ),
  h1: (props: any) => (
    <h1 className="text-4xl md:text-5xl font-heading text-primary mt-20 mb-8 leading-tight" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-3xl md:text-4xl font-heading text-primary mt-16 mb-6 leading-tight border-b border-primary/5 pb-4" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-2xl md:text-3xl font-heading text-primary mt-12 mb-4 leading-tight" {...props} />
  ),
  p: (props: any) => (
    <p className="text-lg md:text-xl text-primary/80 leading-relaxed mb-8" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-outside ml-6 space-y-4 mb-8 text-primary/80 text-lg md:text-xl" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-outside ml-6 space-y-4 mb-8 text-primary/80 text-lg md:text-xl" {...props} />
  ),
  li: (props: any) => (
    <li className="pl-2" {...props} />
  ),
  strong: (props: any) => (
    <strong className="font-bold text-primary" {...props} />
  ),
};
