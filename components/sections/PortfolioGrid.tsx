"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, X } from "lucide-react";
import type { PortfolioProject } from "@/content/portfolio";
import { Chevron } from "@/components/ui/Button";

export function PortfolioGrid({
  projects,
  cardHeading = "h3",
}: {
  projects: PortfolioProject[];
  cardHeading?: "h2" | "h3";
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<PortfolioProject | null>(null);
  const CardHeading = cardHeading;

  const open = (project: PortfolioProject) => {
    setActive(project);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-ink/5 transition-shadow hover:shadow-lift">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  quality={70}
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink shadow-soft">
                  {project.industry}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <CardHeading className="text-lg font-semibold text-ink">{project.name}</CardHeading>
                <p className="mt-2 flex-1 leading-relaxed text-ink-soft">{project.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md bg-lilac px-2 py-1 text-xs font-medium text-ink-soft ring-1 ring-ink/5"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => open(project)}
                  aria-haspopup="dialog"
                  className="mt-5 inline-flex w-fit items-center gap-1 text-[0.9375rem] font-semibold text-brand-dark after:absolute after:inset-0"
                >
                  View project<span className="sr-only">: {project.name}</span>
                  <Chevron />
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby="project-dialog-title"
        onClose={() => setActive(null)}
        onClick={(e) => {
          // Close when the backdrop (the dialog element itself) is clicked.
          if (e.target === e.currentTarget) close();
        }}
        className="m-auto w-[min(100%-2rem,46rem)] max-w-none overflow-hidden rounded-2xl bg-white p-0 text-ink shadow-lift backdrop:bg-ink/60 backdrop:backdrop-blur-sm"
      >
        {active && (
          <div className="max-h-[90dvh] overflow-y-auto">
            <div className="relative aspect-[16/9]">
              <Image
                src={active.image.src}
                alt={active.image.alt}
                fill
                quality={75}
                sizes="(min-width: 768px) 736px, 100vw"
                className="object-cover"
              />
              <button
                type="button"
                onClick={close}
                className="absolute top-3 right-3 grid size-10 place-items-center rounded-full bg-white/95 text-ink shadow-soft"
              >
                <X aria-hidden="true" className="size-5" />
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-sm font-semibold text-brand-dark">
                {active.industry} · {active.location}
              </p>
              <h2 id="project-dialog-title" className="mt-1 text-2xl font-bold tracking-tight">
                {active.name}
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">{active.description}</p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">
                    Deliverables
                  </h3>
                  <ul className="mt-3 space-y-2 text-[0.9375rem] text-ink-soft">
                    {active.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <Check
                          aria-hidden="true"
                          className="mt-0.5 size-4 shrink-0 text-brand-dark"
                          strokeWidth={3}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">
                    Tech stack
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {active.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-md bg-lilac px-2.5 py-1 text-sm font-medium text-ink-soft ring-1 ring-ink/5"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-6 rounded-lg bg-lilac p-3 text-sm text-ink-muted">
                Concept project created to demonstrate our approach. It is not a live client
                website.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  onClick={close}
                  className="inline-flex h-11 items-center rounded-full bg-ink px-5 font-semibold text-white"
                >
                  Start a similar project
                </Link>
                <button
                  type="button"
                  onClick={close}
                  className="inline-flex h-11 items-center rounded-full px-5 font-semibold text-ink ring-1 ring-ink/15"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
