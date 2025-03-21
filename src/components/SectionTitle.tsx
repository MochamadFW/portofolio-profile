"use client";
interface SectionTitleProps {
    children: React.ReactNode;
  }
  
  export default function SectionTitle({ children }: SectionTitleProps) {
    return (
      <h2 className="font-retro text-retro-green text-4xl mb-8">{children}</h2>
    );
  }