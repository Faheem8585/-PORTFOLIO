# Deployment Guide

Detailed instructions for deploying your portfolio to various platforms.

## Table of Contents

- [Vercel Deployment](#vercel-deployment)
- [Netlify Deployment](#netlify-deployment)
- [GitHub Pages Deployment](#github-pages-deployment)
- [Custom Domain Setup](#custom-domain-setup)
- [Environment Variables](#environment-variables)

## Vercel Deployment

**Recommended** - Vercel is made by the creators of Next.js and provides the best experience.

### Quick Deploy

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Visit [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Done!** Your site will be live at `https://your-project.vercel.app`

### Custom Domain on Vercel

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (up to 48 hours)

## Netlify Deployment

### Method 1: Git Integration

1. **Push to GitHub** (if not already done)

2. **Connect to Netlify**:
   - Log in to [netlify.com](https://www.netlify.com/)
   - Click "Add new site" → "Import an existing project"  
   - Connect your GitHub account
   - Select your repository

3. **Configure Build Settings**:
   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **Deploy**:
   - Click "Deploy site"
   - Your site will be live at `https://random-name.netlify.app`

### Method 2: Manual Deploy

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

### Custom Domain on Netlify

1. Go to "Domain settings" in your Netlify dashboard
2. Click "Add custom domain"
3. Enter your domain name
4. Configure DNS records as instructed
5. Enable HTTPS (automatic with Let's Encrypt)

## GitHub Pages Deployment

GitHub Pages requires static export.

### Configuration

1. **Update `next.config.ts`**:
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: 'export',
     basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
     images: {
       unoptimized: true,
     },
   };

   export default nextConfig;
   ```

2. **Update `package.json`** (add export script):
   ```json
   {
     "scripts": {
       "dev": "next dev --turbopack",
       "build": "next build",
       "export": "next build && next export",
       "start": "next start"
     }
   }
   ```

### Deploy

1. **Build and export**:
   ```bash
   npm run build
   ```

2. **Create `.nojekyll`**:
   ```bash
   touch out/.nojekyll
   ```

3. **Deploy to gh-pages branch**:
   ```bash
   npm install -g gh-pages
   gh-pages -d out -t true
   ```

4. **Configure GitHub Pages**:
   - Go to repository settings
   - Navigate to "Pages"
   - Source: Deploy from branch `gh-pages`
   - Click "Save"

5. **Access your site**:
   - `https://yourusername.github.io/portfolio`

### Automated Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## Custom Domain Setup

### DNS Configuration

For most domains, you'll need to add these DNS records:

**For Vercel**:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For Netlify**:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

**For GitHub Pages**:
```
Type: A
Name: @
Values:
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153

Type: CNAME
Name: www
Value: yourusername.github.io
```

### SSL/HTTPS

- **Vercel**: Automatic (included)
- **Netlify**: Automatic with Let's Encrypt
- **GitHub Pages**: Automatic (enable in repository settings)

## Environment Variables

If you add API integrations (e.g., contact form, analytics):

### Vercel

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add your variables:
   ```
   NEXT_PUBLIC_FORM_API_KEY=your_key_here
   ```

### Netlify

1. Go to "Site settings" → "Build & deploy"
2. Navigate to "Environment"
3. Click "Edit variables"
4. Add your variables

### Local Development

Create `.env.local`:
```bash
NEXT_PUBLIC_FORM_API_KEY=your_key_here
```

**Note**: Never commit `.env.local` to git!

## CI/CD Best Practices

### Continuous Deployment

Both Vercel and Netlify automatically deploy on:
- Every push to main branch
- Pull request previews (for testing)

### Build Optimization

Speed up builds:
```json
{
  "scripts": {
    "build": "next build",
    "build:analyze": "ANALYZE=true next build"
  }
}
```

## Troubleshooting

### Build Fails

1. Check Node.js version (must be 18+)
2. Delete `.next` and `node_modules`, reinstall:
   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   ```

### Images Not Loading

- Verify images are in `public/` directory
- Check file paths (case-sensitive on Linux servers)
- For GitHub Pages, use `unoptimized: true` in `next.config.ts`

### 404 on Refresh

- Vercel/Netlify: Handled automatically
- GitHub Pages: Requires `404.html` redirect (static export handles this)

## Performance Monitoring

After deployment:
- Run [Lighthouse](https://developers.google.com/web/tools/lighthouse) audit
- Check [PageSpeed Insights](https://pagespeed.web.dev/)
- Monitor [Web Vitals](https://web.dev/vitals/)

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

---

For more help, refer to:
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
