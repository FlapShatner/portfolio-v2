'use client';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { Project } from '@/lib/projects';
import va from '@vercel/analytics';

interface ProjectImageProps {
  project: Project;
}

const ProjectImage: FC<ProjectImageProps> = ({ project }) => {
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        va.track('Live link', { project: project.title, url: project.liveUrl });
      }}
    >
      <div
        className={twMerge(
          'absolute flex justify-center items-center top-0 left-0 w-full h-full bg-bg-primary opacity-0 hover:opacity-70 text-3xl',
          project.bg && project.bg
        )}
      >
        Visit
      </div>
      <Image
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        width={873}
        height={626}
        blurDataURL={project.blur}
      />
    </a>
  );
};

export default ProjectImage;
