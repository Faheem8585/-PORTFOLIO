# Professional Portfolio

A modern, production-ready portfolio application built with Next.js 15, TypeScript, and Tailwind CSS. Designed for PhD applications, research positions, and industry roles, showcasing projects, research, and technical expertise in data science, computer vision, and machine learning.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first, professional academic-friendly aesthetic
- **Dynamic Projects**: Markdown-based content management for easy updates
- **SEO Optimized**: Proper meta tags, semantic HTML, accessibility features
- **Performance**: Optimized images, fast page loads, smooth transitions
- **Easy Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── projects/          # Projects listing and detail pages
│   ├── research/          # Research & publications
│   ├── skills/            # Skills page
│   ├── cv/                # CV/Resume page
│   ├── contact/           # Contact page with form
│   ├── layout.tsx         # Root layout with Header/Footer
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Header, Footer
│   ├── home/              # Hero, FeaturedProjects
│   ├── projects/          # ProjectCard
│   ├── ui/                # Reusable components (Button, Card, Section)
│   └── ContactForm.tsx
├── content/
│   └── projects/          # Markdown files for projects
├── lib/
│   ├── types.ts           # TypeScript interfaces
│   ├── markdown.ts        # Markdown parsing utilities
│   └── projects.ts        # Project data loading
├── public/
│   ├── images/projects/   # Project images
│   └── cv/                # CV PDF
└── styles/
    └── globals.css        # Global styles
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Markdown**: [gray-matter](https://github.com/jonschlinkert/gray-matter), [remark](https://remark.js.org/)
- **Deployment**: Vercel (recommended), Netlify, or GitHub Pages

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## ✏️ Adding Projects

Projects are managed through Markdown files in the `content/projects/` directory.

### Create a New Project

1. Create a new `.md` file in `content/projects/`:
   ```bash
   touch content/projects/my-new-project.md
   ```

2. Add frontmatter and content:
   ```markdown
   ---
   title: "My Project Title"
   description: "Brief project description"
   date: "2025-01-15"
   featured: true
   technologies: ["Python", "TensorFlow", "Docker"]
   github: "https://github.com/username/project"
   demo: "https://project-demo.com"
   image: "/images/projects/my-project.png"
   ---

   ## Problem Statement
   Describe the problem...

   ## Methodology
   Explain your approach...

   ## Results
   Show your results...
   ```

3. Add project image to `public/images/projects/`

4. The project will automatically appear on the Projects page!

## 🎨 Customization

### Update Personal Information

1. **Footer Social Links**: Edit `components/layout/Footer.tsx`
2. **Contact Information**: Edit `app/contact/page.tsx`
3. **About Me Content**: Edit `app/about/page.tsx`
4. **CV/Resume**: Replace content in `app/cv/page.tsx` and add PDF to `public/cv/`
5. **Skills**: Modify skill categories in `app/skills/page.tsx`

### Styling

- **Colors**: Modify CSS variables in `app/globals.css`
- **Fonts**: Update Google Fonts import in `app/globals.css`
- **Layout**: Adjust `--content-max-width` and `--section-spacing` in globals.css

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click "Deploy"

### Netlify

1. Push code to GitHub
2. Log in to [netlify.com](https://www.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub and select your repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click "Deploy"

### GitHub Pages

1. Update `next.config.ts`:
   ```typescript
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true }
   };
   ```

2. Build and export:
   ```bash
   npm run build
   ```

3. Deploy the `out` directory to GitHub Pages

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 📝 Content Management

### Project Images

- Add images to `public/images/projects/`
- Reference in markdown: `![Alt text](/images/projects/image.png)`
- Images are automatically optimized by Next.js

### CV/Resume

- Add PDF to `public/cv/resume.pdf`
- Link is already configured in `app/cv/page.tsx`

### Updating Content

All content is in easily editable locations:
- **Projects**: `content/projects/*.md`
- **About**: `app/about/page.tsx`
- **Skills**: `app/skills/page.tsx`
- **Research**: `app/research/page.tsx`

## 🎯 SEO & Performance

- Meta tags configured in each page
- Semantic HTML structure
- Optimized images with Next.js Image
- Fast page loads with static generation
- Accessible design (WCAG compliant)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Note**: Remember to replace placeholder text, images, and personal information with your actual content!

## Portfolio assistant

The chat bubble is powered by `app/api/chat/route.ts` and the knowledge base in
`lib/knowledge.ts`.

It runs in two modes:

**Without an API key.** The route scores the question against each section of
the knowledge base and returns the best match. Always accurate, because every
answer is text written in advance, but it cannot rephrase or combine sections.

**With an API key.** Set `GEMINI_API_KEY` as an environment variable and the
route sends the question to the model along with the whole knowledge base and a
system prompt that forbids inventing anything. The assistant can then answer
questions nobody anticipated, hold a conversation across turns, and give a
balanced view on whether Faheem fits a specific role.

Get a free key at aistudio.google.com/apikey. On Vercel, add it under
Settings, Environment Variables, then redeploy. Groq, OpenRouter and OpenAI
are supported too; see `.env.example`.

To change what the assistant knows, edit `lib/knowledge.ts`. Both modes read
from the same file.
