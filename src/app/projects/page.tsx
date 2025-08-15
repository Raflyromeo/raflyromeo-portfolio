import Card from "@/components/fragments/card";
import ProjectCard from "@/components/section/project/projectCard";
import { projects } from "./projectsData";

export default function ProjectsPage() {
  return (
    <div className="p-5 mb-28 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="p-0 bg-transparent shadow-none">
            <ProjectCard project={project} />
          </Card>
        ))}
      </div>
    </div>
  );
}
