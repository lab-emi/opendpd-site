# Quick Start - Deploy OpenDPD Website

## Fastest Deployment (5 minutes)

### Option 1: Netlify (Recommended)

1. Go to [netlify.com](https://www.netlify.com) and sign up with GitHub
2. Click "Add new site" → "Import an existing project"
3. Select your OpenDPD repository
4. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click "Deploy site"
6. Done! Your site is live at `https://your-site.netlify.app`

### Option 2: Vercel

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "Add New Project"
3. Import your repository
4. Configure:
   - **Framework**: Vite
5. Click "Deploy"
6. Done! Your site is live

## Local Testing

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Build Locally

```bash
npm run build
```

Output is in `dist/` directory.

## Custom Domain

After deployment, add your custom domain in:
- **Netlify**: Site settings → Domain management
- **Vercel**: Project settings → Domains

## Need Help?

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions and troubleshooting.

