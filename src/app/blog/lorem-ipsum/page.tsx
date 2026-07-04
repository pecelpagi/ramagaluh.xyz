import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building Modern Web Apps with Next.js | Galuh's Blog",
  description:
    "Learn why Next.js is one of the best frameworks for building modern web applications, with real-world examples from my experience.",
  keywords: ["Next.js", "React", "web development", "frontend", "SEO"],
  openGraph: {
    title: "Building Modern Web Apps with Next.js",
    description:
      "Learn why Next.js is one of the best frameworks for building modern web applications.",
    type: "article",
    publishedTime: "2026-01-01",
    url: "/blog/lorem-ipsum",
  },
};

export default function Page() {
  return (
    <div className="py-24 flex flex-col gap-6 max-w-3xl">
      <div className="text-sm font-normal text-gray-500">2026-01-01</div>
      <h1 className="text-4xl font-bold">
        Building Modern Web Apps with Next.js
      </h1>
      <div className="text-base font-normal text-gray-700 space-y-4">
        <p>
          In today's fast-paced digital world, building scalable and
          maintainable web applications is more important than ever. Next.js has
          emerged as one of the most popular frameworks for React developers,
          offering a great developer experience and powerful features out of the
          box.
        </p>
        <h2 className="text-2xl font-semibold">Why Next.js?</h2>
        <p>
          Next.js provides several key benefits that make it an excellent choice
          for modern web development:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>
            Server-side rendering (SSR) and static site generation (SSG) for
            better performance and SEO
          </li>
          <li>File-system based routing that simplifies navigation</li>
          <li>API routes for building backend functionality</li>
          <li>Automatic code splitting for faster page loads</li>
        </ul>
        <h2 className="text-2xl font-semibold">My Experience</h2>
        <p>
          Over the years, I've had the opportunity to work on several projects
          using Next.js, ranging from small business websites to complex SaaS
          applications. The flexibility and power of the framework have allowed
          me to deliver high-quality solutions quickly.
        </p>
        <p>
          One of my favorite projects was building Neume, a platform that helps
          users discover beauty clinics in Seoul. Using Next.js, we were able to
          create a fast, SEO-friendly application that provided a great user
          experience.
        </p>
        <h2 className="text-2xl font-semibold">Conclusion</h2>
        <p>
          If you're looking to build modern web applications, I highly recommend
          giving Next.js a try. It's a powerful framework that can help you
          build better applications faster.
        </p>
      </div>
    </div>
  );
}
