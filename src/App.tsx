import { Suspense, lazy, useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import { Toaster } from 'react-hot-toast';

// Lazy load components
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Contact = lazy(() => import('./components/sections/Contact'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking if all resources are loaded
    const checkResourcesLoaded = () => {
      const allImages = document.getElementsByTagName('img');
      const allStylesheets = document.getElementsByTagName('link');
      const allScripts = document.getElementsByTagName('script');

      const resources = [...Array.from(allImages), ...Array.from(allStylesheets), ...Array.from(allScripts)];
      
      const loadedResources = resources.filter(resource => {
        if (resource instanceof HTMLImageElement) {
          return resource.complete;
        }
        return true;
      });

      return loadedResources.length === resources.length;
    };

    const timer = setInterval(() => {
      if (checkResourcesLoaded()) {
        setIsLoading(false);
        clearInterval(timer);
      }
    }, 100);

    // Fallback in case something goes wrong
    setTimeout(() => {
      setIsLoading(false);
      clearInterval(timer);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Toaster position="bottom-right" />
      <div className="bg-background text-text">
        <Navbar />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default App; 