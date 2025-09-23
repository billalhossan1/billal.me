# Billal Hossan - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This is a one-page portfolio showcasing my skills, projects, experience, and contact information.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Smooth Scroll Navigation**: Sticky navigation bar with smooth scrolling to sections
- **Modern UI/UX**: Clean, elegant design with gradient themes and animations
- **Interactive Components**: Hover effects, progress bars, and animated elements
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and structured data
- **TypeScript**: Type-safe development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Development**: Turbopack for fast development
- **Linting**: ESLint
- **Deployment**: Vercel-ready

## 📱 Sections

1. **Hero Section**: Introduction with animated gradient background
2. **About**: Personal information and brief introduction
3. **Skills**: Technical skills with progress bars and categories
4. **Experience**: Timeline-style experience showcase
5. **Projects**: Grid layout of featured projects with tech stacks
6. **Contact**: Contact form and social media links

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/billalhossan/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and custom animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx            # Main page with all sections
└── components/
    ├── About.tsx           # About section component
    ├── Contact.tsx         # Contact form and information
    ├── Experience.tsx      # Experience timeline
    ├── Hero.tsx            # Hero section with animations
    ├── Navigation.tsx      # Sticky navigation bar
    ├── Projects.tsx        # Projects grid
    └── Skills.tsx          # Skills with progress bars
```

## 🎨 Customization

To customize the portfolio for your own use:

1. **Personal Information**: Update personal details in each component
2. **Projects**: Modify the projects array in `src/components/Projects.tsx`
3. **Skills**: Update skills and levels in `src/components/Skills.tsx`
4. **Experience**: Edit experience timeline in `src/components/Experience.tsx`
5. **Colors**: Modify Tailwind classes for different color schemes
6. **Content**: Update text content throughout the components

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Build for Production

```bash
npm run build
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Billal Hossan**

- Email: billal@example.com
- GitHub: [@billalhossan](https://github.com/billalhossan)
- LinkedIn: [billalhossan](https://linkedin.com/in/billalhossan)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
