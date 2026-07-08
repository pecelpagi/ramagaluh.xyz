import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galuh Ramadhan — Software Developer",
  description:
    "I'm Galuh, a software developer focused on building elegant web products with strong user experience, code quality, and thoughtful product execution.",
  keywords: [
    "Galuh Ramadhan",
    "software developer",
    "web developer",
    "frontend developer",
    "Next.js",
    "React",
    "product development",
    "personal website",
  ],
  openGraph: {
    title: "Galuh Ramadhan — Software Developer",
    description:
      "Explore Galuh Ramadhan's work, writing, and experience in software, products, and web development.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Galuh Ramadhan — Software Developer",
    description:
      "Explore Galuh Ramadhan's work, writing, and experience in software, products, and web development.",
  },
};

export default function Home() {
  return (
    <div className="px-4 py-20 md:py-24 intro flex flex-col gap-8">
      <h1 className="intro__hello">
        Hello! <span className="emoji wave-hand animated"></span>
      </h1>
      <p>
        I'm <b className="font-semibold">Galuh</b>, a software developer focused
        on building elegant web products with equal attention to user experience
        and code quality&nbsp;
        <span className="emoji technologist"></span>
      </p>
      <p className="text-[20px] font-normal">
        <a href="/cv/galuh-resume.pdf" className="highlight-link">
          Download resume .pdf
        </a>
      </p>
    </div>
  );
}
