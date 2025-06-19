# 🛍️ E-commerce Store

A modern, high-performance e-commerce application built with React 19, Vite, Redux Toolkit, and React Router. This application features a responsive design, product catalog, shopping cart, and secure checkout process.

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_DEPLOY_ID/deploy-status)](https://app.netlify.com/sites/YOUR_SITE_NAME/deploys)

## ✨ Features

- ⚡ Blazing fast performance with Vite
- 🎨 Responsive design that works on all devices
- 🛒 Full shopping cart functionality
- 🔍 Product search and filtering
- 🔄 State management with Redux Toolkit
- 🛡️ Secure checkout process
- 📱 Mobile-first approach
- 🚀 Optimized for production

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or later recommended)
- npm (v9 or later) or yarn (v1.22+)
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ecommerce.git
   cd ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to see the app.

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Lint code with ESLint
- `npm run format` - Format code with Prettier

## 🌐 Deployment

This project is optimized for deployment on Netlify. Follow these steps to deploy:

### Option 1: Netlify CLI (Recommended)

1. Install Netlify CLI globally:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to your Netlify account:
   ```bash
   netlify login
   ```

3. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod
   ```

### Option 2: Connect to Git Repository

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Log in to [Netlify](https://www.netlify.com/)
3. Click on "Add new site" > "Import an existing project"
4. Select your Git provider and repository
5. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Environment Variables

If your app requires environment variables, set them in the Netlify dashboard under:

1. Site settings > Build & deploy > Environment
2. Click "Edit variables"
3. Add your environment variables

## 🛡️ Security Headers

This project includes security headers configured in `netlify.toml` to protect against common web vulnerabilities. The headers include:

- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy

## 🚀 Performance Optimization

- Code splitting with dynamic imports
- Lazy loading of routes and components
- Optimized asset loading

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
