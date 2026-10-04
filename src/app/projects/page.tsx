import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Projects — Rubel Foridi",
  description:
    "Node.js and MongoDB backends, frontend builds, and live links — a record of what I have shipped.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1180px] px-6">
        <div className="pt-14 pb-6 sm:pt-20">
          <h1 className="t-display">Projects</h1>
          <p className="t-lead measure mt-6 text-soft">
            Six builds: Node.js and MongoDB backends, browser-only frontends,
            and one Flask and Gen AI experiment. Live link and source for each.
          </p>
        </div>
        <Projects label="All work" />
      </main>
      <Footer />
    </>
  );
}
