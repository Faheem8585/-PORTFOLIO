import { Metadata } from 'next';
import { getAllProjects } from '@/lib/projects';
import ProjectCard from '@/components/projects/ProjectCard';

export const metadata: Metadata = {
    title: 'Projects | Portfolio',
    description: 'Browse my portfolio of data science, computer vision, and machine learning projects',
};

export default async function ProjectsPage() {
    const projects = await getAllProjects();

    return (
        <div className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
                    <p className="text-xl text-muted">
                        A collection of my work in computer vision, machine learning, and data science.
                        Each project demonstrates end-to-end problem solving, from conception to deployment.
                    </p>
                </div>

                {projects.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-muted text-lg">No projects available yet. Check back soon!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.slug} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
