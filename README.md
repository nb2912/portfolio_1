# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, and TailwindCSS.

## Features

- Responsive design
- Contact form with EmailJS integration
- Form validation
- Social media links
- Modern UI with animations using Framer Motion

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Update the configuration in `src/config.ts`:
- Replace `your.email@yourdomain.com` with your actual email address
- Update social media links in the Contact component

5. Start the development server:
```bash
npm run dev
```

6. Build for production:
```bash
npm run build
```

## Environment Variables

- `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key

You can get these credentials by signing up at [EmailJS](https://www.emailjs.com/).

## Project Structure

```
src/
├── assets/        # Static assets
├── components/    # React components
├── styles/       # CSS styles
├── utils/        # Utility functions
├── App.tsx       # Main App component
├── main.tsx      # Entry point
└── config.ts     # Configuration file
```

## Contact Form Template

When setting up your EmailJS template, make sure it includes the following variables:
- `{{name}}`
- `{{email}}`
- `{{message}}`

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 