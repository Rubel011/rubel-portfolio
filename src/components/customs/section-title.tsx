export function SectionTitle({ title }: { title: string }) {
  return (
    <div className="relative border border-dashed border-neutral-800 px-5 py-2.5 w-fit">
      <span className="absolute -top-1 -left-1 size-2 rounded-full bg-neutral-600 animate-pulse" />
      <span className="absolute -top-1 -right-1 size-2 rounded-full bg-neutral-600 animate-pulse" />
      <span className="absolute -bottom-1 -left-1 size-2 rounded-full bg-neutral-600 animate-pulse" />
      <span className="absolute -bottom-1 -right-1 size-2 rounded-full bg-neutral-600 animate-pulse" />
      <h2 className="text-lg font-semibold text-neutral-100 tracking-tight">
        {title}
      </h2>
    </div>
  );
}
