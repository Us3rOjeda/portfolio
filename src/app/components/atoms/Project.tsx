"use client"

import { useEffect, useRef } from "react";
import { ProjectProps } from "@/app/lib/types/types";
import Link from "next/link";

const Project = ({ 
  sourceVideo,
  websiteLink,
  title,
  technologies,
  isEnglish 
}: ProjectProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <article className="flex flex-col gap-6 md:gap-8">
      <div className="overflow-hidden xl:w-[700px]">
        <video 
          ref={videoRef}
          src={sourceVideo}
          autoPlay
          loop
          muted
          className="w-full h-auto"
        ></video>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-2xl md:text-4xl font-semibold select-none">{title}</h3>

        <ul className="flex flex-wrap gap-2 md:gap-4 text-sm md:text-base">
          {technologies.map((tech, index) => (
            <li 
              key={index} 
              className="bg-gray-100 px-2 py-1 rounded-md select-none"
            >
              {tech}
            </li>
          ))}
        </ul>

        <Link 
          href={websiteLink} 
          className="text-sm md:text-base p-2 w-fit bg-[#070808] rounded-md text-white transition hover:bg-[#1a1a1a]"
        >
          {isEnglish ? "View Project" : "Ver Proyecto"}
        </Link>
      </div>
    </article>
  );
};

export default Project;
