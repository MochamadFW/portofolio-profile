"use client";

import { useState } from 'react';
import RetroButton from '@/components/RetroButton';

export default function HeroSection() {
  const [showPdfModal, setShowPdfModal] = useState(false);

  const togglePdfModal = () => {
    setShowPdfModal(!showPdfModal);
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center p-4 md:p-8 relative overflow-hidden">
      {/* Moving Cloud Elements */}
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
        <RetroButton onClick={togglePdfModal}>
          Explore My Work
        </RetroButton>
      </div>

      {/* PDF Modal */}
      {showPdfModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={togglePdfModal}
        >
          <div 
            className="relative bg-retro-white border-4 border-retro-pink rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-retro-pink p-2 flex justify-between items-center">
              <h3 className="font-retro text-retro-white text-lg">My CV Preview</h3>
              <button 
                onClick={togglePdfModal}
                className="font-retro text-retro-white hover:text-retro-yellow text-xl px-2"
              >
                ✕
              </button>
            </div>
            
            {/* PDF Content */}
            <div className="h-[calc(80vh-50px)] bg-gray-100">
              <iframe 
                src="/cv-mochamadfw.pdf#toolbar=0&navpanes=0" 
                className="w-full h-full border-0"
                title="CV Preview"
              >
                <div className="p-4 text-center">
                  <p className="font-retro text-retro-blue mb-4">Your browser doesn't support PDF preview.</p>
                  <a 
                    href="/cv-mochamadfw.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-retro px-6 py-2 rounded-lg border-2 border-retro-black shadow-retro bg-retro-yellow text-retro-black hover:bg-retro-blue hover:text-retro-white inline-block"
                  >
                    Open CV in New Tab
                  </a>
                </div>
              </iframe>
            </div>
            
            {/* Modal Footer */}
            <div className="bg-retro-pink p-3 flex justify-center gap-4">
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/cv-mochamadfw.pdf';
                  link.download = 'my_cv.pdf';
                  link.click();
                }}
                className="font-retro px-6 py-2 rounded-lg border-2 border-retro-black shadow-retro bg-retro-yellow text-retro-black hover:bg-retro-blue hover:text-retro-white transition-all hover:translate-y-1"
              >
                Download CV
              </button>
              <button
                onClick={togglePdfModal}
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