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
    <div className="font-retro bg-retro-blue p-6 border-4 border-retro-pink flex flex-col h-full min-w-[300px] md:min-w-0">
      {/* Image container with fixed aspect ratio (16:9) */}
      <div className="w-full aspect-video relative overflow-hidden bg-retro-black mb-4">
        <img 
          src={imageUrl} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/default-project.png';
          }}
        />
      </div>
      <h2 className="text-retro-yellow text-2xl">{title}</h2>
      <p className="text-retro-green mt-2 flex-grow">{description}</p>
      {/* {demoUrl && (
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 font-retro bg-retro-pink text-retro-blue px-4 py-2 hover:bg-retro-yellow transition-colors self-start"
        >
          View Demo
        </a>
      )} */}
    </div>
  );
}