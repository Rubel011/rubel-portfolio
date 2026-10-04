import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Writing } from "@/components/writing";
import { OpenSource } from "@/components/open-source";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1180px] px-6">
        <Hero />
        <Experience />
        <Projects limit={3} />
        <Writing />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
