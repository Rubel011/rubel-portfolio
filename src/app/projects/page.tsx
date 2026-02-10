import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Projects — Rubel Foridi",
  description: "Things I've built — a showcase of my recent projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-6">
        <Projects />
        <Footer />
      </main>
    </>
  );
}
