import React, { useState, useEffect } from 'react';
import { ALL_PROJECTS } from './data/projects';
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { ModsPage } from './components/ModsPage';
import { SpeakingPage } from './components/SpeakingPage';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSlug, setActiveSlug] = useState<string>('home');

  // Handle URL hash sync or initial load
  useEffect(() => {
    const handleHashChange = () => {
      const fullHash = window.location.hash;
      if (fullHash.startsWith('#/')) {
        const cleanSlug = fullHash.slice(2).split('#')[0];
        if (cleanSlug) {
          setActiveSlug(cleanSlug);
        } else {
          setActiveSlug('home');
        }
      } else if (fullHash.startsWith('#')) {
        const raw = fullHash.slice(1);
        const isKnownRoute = ALL_PROJECTS.some(p => p.slug === raw) || ['home', 'mods', 'extra-stuff'].includes(raw);
        if (isKnownRoute) {
          setActiveSlug(raw);
        }
      } else {
        setActiveSlug('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (slug: string) => {
    setActiveSlug(slug);
    if (slug === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = `/${slug}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find project if active slug matches a game
  const currentProject = ALL_PROJECTS.find((p) => p.slug === activeSlug);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-200 antialiased flex flex-col justify-between">
      
      <div>
        {/* Fixed Header */}
        <Header activeSlug={activeSlug} onNavigate={handleNavigate} />

        {/* Dynamic Main View */}
        <main>
          {activeSlug === 'home' || activeSlug === '' ? (
            <>
              <AboutSection onNavigate={handleNavigate} />
              <ProjectsSection onNavigate={handleNavigate} />
            </>
          ) : activeSlug === 'mods' ? (
            <ModsPage onNavigate={handleNavigate} />
          ) : activeSlug === 'extra-stuff' ? (
            <SpeakingPage onNavigate={handleNavigate} />
          ) : currentProject ? (
            <ProjectDetailPage project={currentProject} onNavigate={handleNavigate} />
          ) : (
            // Fallback if slug not found
            <div className="py-20 text-center space-y-4">
              <h2 className="text-2xl font-serif text-gray-800">Page Not Found</h2>
              <button
                onClick={() => handleNavigate('home')}
                className="text-xs font-sans text-blue-700 underline font-semibold"
              >
                Return to Portfolio Homepage
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}
