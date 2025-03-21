"use client";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <div className="font-retro bg-retro-blue p-6 border-4 border-retro-pink min-w-[300px] md:min-w-0">
      <img src={imageUrl} alt={title} className="w-full h-32 object-cover" />
      <h2 className="text-retro-yellow text-2xl mt-4">{title}</h2>
      <p className="text-retro-green mt-2">{description}</p>
      <a
        href={demoUrl}
        className="inline-block mt-4 font-retro bg-retro-pink text-retro-blue px-4 py-2"
      >
        View Demo
      </a>
    </div>
  );
}