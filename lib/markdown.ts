import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

const contentDirectory = path.join(process.cwd(), 'content');

export async function markdownToHtml(markdown: string): Promise<string> {
    const result = await remark()
        .use(gfm)
        .use(html, { sanitize: false })
        .process(markdown);
    return result.toString();
}

export function parseMarkdownWithFrontmatter<T>(fileContents: string): {
    data: T;
    content: string;
} {
    const { data, content } = matter(fileContents);
    return { data: data as T, content };
}

export function getContentByType(type: string): string[] {
    const typeDirectory = path.join(contentDirectory, type);

    if (!fs.existsSync(typeDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(typeDirectory);
    return fileNames.filter(fileName => fileName.endsWith('.md'));
}
