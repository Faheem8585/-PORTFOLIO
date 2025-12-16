import fs from 'fs';
import path from 'path';
import { Project, ProjectFrontmatter } from './types';
import { parseMarkdownWithFrontmatter, markdownToHtml, getContentByType } from './markdown';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export async function getAllProjects(): Promise<Project[]> {
    const fileNames = getContentByType('projects');

    const allProjectsData = await Promise.all(
        fileNames.map(async (fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(projectsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            const { data, content } = parseMarkdownWithFrontmatter<ProjectFrontmatter>(fileContents);
            const htmlContent = await markdownToHtml(content);

            return {
                slug,
                ...data,
                content: htmlContent,
            };
        })
    );

    // Sort by date, newest first
    return allProjectsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
    try {
        const fullPath = path.join(projectsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const { data, content } = parseMarkdownWithFrontmatter<ProjectFrontmatter>(fileContents);
        const htmlContent = await markdownToHtml(content);

        return {
            slug,
            ...data,
            content: htmlContent,
        };
    } catch (error) {
        return null;
    }
}

export async function getFeaturedProjects(): Promise<Project[]> {
    const allProjects = await getAllProjects();
    return allProjects.filter(project => project.featured);
}

export async function getProjectSlugs(): Promise<string[]> {
    const fileNames = getContentByType('projects');
    return fileNames.map(fileName => fileName.replace(/\.md$/, ''));
}
