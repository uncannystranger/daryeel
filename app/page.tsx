import { AboutSection } from "@/components/about-section";
import { BlogSection } from "@/components/blog-section";
import { CommunitySection } from "@/components/community-section";
import { DonationSection } from "@/components/donation-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ImpactSection } from "@/components/impact-section";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <ImpactSection />
      <ProjectsSection />
      <CommunitySection />
      <BlogSection />
      <DonationSection />
      <Footer />
    </main>
  );
}
