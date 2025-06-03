# My Business Website

A modern, responsive business website built with Next.js and Tailwind CSS, featuring a contact form with a serverless API endpoint. This project is designed for easy deployment on Vercel.

## Table of Contents

* [Introduction](#introduction)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Running Locally](#running-locally)
* [Deployment](#deployment)
* [Contributing](#contributing)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
* [License](#license)

## Introduction

This repository contains the source code for "BusinessPro Solutions," a professional and responsive business website. It showcases a typical company landing page with sections for services, about us, and a contact form, demonstrating a full-stack Next.js application where the frontend consumes its own API routes.

## Features

* **Responsive Design:** Optimized for various screen sizes (mobile, tablet, desktop) using Tailwind CSS.
* **Modern UI:** Clean, professional aesthetic with smooth animations.
* **Hero Section:** Engaging introductory section with a call-to-action.
* **Services Section:** Highlights key business offerings with illustrative icons.
* **About Us Section:** Provides company overview and mission.
* **Contact Form:** Functional form that sends data to a Next.js API route (simulated backend processing).
* **Serverless API:** Backend logic for the contact form handled by a Next.js API route, ready for Vercel deployment.
* **Component-Based Architecture:** Reusable React components for maintainability and scalability.
* **Easy Deployment:** Configured for seamless deployment on Vercel.

## Technologies Used

* **Next.js** (React Framework)
* **React** (Frontend Library)
* **Tailwind CSS** (Utility-first CSS Framework)
* **Node.js** (for running Next.js development server and builds)

## Project Structure

my-business-website/
├── components/           # Reusable React components (Header, Footer, Sections, Form)
│   ├── AboutSection.js
│   ├── ContactForm.js
│   ├── Footer.js
│   ├── Header.js
│   ├── HeroSection.js
│   ├── Layout.js
│   └── ServicesSection.js
├── pages/                # Next.js pages and API routes
│   ├── api/              # Serverless API routes
│   │   └── contact.js    # API endpoint for contact form submissions
│   ├── _app.js
│   └── index.js          # Main homepage
├── public/               # Static assets (e.g., favicon.ico, images)
├── styles/
│   └── globals.css       # Global CSS and Tailwind CSS imports
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration for Tailwind CSS
├── README.md             # This file
└── tailwind.config.js    # Tailwind CSS configuration


## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (or yarn) installed on your system.

* **Node.js**: [Download & Install Node.js](https://nodejs.org/en/download/) (includes npm)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/bhousxrenz/my-business-website.git](https://github.com/bhousxrenz/my-business-website.git)
    cd my-business-website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

### Running Locally

To start the development server:

```bash
npm run dev
# or
# yarn dev
Open http://localhost:3000 in your browser to see the website. The contact form submissions will log to your terminal where the development server is running.

Deployment
This project is configured for seamless deployment on Vercel, the creators of Next.js.

Push to GitHub: Ensure your project is pushed to a GitHub repository (which you've already done!).
Import to Vercel:
Go to Vercel Dashboard.
Click "Add New..." -> "Project".
Select "Continue with GitHub" and choose your my-business-website repository.
Vercel will automatically detect it's a Next.js project and configure the build settings.
Click "Deploy".
Vercel will build and deploy your application, including the serverless API routes. You can view API logs directly in your Vercel project dashboard under the "Functions" or "Logs" tab for specific deployments.

Contributing
We welcome contributions to this project! If you'd like to contribute, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix: git checkout -b feature/your-feature-name or git checkout -b bugfix/issue-description.
Make your changes.
Commit your changes with a clear and concise message: git commit -m "feat: Add new feature".
Push your branch to your forked repository: git push origin feature/your-feature-name.
Open a Pull Request to the main branch of this repository, describing your changes in detail.
Please ensure your code adheres to the existing coding style and passes all linting checks.

Acknowledgements
Next.js: The powerful React framework that powers this application.
Tailwind CSS: For the utility-first CSS framework that enabled rapid UI development.
Vercel: For providing an excellent platform for seamless deployment.
Contact
For any questions or support, please open an issue in this repository or contact:

GitHub: @bhousxrenz
License
This project is open-source and available under the MIT License.
