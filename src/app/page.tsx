import { Blog } from "@/components/customs/blog";
import { CallToAction } from "@/components/customs/cta";
import { Experience } from "@/components/customs/experience";
import { Footer } from "@/components/customs/footer";
import { Header } from "@/components/customs/header";
import { Hero } from "@/components/customs/hero";
import { Projects } from "@/components/customs/projects";
import { SocialLinks } from "@/components/customs/social-links";

export default function Page() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl border-x border-dashed border-neutral-800 px-6">
        <Hero />

        <SocialLinks />
        <Experience />
        <Projects />
        <Blog />
        <CallToAction />
        <Footer />
      </main>
    </>
  );
}
