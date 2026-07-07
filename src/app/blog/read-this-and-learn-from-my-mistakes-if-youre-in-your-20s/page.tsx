import { Metadata } from "next";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { blogPosts } from "@/content/blog-posts";
import { remark } from "remark";
import html from "remark-html";
import { formatLongDate } from "@/lib/date";

const slug = "read-this-and-learn-from-my-mistakes-if-youre-in-your-20s";

function applySizedImageSyntax(contentHtml: string) {
  return contentHtml.replace(
    /<img([^>]*?)alt="([^"|]+)\|(\d+)(?:x(\d+))?"([^>]*?)>/g,
    (_, beforeAlt, altText, width, height, afterAlt) => {
      const sizeAttributes = height
        ? ` width="${width}" height="${height}"`
        : ` width="${width}"`;

      return `<img${beforeAlt}alt="${altText}"${afterAlt}${sizeAttributes}>`;
    },
  );
}

export const metadata: Metadata = {
  title: blogPosts[slug].title,
  description: blogPosts[slug].description,
  keywords: blogPosts[slug].keywords,
  openGraph: {
    title: blogPosts[slug].title,
    description: blogPosts[slug].description,
    type: "article",
    publishedTime: blogPosts[slug].date,
    url: "/blog/" + slug,
  },
};

export default async function Page() {
  const markdownPath = join(process.cwd(), "src/app/blog", slug, "post.md");
  const markdown = await readFile(markdownPath, "utf8");
  const processedContent = await remark().use(html).process(markdown);
  const contentHtml = applySizedImageSyntax(processedContent.toString());

  return (
    <div className="px-4 py-24 mx-auto max-w-3xl flex flex-col gap-4">
      <time dateTime={blogPosts[slug].date}>
        <span className="text-sm text-muted-foreground">
          {formatLongDate(blogPosts[slug].date)}
        </span>
      </time>
      <article
        className="markdown-content flex flex-col gap-4 text-base leading-8"
        dangerouslySetInnerHTML={{
          __html: contentHtml,
        }}
      />
    </div>
  );
}
