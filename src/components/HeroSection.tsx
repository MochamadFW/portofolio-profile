"use client";

import { useState } from 'react';
import RetroButton from '@/components/RetroButton';

export default function HeroSection() {
  const [showImageModal, setShowImageModal] = useState(false);

  const toggleImageModal = () => {
    setShowImageModal(!showImageModal);
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center p-4 md:p-8 relative overflow-hidden">
      {/* Moving Cloud Elements (unchanged) */}
      <img
        src="/images/cloud.png"
        alt="Pixel Cloud"
        className="absolute pixel-cloud animate-float"
        style={{ top: '5%', left: '10%', animationDuration: '20s' }}
      />
      <img
        src="/images/cloud.png"
        alt="Pixel Cloud"
        className="absolute pixel-cloud animate-float"
        style={{ top: '2%', left: '30%', animationDuration: '25s' }}
      />
      <img
        src="/images/cloud.png"
        alt="Pixel Cloud"
        className="absolute pixel-cloud animate-float"
        style={{ top: '3%', left: '70%', animationDuration: '18s' }}
      />
      <img
        src="/images/player.png"
        alt="Pixel Character"
        className="absolute pixel-cloud animate-float"
        style={{ top: '7%', left: '50%', animationDuration: '10s' }}
      />
      <img
        src="/images/cloud.png"
        alt="Pixel Cloud"
        className="absolute pixel-cloud animate-float"
        style={{ top: '15%', left: '80%', animationDuration: '10s' }}
      />

      {/* Hero Content */}
      <div className="relative z-10">
        <h1 className="font-retro text-retro-pink text-4xl sm:text-5xl md:text-6xl mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="font-retro text-retro-blue text-base sm:text-lg md:text-xl mb-8">
          don't mention about the design!
        </p>
        <p className="font-retro text-retro-blue text-base sm:text-lg md:text-xl mb-8">
          ps: i'm a backend developer
        </p>
        <RetroButton onClick={toggleImageModal}>
          Explore My Work
        </RetroButton>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={toggleImageModal}
        >
          <div 
            className="relative bg-retro-white border-4 border-retro-pink rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-retro-pink p-2 flex justify-between items-center">
              <h3 className="font-retro text-retro-white text-lg">My CV Preview</h3>
              <button 
                onClick={toggleImageModal}
                className="font-retro text-retro-white hover:text-retro-yellow text-xl px-2"
              >
                ✕
              </button>
            </div>
            
            {/* Image Content */}
            <div className="bg-gray-100 flex justify-center p-4">
              <img 
                src="/cv-mochamadfw-image.jpg" 
                alt="CV Preview"
                className="max-w-full max-h-[70vh] object-contain"
              />
            </div>
            
            {/* Modal Footer */}
            <div className="bg-retro-pink p-3 flex justify-center gap-4">
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/CV Mochamad Fadillah Wijaya.pdf';
                  link.download = 'CV Mochamad Fadillah Wijaya.pdf';
                  link.click();
                }}
                className="font-retro px-6 py-2 rounded-lg border-2 border-retro-black shadow-retro bg-retro-yellow text-retro-black hover:bg-retro-blue hover:text-retro-white transition-all hover:translate-y-1"
              >
                Download CV
              </button>
              <button
                onClick={toggleImageModal}
                className="font-retro px-6 py-2 rounded-lg border-2 border-retro-black shadow-retro bg-retro-blue text-retro-white hover:bg-retro-yellow hover:text-retro-black transition-all hover:translate-y-1"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}