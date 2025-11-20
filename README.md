# OpenDPD Website

A modern, responsive landing page for the OpenDPD project - an open-source end-to-end learning framework built in PyTorch for modeling power amplifiers (PA) and digital pre-distortion (DPD).

## Overview

This website showcases the OpenDPD framework, featuring:
- **Performance Metrics**: Side-by-side comparison of OpenDPDv1 and v2 results
- **Architecture Visualization**: Visual diagrams and feature highlights
- **Dataset Showcase**: Available datasets for research
- **Quick Start Guide**: Code examples and installation instructions
- **Research Publications**: Links to published papers

## Tech Stack

- **React 19** - Modern React with latest features
- **Vite 7** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Quick Start

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:5173` to preview the site.

### Build

Build for production:

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
opendpd-site/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Application entry point
│   ├── index.css        # Global styles
│   └── assets/          # Static assets
├── public/              # Public assets (images, etc.)
├── dist/                # Production build output (gitignored)
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── eslint.config.js     # ESLint configuration
├── netlify.toml         # Netlify deployment config
├── vercel.json          # Vercel deployment config
└── .github/workflows/   # GitHub Actions workflows
```

## Deployment

This project is configured for deployment on multiple platforms:

- **Netlify** - See `netlify.toml` for configuration
- **Vercel** - See `vercel.json` for configuration
- **GitHub Pages** - See `.github/workflows/deploy.yml` for CI/CD

For detailed deployment instructions, see:
- [QUICK_START.md](./QUICK_START.md) - Fast deployment guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Comprehensive deployment guide

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ SEO optimized with meta tags
- ✅ Fast loading with Vite optimizations
- ✅ Modern dark theme UI
- ✅ Accessible components

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Links

- **OpenDPD GitHub**: [https://github.com/Lab-EMI/OpenDPD](https://github.com/Lab-EMI/OpenDPD)
- **Lab Website**: [https://www.tudemi.com](https://www.tudemi.com)
- **Colab Tutorial**: [Google Colab Notebook](https://colab.research.google.com/drive/1o5X8hztWyMKaMhPs2gUf2fZABCq2nUjn?usp=sharing)

## License

This project is part of the OpenDPD framework. See the main OpenDPD repository for license information.

## Contributing

Contributions are welcome! Please refer to the main [OpenDPD repository](https://github.com/Lab-EMI/OpenDPD) for contribution guidelines.
