# Deployment Guide for OpenDPD Website

This guide covers multiple deployment options for the OpenDPD project website. Choose the option that best fits your needs.

## Prerequisites

- Node.js 20+ installed
- npm or yarn package manager
- Git repository access

## Local Development

First, ensure the site works locally:

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to preview the site.

## Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## Deployment Options

### Option 1: Netlify (Recommended - Easiest)

Netlify offers free hosting with automatic deployments from GitHub.

#### Steps:

1. **Push your code to GitHub** (if not already done)

2. **Sign up/Login to Netlify**
   - Go to [netlify.com](https://www.netlify.com)
   - Sign up with your GitHub account

3. **Create a new site**
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Select the repository

4. **Configure build settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Netlify will automatically detect the `netlify.toml` configuration

5. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy automatically
   - You'll get a URL like `https://your-site-name.netlify.app`

6. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain
   - Follow DNS configuration instructions

#### Continuous Deployment

Netlify automatically deploys on every push to your main branch. The `netlify.toml` file is already configured.

### Option 2: Vercel (Fast & Modern)

Vercel provides excellent performance and is great for React/Vite apps.

#### Steps:

1. **Install Vercel CLI** (optional, can use web interface)
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Web Interface**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure:
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - Click "Deploy"

3. **Deploy via CLI**
   ```bash
   vercel
   ```
   Follow the prompts. For production:
   ```bash
   vercel --prod
   ```

The `vercel.json` file is already configured for optimal settings.

### Option 3: GitHub Pages

Free hosting directly from your GitHub repository.

#### Steps:

1. **Update Vite config for GitHub Pages**
   The `vite.config.js` needs to be updated if deploying to a subdirectory:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/OpenDPD/', // Replace with your repository name
   })
   ```

2. **Enable GitHub Pages**
   - Go to your repository → Settings → Pages
   - Source: GitHub Actions
   - The workflow file (`.github/workflows/deploy.yml`) is already configured

3. **Deploy**
   - Push to main/master branch
   - GitHub Actions will automatically build and deploy
   - Your site will be available at `https://your-username.github.io/OpenDPD/`

### Option 4: Cloudflare Pages

Cloudflare offers fast global CDN and free hosting.

#### Steps:

1. **Sign up at [Cloudflare Pages](https://pages.cloudflare.com)**

2. **Connect Repository**
   - Click "Create a project"
   - Connect your GitHub repository

3. **Configure Build**
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`

4. **Deploy**
   - Click "Save and Deploy"
   - Your site will be live at `https://your-project.pages.dev`

### Option 5: Traditional Web Hosting

For traditional hosting providers (cPanel, FTP, etc.):

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Upload contents**
   - Upload all files from the `dist/` directory
   - Ensure `index.html` is in the root of your web directory

3. **Configure server**
   - Ensure your server supports SPA routing (redirects all routes to `index.html`)
   - For Apache, add `.htaccess`:
     ```apache
     <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
     </IfModule>
     ```

## Performance Optimization

The site is already optimized with:
- ✅ Code splitting
- ✅ Asset optimization
- ✅ Lazy loading
- ✅ Modern build tools (Vite)

### Additional Optimizations

1. **Image Optimization**
   - Consider using WebP format for images
   - Add image compression tools

2. **CDN**
   - All deployment platforms above include CDN
   - For custom hosting, consider Cloudflare CDN

3. **Analytics** (Optional)
   - Add Google Analytics or Plausible Analytics
   - Add to `index.html`:
     ```html
     <!-- Google Analytics -->
     <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
     ```

## Environment Variables

If you need environment variables:

1. **Create `.env` file** in the project root directory:
   ```
   VITE_API_URL=https://api.example.com
   ```

2. **Access in code**:
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL
   ```

3. **Set in deployment platform**:
   - Netlify: Site settings → Environment variables
   - Vercel: Project settings → Environment Variables
   - GitHub Pages: Repository → Settings → Secrets

## Troubleshooting

### Build Fails

- Check Node.js version (requires 20+)
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript/ESLint errors: `npm run lint`

### Routing Issues (404 on refresh)

- Ensure your hosting platform is configured for SPA routing
- Check redirect rules in `netlify.toml` or `vercel.json`

### Images Not Loading

- Ensure images are in `public/` directory
- Check image paths (should start with `/` not `./`)

### Performance Issues

- Check bundle size: `npm run build` shows size analysis
- Use browser DevTools Network tab
- Consider code splitting for large components

## Recommended Setup

For the best experience, we recommend:

1. **Development**: Use Netlify or Vercel for automatic deployments
2. **Custom Domain**: Configure DNS for your domain
3. **Analytics**: Add Google Analytics or Plausible
4. **Monitoring**: Set up error tracking (Sentry, etc.)

## Support

For issues specific to OpenDPD, visit:
- GitHub: [https://github.com/Lab-EMI/OpenDPD](https://github.com/Lab-EMI/OpenDPD)
- Lab Website: [https://www.tudemi.com](https://www.tudemi.com)

