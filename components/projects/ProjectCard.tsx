import Link from 'next/link';
import { Project } from '@/lib/types';
import Card from '../ui/Card';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <Card hoverable className="h-full flex flex-col">
        {/* Project Image */}
        <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-hover-bg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Info */}
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted text-sm mb-4 flex-grow">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-primary-light text-primary rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs text-muted">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Date */}
        <p className="text-xs text-muted mt-4">
          {new Date(project.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long' 
          })}
        </p>
      </Card>
    </Link>
  );
}
