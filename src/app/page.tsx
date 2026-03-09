import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SocialLinks } from "@/components/social-links";
import { Experience } from "@/components/experience";
import { GitHubStats } from "@/components/github-stats";
import { Blog } from "@/components/blog";
import { CallToAction } from "@/components/cta";
import { Footer } from "@/components/footer";
import { NameBanner } from "@/components/name-banner";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Page() {
  return (
    <>
      <Header />
      <div className="absolute inset-0 h-full w-full">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={80}
          className="h-full w-full"
          particleColor="#a78bfa"
          speed={1.5}
        />
      </div>
      <main className="mx-auto max-w-4xl px-6 ">
        <Hero />
        <SocialLinks />
        <Experience />
        <GitHubStats />
        {/* <Blog /> */}
        <CallToAction />
      </main>
      <NameBanner />
      <div className="mx-auto max-w-4xl px-6">
        <Footer />
      </div>
    </>
  );
}
