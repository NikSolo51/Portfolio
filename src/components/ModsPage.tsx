import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ModsPageProps {
  onNavigate: (slug: string) => void;
}

export const ModsPage: React.FC<ModsPageProps> = ({ onNavigate }) => {
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
          Maps and MODs
        </h1>
        <p className="text-sm font-sans text-gray-600 mt-2">
          Over 30 released levels for the Unreal Tournament & Modding Community (1999–2004)
        </p>
      </header>

      {/* Main Content */}
      <div className="space-y-8 font-sans text-gray-800 text-sm sm:text-base leading-relaxed">
        
        <p className="text-lg font-serif text-gray-900 font-normal">
          Before entering the commercial games industry, Dean Tate spent over 5 years deeply involved in the PC level modding scene, crafting over 30 custom levels for <strong>Unreal Tournament</strong>, <strong>UT2003</strong>, <strong>UT2004</strong>, and <strong>Deus Ex</strong>.
        </p>

        <div className="bg-gray-50 border border-gray-200 p-6 rounded space-y-4">
          <h2 className="text-xl font-serif text-gray-900 font-medium">
            Modding Highlights & Legacy
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <strong>Unreal Tournament (1999) & UT2004:</strong> Designed, built, and lit Deathmatch, Capture the Flag, and Assault maps downloaded over 100,000 times across FilePlanet and PlanetUnreal.
            </li>
            <li>
              <strong>Community Recognition:</strong> Awarded multiple "Map of the Week" accolades on NaliCity and PlanetUnreal.
            </li>
            <li>
              <strong>Industry Break:</strong> The spatial complexity, lighting, and gameplay flow of these public community maps directly caught the attention of Irrational Games Australia, leading to Dean’s first commercial level designer position on <em>Tribes: Vengeance</em>.
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-xs text-gray-500 italic">
            "Modding was the absolute best sandbox to master player flow, line of sight sightlines, lighting balance, and level pacing." — Dean Tate
          </p>
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
