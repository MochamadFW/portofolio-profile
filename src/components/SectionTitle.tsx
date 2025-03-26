"use client";
interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;  // Add className prop to allow custom styling
}

export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <h2 className="font-retro text-retro-green text-4xl mb-4">{children}</h2>
      <div className="w-16 h-1 bg-retro-green mb-4"></div>
    </div>
  );
}