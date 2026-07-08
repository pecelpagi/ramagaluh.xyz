"use client";

import Image from "next/image";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

const projects_data: Project[] = [
  {
    title: "Majoo Sales Dashboard Web Application",
    description: "Real-time sales dashboard for Indonesian business owners.",
    imageUrl: "/img/projects/majoo-dashboard.png",
    link: "https://dashboard.majoo.id",
  },
  {
    title: "Majoo Internal Dashboard Web Application",
    description:
      "Internal dashboard for monitoring user activity and workflows.",
    imageUrl: "/img/projects/majoo-cockpit.png",
    link: "https://cockpit.mangkujagat.com",
  },
  {
    title: "SIMPEG",
    description: "Employee management system for personnel data and admin.",
    imageUrl: "/img/projects/simpeg.png",
    link: "https://simpeg.batukota.go.id",
  },
  {
    title: "SIMPEG REST API",
    description: "RESTful API for SIMPEG with caching & async messaging.",
    imageUrl: "/img/projects/simpeg-api.png",
    link: "https://api-simpeg.batukota.go.id",
  },
  {
    title: "Majoo Website",
    description: "Official Majoo website showcasing products and services.",
    imageUrl: "/img/projects/majoo.png",
    link: "https://majoo.id",
  },
  {
    title: "Neume",
    description:
      "Seoul beauty clinic discovery & appointment booking platform.",
    imageUrl: "/img/projects/neume.png",
    link: "https://neume.co",
  },
  {
    title: "Mo & Jeil Hair Surgery Website",
    description: "Multilingual hair surgery service & booking website.",
    imageUrl: "/img/projects/mo-and-jeil.png",
    link: "https://mo-and-jeil.neume.co",
  },
  {
    title: "Neume Partner Web Application",
    description: "Partner app for managing reservations and clinic data.",
    imageUrl: "/img/projects/neume-partner.png",
    link: "https://partners.neume.co",
  },
  {
    title: "Neume GraphQL API",
    description: "GraphQL API powering Neume customer & internal tools.",
    imageUrl: "/img/projects/neume-api.png",
    link: "https://api.neume.co/graphql",
  },
];

export default function ProjectsClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="px-4 py-24 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold">Projects.</h1>
        <p>
          A collection of projects, products, and experiences I've had the
          opportunity to work on.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[32px]">
        {projects_data.map((project) => (
          <div
            key={project.title}
            onClick={() => setSelectedProject(project)}
            className="project-card group flex flex-col gap-2 border border-border bg-card p-4 cursor-pointer transition-all duration-300 hover:border-[#007bff] hover:shadow-[0px_0px_10px_0px_rgba(66,133,245,0.24)]"
          >
            <div className="grow flex flex-col gap-[16px]">
              <h2 className="text-[18px] font-semibold">{project.title}</h2>
              <p className="text-[14px] font-normal">{project.description}</p>
            </div>
            <div>
              <div className="min-h-[150px]">
                <Image
                  src={project.imageUrl || ""}
                  alt={project.title || ""}
                  width={1440}
                  height={900}
                  priority
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </div>
              <button
                type="button"
                className="view-project-btn text-[12px] group-hover:text-[#007bff] mt-[14px]"
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute -top-12 right-4 text-white text-2xl transition-colors hover:text-zinc-300 dark:hover:text-zinc-100"
            >
              &times;
            </button>
            <a
              href={selectedProject.link || ""}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer block"
            >
              <Image
                src={selectedProject.imageUrl || ""}
                alt={selectedProject.title || ""}
                width={1440}
                height={900}
                priority
                sizes="100vw"
                className="h-full max-h-[80vh] w-auto max-w-full rounded-md"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
