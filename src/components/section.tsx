import { cn } from "@/lib/utils";

/**
 * A section of the record: a sticky marginal label column on the left,
 * the content on the right. Hairline separated, no boxes.
 */
export function Section({
  id,
  label,
  note,
  children,
  className,
}: {
  id?: string;
  label: string;
  note?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "border-t border-border py-14 sm:py-16 lg:grid lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-12",
        className,
      )}
    >
      <h2 className="t-h3 mb-6 lg:sticky lg:top-24 lg:mb-0 lg:self-start">
        {label}
        {note ? (
          <span className="t-data mt-1.5 block font-normal text-faint">
            {note}
          </span>
        ) : null}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
