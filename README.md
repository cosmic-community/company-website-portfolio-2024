# Digital Agency Portfolio

A professional digital agency website built with Next.js 16, Tailwind CSS, and Cosmic CMS. This application dynamically pulls content from your Cosmic bucket to create a polished, responsive agency portfolio.

### Features
- **Dynamic Content**: All pages, services, and testimonials are managed via Cosmic CMS.
- **Next.js 16 App Router**: Utilizes the latest React Server Components architecture.
- **Tailwind CSS Styling**: Modern, utility-first styling for rapid UI development.
- **Responsive Design**: Looks great on all devices.
- **SEO Optimized**: Server-side rendering ensures content is indexable.
- **Markdown Rendering**: Rich text support for page and service descriptions.

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=693c484c11e1fbc7687b006c&clone_repository=693c49b311e1fbc7687b009b)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a digital agency website with pages, services, and testimonials"

### Code Generation Prompt

> "Create a digital agency website with pages, services, and testimonials"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies
- **Next.js 16**: React framework for production.
- **React 19**: UI library.
- **Tailwind CSS**: Utility-first CSS framework.
- **Cosmic SDK**: Headless CMS integration.
- **TypeScript**: Static type checking.
- **Lucide React**: Icon library.
- **React Markdown**: Safe markdown rendering.

## Getting Started

### Prerequisites
- Node.js 18+ or Bun (recommended)
- A Cosmic CMS Bucket with the required content model

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/agency-portfolio.git
   cd agency-portfolio
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Configure environment variables:
   Copy `.env.example` to `.env.local` and add your Cosmic keys:
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   bun run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Deployment

### Vercel
1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Add your `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` environment variables.
4. Deploy!

### Netlify
1. Connect your repository to Netlify.
2. Set the build command to `next build` and publish directory to `.next`.
3. Add the environment variables in Site Settings.
4. Deploy!
<!-- README_END -->