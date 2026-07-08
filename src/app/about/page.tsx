import { contentPaddingX } from "@/lib/layout-padding";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — Galuh Muhamad Ramadhan",
  description:
    "Learn more about Galuh Ramadhan, a software engineer with 7+ years of experience building scalable web applications across frontend and backend.",
  keywords: [
    "About Galuh Ramadhan",
    "software engineer",
    "software developer",
    "full-stack developer",
    "frontend developer",
    "backend developer",
    "web applications",
    "engineering experience",
  ],
  openGraph: {
    title: "About — Galuh Muhamad Ramadhan",
    description:
      "Explore Galuh Ramadhan's background, experience, and approach to building reliable, maintainable software products.",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "About — Galuh Muhamad Ramadhan",
    description:
      "Explore Galuh Ramadhan's background, experience, and approach to building reliable, maintainable software products.",
  },
};

export default function About() {
  return (
    <div
      className={cn(
        contentPaddingX,
        `py-20 md:py-24 flex flex-col md:flex-row gap-10 items-center`,
      )}
    >
      <div className="flex grow-2 flex-col gap-6">
        <h1 className="text-4xl font-bold">About</h1>
        <div className="flex flex-col gap-5">
          <p>
            Hey there! I'm Galuh, a software engineer with over 7 years of
            experience building web applications across the frontend and
            backend.
          </p>
          <p>
            I enjoy turning ideas into products, solving challenging technical
            problems, and building software that is scalable, reliable, and easy
            to maintain. I care deeply about code quality, developer experience,
            and creating products that deliver real value to users.
          </p>
          <p>
            When I'm not coding, you'll usually find me exploring new
            technologies, learning better engineering practices, or reflecting
            on ways to grow both professionally and personally.
          </p>
          <p>
            I'm always happy to connect with fellow engineers, founders, and
            teams working on meaningful problems.
          </p>
          <p>
            If you'd like to get in touch, please feel free to reach out to me
            at{" "}
            <a
              href="mailto:galuhrmdh@gmail.com"
              className="font-bold underline underline-offset-[4px]"
            >
              galuhrmdh@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="grow-1 md:min-w-[300px]">
        <Image
          src="/img/pp.jpeg"
          alt="Galuh Muhamad Ramadhan"
          width={400}
          height={300}
          priority
          className="rounded-xl w-full max-w-[300px] h-auto rotate-3"
        />
      </div>
    </div>
  );
}
