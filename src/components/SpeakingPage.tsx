import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface SpeakingPageProps {
  onNavigate: (slug: string) => void;
}

export const SpeakingPage: React.FC<SpeakingPageProps> = ({ onNavigate }) => {
  return (
    <article className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Back Button */}
      <div>
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-sans font-medium text-gray-600 hover:text-black border border-gray-300 rounded px-3 py-1.5 transition-colors bg-white shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio Overview</span>
        </button>
      </div>

      {/* Title */}
      <header className="border-b border-gray-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-serif text-gray-900 font-normal">
          Speaking and Community Involvement
        </h1>
        <p className="text-sm font-sans text-gray-600 mt-2">
          Public presentations, design panels, and industry mentorship
        </p>
      </header>

      {/* Main Content */}
      <div className="space-y-8 font-sans text-gray-800 text-sm sm:text-base leading-relaxed">
        
        <p className="text-lg font-serif text-gray-900 font-normal">
          Dean Tate is an active speaker and community advocate who regularly presents talks at major industry conferences and mentors emerging level designers.
        </p>

        {/* Selected Talks */}
        <div className="space-y-6">
          <h2 className="text-xl font-serif text-gray-900 border-b border-gray-200 pb-2">
            Selected Conference Presentations & Workshops
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 p-5 rounded space-y-2">
              <h3 className="font-bold text-gray-900 text-base">
                Game Developers Conference (GDC) — Level Pacing & Environmental Storytelling
              </h3>
              <p className="text-xs text-gray-600 font-serif italic">GDC San Francisco</p>
              <p className="text-sm text-gray-700">
                A breakdown of environmental visual cues, subverting player expectations, and managing tension curves in <em>BioShock</em> and <em>Half-Life: Alyx</em>.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-5 rounded space-y-2">
              <h3 className="font-bold text-gray-900 text-base">
                Boston Post-Mortem & PAX Panels — Indie Ship Building in Captain Forever Remix
              </h3>
              <p className="text-xs text-gray-600 font-serif italic">PAX East & Local Dev Meetups</p>
              <p className="text-sm text-gray-700">
                Insights into micro-studio production, modular physics tuning, and transitioning from AAA lead roles to 2-person indie teams.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-5 rounded space-y-2">
              <h3 className="font-bold text-gray-900 text-base">
                IGDA & University Guest Lectures on VR & Motion Design
              </h3>
              <p className="text-xs text-gray-600 font-serif italic">Keynote & Guest Mentor</p>
              <p className="text-sm text-gray-700">
                Lectures covering motion controller spatial usability, VR locomotion comfort, and blind-monster audio feedback design in <em>Half-Life: Alyx</em>.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Nav */}
      <div className="pt-8 border-t border-gray-200 flex justify-between items-center text-xs text-gray-600 font-sans">
        <button
          onClick={() => onNavigate('home')}
          className="hover:text-black underline font-medium"
        >
          ← Return to All Projects
        </button>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="hover:text-black underline"
        >
          Back to Top ↑
        </button>
      </div>

    </article>
  );
};
