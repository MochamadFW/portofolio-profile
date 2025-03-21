import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import SocialIcons from '@/components/SocialIcons';
import Footer from '@/components/Footer';
import PixelCharacter from '@/components/PixelCharacter';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Pixel Character */}
      <PixelCharacter />

      {/* About Section */}
      <section id="about" className="p-4 md:p-8">
        <SectionTitle>About Me</SectionTitle>
        <p className="font-retro text-retro-yellow text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-center">
          Hi, I’m a developer who loves creating retro-style websites and games. I specialize in
          front-end development and have a passion for pixel art and 8-bit aesthetics.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-4 md:p-8">
        <SectionTitle>Projects</SectionTitle>
        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto hide-scrollbar md:overflow-x-visible md:grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <ProjectCard
            title="Retro Game"
            description="A fun retro-style game built with JavaScript."
            imageUrl="/path/to/project1.png"
            demoUrl="https://example.com"
          />
          <ProjectCard
            title="Portfolio Website"
            description="My personal portfolio website with an 8-bit theme."
            imageUrl="/path/to/project2.png"
            demoUrl="https://example.com"
          />
          <ProjectCard
            title="Pixel Art Generator"
            description="A tool for creating pixel art online."
            imageUrl="/path/to/project3.png"
            demoUrl="https://example.com"
          />
          <ProjectCard
            title="Pixel Art Generator"
            description="A tool for creating pixel art online."
            imageUrl="/path/to/project3.png"
            demoUrl="https://example.com"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-4 md:p-8">
        <SectionTitle>Contact</SectionTitle>
        <p className="font-retro text-retro-yellow text-sm sm:text-base md:text-lg text-center mb-4">
          Let’s work together! Reach out to me at:
        </p>
        <div className="flex justify-center">
          <SocialIcons />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}