"use client";

export default function PixelCharacter() {
  return (
    <div className="pixel-character">
      <img
        src="/images/player.png"
        alt="Pixel Character"
        className="w-12 h-12 sm:w-16 sm:h-16 pixelated"
      />
    </div>
  );
}