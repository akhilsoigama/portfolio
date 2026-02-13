"use client";
import React, { memo, useMemo } from "react";
import Image from "next/image";
import { Briefcase, Calendar } from "lucide-react";

/**
 * @typedef {Object} ExperienceItem
 * @property {string} title
 * @property {string} company
 * @property {string} duration
 * @property {string} description
 * @property {string} image
 * @property {string} imageAlt
 * @property {boolean} priority
 * @property {boolean} unoptimized
 * @property {string[]} techStack
 * @property {string[]} highlights
 */

/**
 * @param {{ exp: ExperienceItem, align: "left" | "right" }} props
 */
const ExperienceCard = memo(function ExperienceCard({ exp, align }) {
  const isLeft = align === "left";

  return (
    <li
      className={`relative flex ${isLeft ? "lg:justify-start" : "lg:justify-end"} justify-center`}
    >
      <div className="absolute left-1/2 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-indigo-500 ring-8 ring-white dark:bg-cyan-400 dark:ring-gray-950 lg:block" />
      <div
        className={`
          relative w-full max-w-2xl
          ${isLeft ? "lg:pr-16" : "lg:pl-16"}
        `}
      >
        <article className="group rounded-3xl border border-gray-200/80 bg-white/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5">
          <div className="relative h-56 md:h-72 overflow-hidden rounded-t-3xl">
            <Image
              src={exp.image}
              alt={exp.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              priority={exp.priority}
              unoptimized={exp.unoptimized}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/10 to-transparent" />
          </div>

          <div className="relative p-7 md:p-8 space-y-5">
            <div className="flex items-center gap-3 text-indigo-600 dark:text-cyan-400">
              <Briefcase className="w-5 h-5" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                {exp.company}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
              {exp.title}
            </h3>

            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>{exp.duration}</span>
            </div>

            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {exp.description}
            </p>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                Tech Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/10 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                Key Highlights
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                {exp.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400 dark:bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </li>
  );
});

const Experience = () => {
  const experiences = useMemo(
    () => [
      {
        title: "Frontend Developer Intern",
        company: "SULOK DIGITAL SOLUTION PRIVATE LIMITED",
        duration: "March 2024 - March 2025",
        description:
          "Delivered production-ready web interfaces for client projects, translating product requirements into responsive, accessible experiences while coordinating with design and backend teams.",
        image:
          "https://images.stockcake.com/public/5/e/6/5e6fb906-70e0-4ec9-9df9-fb564a8fec74_large/coder-at-work-stockcake.jpg",
        imageAlt: "Developer reviewing a web interface on a desktop screen",
        priority: true,
        unoptimized: true,
        techStack: ["React", "Tailwind CSS", "JavaScript", "REST APIs", "Figma"],
        highlights: [
          "Implemented reusable UI components that reduced page build time and improved consistency across modules.",
          "Optimized layouts and assets to deliver fast load times across mobile and desktop breakpoints.",
          "Collaborated on API integration patterns to keep state management predictable and maintainable.",
        ],
      },
      {
        title: "Hospital Management System",
        company: "SULOK DIGITAL SOLUTION PRIVATE LIMITED",
        duration: "March 2025 - July 2025",
        description:
          "Led the frontend build for a multi-role hospital platform, streamlining clinical workflows for doctors, patients, and administrators with clear dashboards and real-time visibility.",
        image: "/hospital.webp",
        imageAlt: "Hospital management dashboard with key metrics",
        priority: false,
        unoptimized: false,
        techStack: ["React", "Vite", "AdonisJS", "Charting", "Role-Based UI"],
        highlights: [
          "Designed role-specific navigation and data views to reduce task completion time for core workflows.",
          "Built resilient UI states for offline and intermittent connectivity scenarios.",
          "Integrated real-time updates for appointments, prescriptions, and admissions.",
        ],
      },
      {
        title: "Education Management System (PWA)",
        company: "Personal Project • Full-Stack",
        duration: "Aug 2025 - Present",
        description:
          "Architected an offline-first education ERP to centralize attendance, fees, and academic operations with installable PWA capabilities and reliable data synchronization.",
        image: "/education.png",
        imageAlt: "Education management system interface on a laptop",
        priority: false,
        unoptimized: false,
        techStack: ["React.js + Vite", "PWA", "IndexedDB", "Adonis.js", "PostgreSQL","Role-Based UI"],
        highlights: [
          "Designed data sync flows to safely reconcile offline activity with the server.",
          "Implemented attendance and fee management modules with audit-ready histories.",
          "Focused on performance by lazy-loading heavy screens and optimizing queries.",
        ],
      },
    ],
    []
  );

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white py-20 px-6 dark:from-black/40 dark:via-gray-950/40 dark:to-gray-950/30"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-indigo-200/35 blur-3xl dark:bg-cyan-500/10" />
      </div>

      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
            Experience
          </p>
          <h2
            id="experience-title"
            className="mt-4 text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white"
          >
            Building products with real-world impact
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400">
            Hands-on delivery across SaaS, healthcare, and education platforms
          </p>
        </header>

        <div className="relative mt-14">
          <div className="pointer-events-none absolute left-1/2 top-2 hidden h-[calc(100%-1rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gray-300/70 to-transparent dark:via-white/15 lg:block" />

          <ol className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.title}
                exp={exp}
                align={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;