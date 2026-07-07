import type { Metadata } from "next";
import { blogPosts } from "@/content/blog-posts";
import { formatLongDate } from "@/lib/date";

const postEntries = Object.entries(blogPosts) as Array<
  [keyof typeof blogPosts, (typeof blogPosts)[keyof typeof blogPosts]]
>;

export const metadata: Metadata = {
  title: "Blog — Galuh Muhamad Ramadhan",
  description:
    "Read notes and essays by Galuh Muhamad Ramadhan on software, products, life lessons, and ideas learned through study and experience.",
  keywords: [
    "Galuh Ramadhan blog",
    "software blog",
    "product thinking",
    "web development articles",
    "engineering notes",
    "life lessons",
    "learning in public",
    "software essays",
  ],
  openGraph: {
    title: "Blog — Galuh Muhamad Ramadhan",
    description:
      "Explore writing on software, products, life lessons, and ongoing learning by Galuh Muhamad Ramadhan.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Blog — Galuh Muhamad Ramadhan",
    description:
      "Explore writing on software, products, life lessons, and ongoing learning by Galuh Muhamad Ramadhan.",
  },
};

export default function Blog() {
  return (
    <div className="py-24 flex flex-col gap-10">
      <div className="flex flex-col gap-6 px-4 ">
        <h1 className="text-4xl font-bold">Blog.</h1>
        <p>Read my latest blog posts.</p>
        {/* <p>A collection of thoughts on software, products, life, and learning.</p> */}
      </div>
      <div className="flex flex-col gap-6 space-y-6">
        {postEntries.map(([key, post]) => (
          <div key={key} className="flex flex-col md:flex-row md:gap-20">
            <div className="hidden md:block px-4 py-5">
              <p className="text-sm font-normal text-nowrap">
                {formatLongDate(post.date)}
              </p>
            </div>
            <a
              href={`/blog/${key}`}
              className="group flex flex-col grow p-4 transition-colors duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 md:rounded-md"
            >
              <div className="block md:hidden mb-4">
                <p className="text-sm font-normal">
                  {formatLongDate(post.date)}
                </p>
              </div>
              <h2 className="text-[18px] font-bold">{post.title}</h2>
              <p className="text-sm mt-2 font-normal text-muted-foreground">
                {post.description}
              </p>
              <p className="text-[12px] group-hover:text-[#007bff] mt-4 text-[#007bff]">
                Read More&nbsp;
                <span className="text-[12px] group-hover:text-[#007bff]">
                  &rarr;
                </span>
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
