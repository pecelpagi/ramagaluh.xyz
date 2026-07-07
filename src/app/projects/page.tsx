import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects — Galuh Muhamad Ramadhan",
  description:
    "Explore selected projects by Galuh Muhamad Ramadhan, including web applications, dashboards, APIs, and product experiences across frontend and backend.",
  keywords: [
    "Galuh Ramadhan projects",
    "software engineering portfolio",
    "web application projects",
    "frontend portfolio",
    "backend portfolio",
    "Next.js projects",
    "React projects",
    "software developer portfolio",
  ],
  openGraph: {
    title: "Projects — Galuh Muhamad Ramadhan",
    description:
      "Browse product, web, and API work by Galuh Muhamad Ramadhan across multiple industries and platforms.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Projects — Galuh Muhamad Ramadhan",
    description:
      "Browse product, web, and API work by Galuh Muhamad Ramadhan across multiple industries and platforms.",
  },
};

export default function Projects() {
  return <ProjectsClient />;
}
