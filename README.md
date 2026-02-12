# Portfolio Website - Amir Hamza Ridoy

A premium, high-performance developer portfolio built with the latest modern web technologies. This project showcases technical skills, professional experience, and developed projects with a focus on clean design and smooth user experience.

## ✨ Features

- **Dynamic Hero Section**: Features a personalized typing animation and professional branding.
- **Dark & Light Mode**: Seamless theme switching with a sleek toggle and persistent settings.
- **Modular Data-Driven Design**: All site content (About, Experience, Skills, Projects) is managed through structured JSON files for easy updates.
- **High-Performance Navigation**:
  - Smooth section-to-section scrolling with sticky header offset correction.
  - Custom-built **Scroll-to-Top** button with unique eased animation logic.
- **Refined Aesthetics**:
  - Custom SVG iconography for skills.
  - Interactive timeline for career experience.
  - Glassmorphism effects and tailored micro-animations.
- **Fully Responsive**: Optimized for mobile, tablet, and desktop views with fluid layouts.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: React Hooks (useState, useEffect, useTheme)
- **Deployment**: Optimized for [Vercel](https://vercel.com/)

## 📂 Project Structure

- `/components`: Reusable UI components (Hero, Header, Skills, Projects, etc.)
- `/app`: Main application routes and global styles.
- `/public`: Static assets including profile images and icons.

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js installed on your machine.
- A package manager (npm, yarn, or pnpm).

### Installation

1. **Clone the repository**:

   ```bash
   git clone [repository-url]
   cd next-portfolio-ai
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Open the app**:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be in the `.next` folder, ready for deployment.
