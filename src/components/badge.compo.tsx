import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const BadgeCompo = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <Badge
      variant="secondary"
      className={cn(
        "border border-neutral-800/50 bg-neutral-800/30 text-[11px] text-neutral-500",
        className,
      )}
    >
      {text}
    </Badge>
  );
};
