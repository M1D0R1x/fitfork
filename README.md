# FitFork - Your Personal AI Nutrition Coach

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-blue?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## Overview

FitFork is an AI-powered nutrition coach application that provides personalized nutrition plans tailored to your unique needs, preferences, and goals. The application uses advanced AI to analyze your data and create truly personalized nutrition recommendations.

## Features

- **AI-Powered Recommendations**: Advanced AI analyzes your data to create truly personalized nutrition plans
- **Customized Meal Plans**: Get meal plans that match your dietary preferences, restrictions, and nutritional needs
- **Quick & Easy Setup**: Answer a few questions and get your personalized nutrition plan in minutes
- **Health-Focused Approach**: Plans designed to improve your overall health, not just for weight management
- **Dietary Restriction Friendly**: Support for all dietary needs including vegan, vegetarian, gluten-free, and more
- **Progress Tracking**: Monitor your nutrition journey with easy-to-understand metrics and insights

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/) package manager

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/fitfork.git
   cd fitfork
   ```

2. **Install dependencies**

   Using npm:
   ```bash
   npm install
   ```

   Using yarn:
   ```bash
   yarn install
   ```

   Using pnpm:
   ```bash
   pnpm install
   ```

3. **Set up environment variables (optional)**

   Create a `.env.local` file in the root directory and add your OpenAI API key if you want to use the AI-powered plan generation:

   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

   Note: The application will work without an API key by using fallback nutrition plans.

## Running the Application

### Development Mode

To run the application in development mode with hot-reload:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Production Build

To create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

To start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## Project Structure

- `/app` - Next.js application pages and layouts
- `/components` - React components
- `/lib` - Utility functions and core logic
- `/public` - Static assets
- `/styles` - Global CSS styles

## Deployment

The project is configured for easy deployment on Vercel. The live version is available at:

**[https://fitfork.vercel.app](https://fitfork.vercel.app)**

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [v0.dev](https://v0.dev)
- Powered by [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
