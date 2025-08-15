"use client";

import Card from "@/components/fragments/card";
import { useParams } from "next/navigation";
import { projects } from "../projectsData";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetailPage() {
  const { projectName } = useParams() as { projectName: string };
  const projectsData = projects.find(
    (data) => data.slug === `/projects/${projectName}`
  );

  if (!projectsData) {
    return (
      <Card>
        <h1>Project Not Found</h1>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-2 text-left lg:w-[900px] w-full max-w-5xl mx-auto my-28">
      <Link
        href="/projects"
        className="fixed backdrop-blur-md top-8 p-3 bg-black-background rounded-[12px] border border-gray-700 w-fit self-center cursor-pointer hover:top-7 transition-all duration-200"
      >
        <IoMdClose size={25} />
      </Link>

      {/* Hero Image */}
      <Card className="text-left p-0 mb-12 overflow-hidden rounded-2xl shadow-lg">
        <div className="w-full aspect-[16/9] overflow-hidden">
          <Image
            src={projectsData.images[0]}
            alt={`${projectsData.title} image`}
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </Card>

      {/* Info */}
      <div className="px-5 lg:px-0 space-y-3 mb-5">
        <h1 className="text-2xl font-semibold">{projectsData.title}</h1>
        <div className="flex flex-wrap gap-3 text-sm text-[#b3b3b3]">
          {projectsData.tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center gap-2 py-1 px-3 border border-gray-700 bg-[#262626] rounded-full"
            >
              {tag.icon}
              <span>{tag.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Overview */}
      <Section title="Overview" text={projectsData.overview} />
      <Section title="Solution" text={projectsData.solution} />
      <Section title="Result" text={projectsData.result} />

      {/* Extra Image */}
      <Card className="mt-10 overflow-hidden rounded-2xl shadow-lg">
        <div className="w-full aspect-[16/9] overflow-hidden">
          <Image
            src={projectsData.images[0]}
            alt={projectsData.title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5">
          <h1 className="text-2xl font-bold">{projectsData.title}</h1>
          <p className="text-[#b3b3b3] text-base">{projectsData.description}</p>
        </div>
      </Card>
    </div>
  );
}

function Section({ title, text }: { title: string; text?: string }) {
  if (!text) return null;
  return (
    <div className="px-5 lg:px-0 space-y-3 mb-5">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-[#b3b3b3] text-base">{text}</p>
    </div>
  );
}
