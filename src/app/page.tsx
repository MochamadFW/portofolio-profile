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
          I'm a graduate of Applied Informatics Engineering from Bandung State Polytechnic, passionate about developing efficient and scalable software solutions.
          Skilled in building dynamic REST APIs with PHP Laravel and NodeJS.
          Proficient in database management with MySQL, PostgreSQL, and MongoDB, I also leverage Redis and RabbitMQ for system optimization.
          My journey is defined by a commitment to excellence, innovation, and impactful contributions to software development.
        </p>
      </section>

      {/* Spacer Section */}
      <section className="py-12 md:py-24"></section>

      {/* Projects Section */}
      <section id="projects" className="p-4 md:p-8">
        <SectionTitle>Projects</SectionTitle>
        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto hide-scrollbar md:overflow-x-visible md:grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <ProjectCard
            title="SINBADA"
            description="Inventory Management System built on ReactJs and Ruby."
            imageUrl="/images/player.png"
            demoUrl="https://example.com"
          />
          <ProjectCard
            title="SIINVENT"
            description="Inventory Management System built on ReactJs and ExpressJs."
            imageUrl="/images/player.png"
            demoUrl="https://example.com"
          />
          <ProjectCard
            title="PERSIB Application"
            description="Super Apps for PERSIB football club built on Flutter, ExpressJs, Strapi, and ReactJs"
            imageUrl="/images/player.png"
            demoUrl="https://example.com"
          />
          <ProjectCard
            title="RISE Application"
            description="English course application built on flutter and PHP Laravel 11."
            imageUrl="/images/player.png"
            demoUrl="https://example.com"
          />
          <ProjectCard
            title="DiDATA"
            description="Inventory & Asset Management System built on VueJs and Golang."
            imageUrl="/images/player.png"
            demoUrl="https://example.com"
          />
        </div>
      </section>

      {/* Spacer Section */}
      <section className="py-12 md:py-24"></section>

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