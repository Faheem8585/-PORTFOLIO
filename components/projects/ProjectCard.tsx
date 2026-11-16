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
        <div className="aspect-video mb-4 rounded-lg overflow-hidden" style={{ background: 'var(--ink-soft)' }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Info */}
        <h4 style={{ marginBottom: '0.45rem', lineHeight: 1.3 }}>{project.title}</h4>
        <p className="text-muted" style={{ fontSize: '0.88rem', marginBottom: '0.9rem', flexGrow: 1 }}>{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="skill-badge" style={{ fontSize: '0.74rem', padding: '0.18rem 0.5rem' }}
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
        <p className="text-xs text-muted" style={{ marginTop: '0.9rem' }}>
          {new Date(project.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long' 
          })}
        </p>
      </Card>
    </Link>
  );
}
