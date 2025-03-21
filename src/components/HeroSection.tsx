"use client";

import RetroButton from '@/components/RetroButton';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center p-4 md:p-8">
      <h1 className="font-retro text-retro-pink text-4xl sm:text-5xl md:text-6xl mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="font-retro text-retro-blue text-base sm:text-lg md:text-xl mb-8">
        don't mention about the design
      </p>
      <p className="font-retro text-retro-blue text-base sm:text-lg md:text-xl mb-8">
        ps: i'm a backend developer
      </p>
      <RetroButton onClick={() => alert('Let’s build something awesome!')}>
        Explore My Work
      </RetroButton>
    </section>
  );
}