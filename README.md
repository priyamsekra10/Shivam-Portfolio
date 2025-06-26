# Shivam Sekra Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Firebase.

## Features

- 🚀 Built with Next.js 14
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- 🔥 Firebase integration for contact form
- 📊 Google Analytics integration
- ⚡ Optimized for performance

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

### AWS Amplify
This project is configured for AWS Amplify deployment. The `amplify.yml` file contains the build configuration.

### Static Export (GitHub Pages)
To deploy as a static site:
```bash
npm run export
npm run deploy
```

## Environment Variables

Optional environment variables can be set in AWS Amplify or your deployment platform:
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Database**: Firebase Firestore
- **Deployment**: AWS Amplify
- **Analytics**: Google Analytics
