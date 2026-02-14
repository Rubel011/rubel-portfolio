import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SocialLinks } from "@/components/social-links";
import { Experience } from "@/components/experience";
import { GitHubStats } from "@/components/github-stats";
import { Blog } from "@/components/blog";
import { CallToAction } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-6">
        <Hero />
        <SocialLinks />
        <Experience />
        <GitHubStats />
        {/* <Blog /> */}
        <CallToAction />
        <Footer />
      </main>
    </>
  );
}
