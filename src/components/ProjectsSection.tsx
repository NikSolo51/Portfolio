import React from 'react';
import { ALL_PROJECTS } from '../data/projects';

interface ProjectsSectionProps {
  onNavigate: (slug: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h1 className="text-2xl sm:text-3xl text-gray-700 mb-8 font-light uppercase tracking-[0.18em]" style={{ fontFamily: 'futura-pt, sans-serif' }}>
          ПРОЕКТЫ
        </h1>

        {/* 2-Column Projects Grid - Filtered to Stack only */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {ALL_PROJECTS.filter((p) => p.slug === 'stack').map((project) => (
            <div key={project.id} className="space-y-4">
              
              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-light text-gray-900" style={{ fontFamily: 'futura-pt, sans-serif' }}>
                <button
                  onClick={() => onNavigate(project.slug)}
                  className="hover:underline text-left"
                >
                  {project.title}
                </button>
              </h2>

              {/* Screenshot / Boxart Image */}
              <div
                onClick={() => onNavigate(project.slug)}
                className="cursor-pointer overflow-hidden border border-gray-200 rounded-sm bg-gray-100 group"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300 block"
                  loading="lazy"
                />
              </div>

              {/* Details & Contributions Text */}
              <div className="text-[13px] sm:text-[14.5px] text-gray-800 space-y-2.5 font-sans leading-relaxed">
                
                {/* Link to portfolio page */}
                <p>
                  <span className="font-bold text-gray-900">Ссылка: </span>
                  <button
                    onClick={() => onNavigate(project.slug)}
                    className="text-blue-700 underline font-medium hover:text-blue-900"
                  >
                    Страница проекта
                  </button>
                </p>

                {/* Contributions */}
                <div>
                  <span className="font-semibold italic text-gray-700">Вклад: </span>
                  <span
                    dangerouslySetInnerHTML={{ __html: project.contributionsHtml }}
                  />
                </div>

                {/* Job Title / Role */}
                {project.jobTitle && (
                  <p>
                    <span className="font-semibold italic text-gray-700">Должность: </span>
                    <span className="text-gray-800">{project.jobTitle}</span>
                  </p>
                )}

                {/* Studio */}
                {project.studio && (
                  <p>
                    <span className="font-semibold italic text-gray-700">Студия: </span>
                    <span>{project.studio}</span>
                  </p>
                )}

                {/* Platforms */}
                {project.platforms && (
                  <p>
                    <span className="font-semibold italic text-gray-700">Платформы: </span>
                    <span>{project.platforms}</span>
                  </p>
                )}

                {/* Critical Reception */}
                {project.criticalReception && (
                  <p>
                    <span className="font-semibold italic text-gray-700">Отзывы и награды: </span>
                    <span>{project.criticalReception}</span>
                  </p>
                )}

                {/* Engine and tools */}
                {project.engineAndTools && (
                  <p>
                    <span className="font-semibold italic text-gray-700">Движок и инструменты: </span>
                    <span>{project.engineAndTools}</span>
                  </p>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

