import { Project } from "@/types/projectCard.type";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={project.slug}
      className="group relative flex flex-col items-start text-left rounded-2xl overflow-hidden shadow-md bg-[#1a1a1a] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        {project.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`${project.title} image ${index + 1}`}
            width={1000}
            height={1000}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ))}
      </div>

      {/* Text */}
      <div className="p-5 flex flex-col flex-1">
        <h1 className="text-lg font-bold mb-2 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h1>
        <p className="text-sm text-gray-300 line-clamp-3">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center gap-2 py-1 px-3 border border-gray-700 bg-[#262626] rounded-full text-xs text-gray-300 group-hover:border-cyan-300 transition-colors"
            >
              {tag.icon}
              <span>{tag.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
