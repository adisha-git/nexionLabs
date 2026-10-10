import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  /** "vivid" is for headings placed over the mesh gradient. */
  tone?: "light" | "dark" | "vivid";
  id?: string;
  /** Use "h1" on standalone routes where the section heading is the page title. */
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
  id,
  as: Heading = "h2",
  className,
}: Props) {
  const dark = tone === "dark";
  const vivid = tone === "vivid";
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p
        className={cn(
          "text-sm font-semibold tracking-wide uppercase",
          dark ? "text-sky" : vivid ? "text-ink" : "text-brand-dark",
        )}
      >
        {eyebrow}
      </p>
      <Heading
        id={id}
        className={cn(
          "mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </Heading>
      {lead && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed text-pretty",
            dark ? "text-white/80" : vivid ? "text-ink" : "text-ink-soft",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
