import Link from "next/link";
import { Section } from "@/components/section";
import { Empty, EmptyTitle, EmptyDescription } from "@/components/ui/empty";
import { blogPosts } from "@/lib/portfolio-data";

const dateFormat = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function Writing() {
  return (
    <Section id="writing" label="Writing" note="Notes from the work">
      {blogPosts.length === 0 ? (
        <Empty className="border border-dashed border-rule-strong">
          <EmptyTitle>Nothing published yet</EmptyTitle>
          <EmptyDescription>
            Occasional notes on Node.js, MongoDB, and running things in
            production.
          </EmptyDescription>
        </Empty>
      ) : (
        <ul>
          {blogPosts.map((post) => {
            const href = post.slug && post.slug !== "#" ? post.slug : undefined;

            return (
              <li
                key={post.title}
                className="grid gap-x-8 gap-y-2 border-b border-border py-6 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[7rem_minmax(0,1fr)]"
              >
                <time dateTime={post.date} className="t-data pt-1 text-faint">
                  {dateFormat.format(new Date(post.date))}
                </time>
                <div className="min-w-0">
                  <h3 className="t-h3">
                    {href ? (
                      <Link href={href} className="link-quiet">
                        {post.title}
                      </Link>
                    ) : (
                      post.title
                    )}
                  </h3>
                  <p className="t-body measure mt-2 text-soft">
                    {post.excerpt}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </Section>
  );
}
