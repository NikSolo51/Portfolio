import React from 'react';
import { GameProject } from '../data/projects';
import { EditorialVideo } from './EditorialVideo';
import { PowerupsShowcase } from './PowerupsShowcase';
import stackAiCombatVideo from '../assets/videos/драка ботов единый клип.mp4';
import stackAiVisionVideo from '../assets/videos/Зрение бота.mp4';
import stackAiNavigationVideo from '../assets/videos/Бот Ходит.mp4';

// Local video imports for Section 01 — БОЙ
import combatRicochetKillVideo from '../assets/videos/ricochet.mp4';
import tripleDiscVideo from '../assets/videos/triple_disks.mp4';
import explosionVideo from '../assets/videos/Explotion_Powerup.mp4';
import freezeVideo from '../assets/videos/freeze_powerup.mp4';

interface CombatPowerup {
  id: string;
  title: string;
  description: string;
  video: string;
}

const combatPowerups: CombatPowerup[] = [
  {
    id: 'triple',
    title: 'Тройной диск',
    description: 'Три диска вместо одного.',
    video: tripleDiscVideo,
  },
  {
    id: 'explosion',
    title: 'Взрыв',
    description: 'Попадание наносит урон по области.',
    video: explosionVideo,
  },
  {
    id: 'freeze',
    title: 'Заморозка',
    description: 'Попадание замораживает противника.',
    video: freezeVideo,
  },
];

interface ProjectDetailPageProps {
  project: GameProject;
  onNavigate: (slug: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, onNavigate }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = () => {
      if (videoRef.current) {
        if (mediaQuery.matches) {
          videoRef.current.pause();
        } else {
          videoRef.current.play().catch(() => {});
        }
      }
    };
    handleMotionChange();
    mediaQuery.addEventListener?.('change', handleMotionChange);
    return () => mediaQuery.removeEventListener?.('change', handleMotionChange);
  }, [project.slug]);

  const [isTrailerPlaying, setIsTrailerPlaying] = React.useState(false);

  if (!project) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-serif text-gray-800">Проект не найден</h2>
      </div>
    );
  }

  return (
    <article className="font-sans text-[#1d1d1f] w-full pb-16 overflow-x-clip">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-[72px] lg:pt-[80px]">
        
        {/* Title & Description */}
        <div className="mb-[44px] lg:mb-[48px]">
          <h1 className="text-[42px] sm:text-[48px] md:text-[clamp(48px,5vw,64px)] leading-[1.05] font-semibold text-[#1d1d1f] tracking-tight uppercase m-0">
            {project.title}
          </h1>
          <p className="m-0 mt-[18px] sm:mt-[20px] text-[17px] sm:text-[18px] md:text-[21px] leading-[1.45] text-[#6e6e73] max-w-[840px] [text-wrap:balance]">
            Мультиплеерная VR-арена, где победу решают движение, тайминг и рикошеты.
          </p>
        </div>
        
        {/* Top Split: Video (left) and Metadata (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.95fr)] gap-[32px] sm:gap-[40px] lg:gap-[52px] items-start lg:items-center">
          
          {/* Left Column - Trailer */}
          <div className="w-full">
            <div className="relative w-full aspect-[16/9] rounded-[14px] sm:rounded-[16px] overflow-hidden bg-gray-100 group">
              {isTrailerPlaying && project.heroVideoUrl ? (
                <iframe
                  src={`${project.heroVideoUrl}&autoplay=1`}
                  title={`Трейлер проекта ${project.title}`}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src={project.editorialSummary?.posterImage || project.image}
                    alt={`Обложка трейлера ${project.title}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                    <button
                      onClick={() => setIsTrailerPlaying(true)}
                      aria-label="Воспроизвести трейлер"
                      className="w-[56px] h-[56px] sm:w-[60px] sm:h-[60px] lg:w-[72px] lg:h-[72px] bg-white/95 hover:bg-white text-black rounded-full flex items-center justify-center shadow-sm backdrop-blur-sm transition-transform hover:scale-105 outline-none focus-visible:ring-4 focus-visible:ring-black"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="ml-1 sm:ml-2 w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9">
                        <path d="M6 4L20 12L6 20V4Z" />
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Column - Metadata */}
          <div className="w-full">
            <dl className="flex flex-col gap-y-[18px] sm:gap-y-[22px]">
              {project.year && (
                <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] items-baseline">
                  <dt className="text-[13px] sm:text-[14px] text-[#6e6e73]">Год</dt>
                  <dd className="text-[15px] sm:text-[16px] text-[#1d1d1f] font-medium">{project.year}</dd>
                </div>
              )}
              {project.studio && (
                <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] items-baseline">
                  <dt className="text-[13px] sm:text-[14px] text-[#6e6e73]">Студия</dt>
                  <dd className="text-[15px] sm:text-[16px] text-[#1d1d1f] font-medium">{project.studio}</dd>
                </div>
              )}
              {project.genre && (
                <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] items-baseline">
                  <dt className="text-[13px] sm:text-[14px] text-[#6e6e73]">Жанр</dt>
                  <dd className="text-[15px] sm:text-[16px] text-[#1d1d1f] font-medium">{project.genre}</dd>
                </div>
              )}
              {project.platforms && (
                <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] items-baseline">
                  <dt className="text-[13px] sm:text-[14px] text-[#6e6e73]">Платформа</dt>
                  <dd className="text-[15px] sm:text-[16px] text-[#1d1d1f] font-medium">{project.platforms}</dd>
                </div>
              )}
              {project.jobTitle && (
                <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] items-baseline">
                  <dt className="text-[13px] sm:text-[14px] text-[#6e6e73]">Моя роль</dt>
                  <dd className="text-[15px] sm:text-[16px] text-[#1d1d1f] font-medium">{project.jobTitle}</dd>
                </div>
              )}
              {project.timeSpent && (
                <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] items-baseline">
                  <dt className="text-[13px] sm:text-[14px] text-[#6e6e73]">В проекте</dt>
                  <dd className="text-[15px] sm:text-[16px] text-[#1d1d1f] font-medium">{project.timeSpent}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </section>

      <hr className="max-w-6xl mx-auto border-t border-gray-200 mt-[80px] lg:mt-[88px] mb-0" />

    {/* SUMMARY OF CONTRIBUTIONS / EDITORIAL SECTION */}
    {project.editorialSummary ? (
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-[96px] pb-14 sm:pb-16 lg:pb-[104px]" aria-label="Обзор вклада">
        {/* Large Headline */}
        {project.editorialSummary.headline && (
          <h2
            className="text-[28px] sm:text-[34px] md:text-[clamp(34px,3.6vw,48px)] leading-[1.12] sm:leading-[1.08] font-semibold text-[#1d1d1f] tracking-[-0.02em] max-w-[950px] mb-8 sm:mb-10 lg:mb-[60px] whitespace-pre-line"
            style={{ fontFamily: 'proxima-nova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            {project.editorialSummary.headline}
          </h2>
        )}

        {/* Two-column layout (Desktop) / Mobile order (Visual above links) */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,390px)_minmax(0,1fr)] gap-8 md:gap-10 lg:gap-[56px] items-center">
          
          {/* Left Column: 3 Clickable Link Rows */}
          <div className="order-2 lg:order-1 flex flex-col divide-y divide-[#d2d2d7]">
            {project.editorialSummary.items?.map((item) => (
              <a
                key={item.number}
                href={item.anchorHref}
                onClick={(e) => {
                  if (item.anchorHref.startsWith('#')) {
                    const targetId = item.anchorHref.slice(1);
                    const targetEl = document.getElementById(targetId);
                    if (targetEl) {
                      e.preventDefault();
                      targetEl.scrollIntoView({ behavior: 'smooth' });
                      window.history.pushState(null, '', item.anchorHref);
                    }
                  }
                }}
                className="group flex items-start gap-4 sm:gap-5 py-6 sm:py-[26px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 rounded-sm transition-colors text-left w-full cursor-pointer no-underline"
              >
                {/* Number */}
                <span className="text-[14px] sm:text-[15px] font-sans text-[#6e6e73] font-normal shrink-0 pt-0.5 w-6 sm:w-7">
                  {item.number}
                </span>

                {/* Content */}
                <div className="flex-1 pr-2">
                  <h3 className="text-[19px] sm:text-[20px] font-semibold text-[#1d1d1f] tracking-tight uppercase mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[15px] sm:text-[16px] leading-[1.5] text-[#6e6e73] m-0 whitespace-pre-line">
                    {item.description}
                  </p>
                  {item.extraInfo && (
                    <p className="text-[14px] leading-normal text-[#6e6e73] mt-2 m-0 font-normal">
                      {item.extraInfo}
                    </p>
                  )}
                </div>

                {/* Minimalist Diagonal Down-Right Arrow (shifts 3-4px down-right on hover) */}
                <svg
                  className="w-5 h-5 text-[#1d1d1f] shrink-0 mt-1 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:translate-y-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="7" y1="7" x2="17" y2="17" />
                  <polyline points="17 7 17 17 7 17" />
                </svg>
              </a>
            ))}
          </div>

          {/* Right Column: Large Game Visual (~10% larger, 16/10 aspect ratio, object-cover) */}
          <div className="order-1 lg:order-2 w-full">
            <div className="relative w-full aspect-[16/10] rounded-[16px] overflow-hidden bg-gray-100">
              {project.editorialSummary.videoUrl ? (
                <video
                  ref={videoRef}
                  src={project.editorialSummary.videoUrl}
                  poster={project.editorialSummary.posterImage || project.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label={`Игровой процесс ${project.title}`}
                  className="w-full h-full object-cover block"
                />
              ) : (
                <img
                  src={project.editorialSummary.image || project.image}
                  alt={`Игровой визуал ${project.title}`}
                  className="w-full h-full object-cover block"
                />
              )}
            </div>
          </div>

        </div>
      </section>
    ) : project.summaryOfContributions ? (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-3xl font-light text-gray-900 mb-8 uppercase tracking-wide" style={{ fontFamily: 'futura-pt, sans-serif' }}>
          Обзор вклада в проект
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div 
            className="text-sm leading-relaxed space-y-4 text-gray-800 [&>p]:m-0 [&>p+p]:mt-4" 
            dangerouslySetInnerHTML={{ __html: project.summaryOfContributions.textHtml }} 
          />

          <div className="w-full">
            {project.summaryOfContributions.videos && project.summaryOfContributions.videos.map((vid, idx) => (
              <video 
                key={`vid-${idx}`} 
                src={vid} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-auto object-cover aspect-video block rounded-[16px]" 
              />
            ))}
            {project.summaryOfContributions.images && project.summaryOfContributions.images.map((img, idx) => (
              <img 
                key={`img-${idx}`} 
                src={img} 
                alt="Contribution" 
                className="w-full h-auto object-cover aspect-video block rounded-[16px]" 
              />
            ))}
          </div>
        </div>
      </div>
    ) : null}

      {/* FULL PLAYTHROUGH VIDEO */}
      {project.fullPlaythroughVideoUrl && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-2xl font-light text-gray-900 uppercase tracking-wide" style={{ fontFamily: 'futura-pt, sans-serif' }}>
            Полное прохождение
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-start-3 md:col-span-8 aspect-video bg-black">
              <iframe
                src={project.fullPlaythroughVideoUrl}
                title="Full Playthrough"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Cross-section Divider (replaces large blank space) */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 mt-[64px] lg:mt-[72px]">
        <hr className="border-t border-[#d2d2d7] m-0" />
      </div>

      {/* 01 — БОЙ Section for STACK */}
      {project.slug === 'stack' && (
        <section id="combat-core" className="w-full scroll-mt-24 sm:scroll-mt-[100px] mt-[72px] lg:mt-[80px]">
          {/* Top content within max-w-6xl */}
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            {/* Section Intro */}
            <div className="mb-[64px] sm:mb-[80px] lg:mb-[96px]">
              <span className="block text-[13px] sm:text-[14px] font-medium uppercase text-[#6e6e73] tracking-[0.08em] mb-4">
                01 — БОЙ
              </span>
              <h2 className="text-[38px] sm:text-[44px] md:text-[clamp(42px,4.3vw,58px)] leading-[1.08] sm:leading-[1.12] font-semibold text-[#1d1d1f] max-w-[900px] mb-6 [text-wrap:balance]">
                Всё начинается с броска.
              </h2>
              <p className="text-[18px] sm:text-[19px] leading-[1.55] text-[#1d1d1f] max-w-[820px] font-normal [text-wrap:pretty]">
                Диск — основное оружие STACK. Вокруг броска, рикошета и попадания строится бой между игроками.
              </p>
            </div>

            {/* Main Combat Video (16:9, wide, no caption) */}
            <div className="w-full">
              <EditorialVideo
                src={combatRicochetKillVideo}
                aspectRatio="aspect-[16/9]"
                ariaTitle="Бросок, рикошет и попадание в бою"
              />
            </div>

            {/* Text block after main video */}
            <div className="mt-[48px] sm:mt-[56px] lg:mt-[64px] max-w-[760px]">
              <p className="text-[17px] sm:text-[18px] leading-[1.55] sm:leading-[1.65] text-[#1d1d1f] font-normal [text-wrap:pretty]">
                Я работал над основной механикой диска: броском, рикошетами, попаданиями, щитом, возвратом в руку и сетевым поведением.
              </p>
            </div>

            {/* Large vertical spacing before Abilities subsection */}
            <div className="mt-[96px] sm:mt-[112px] lg:mt-[140px]">
              {/* H3 Headline & Description */}
              <div className="max-w-[760px] mb-[40px] sm:mb-[48px] lg:mb-[56px]">
                <h3 className="text-[28px] md:text-[clamp(28px,2.5vw,36px)] leading-[1.15] font-semibold text-[#1d1d1f] mb-4 sm:mb-5 [text-wrap:balance]">
                  Один бросок. Разные правила.
                </h3>
                <p className="text-[17px] sm:text-[18px] leading-[1.55] sm:leading-[1.65] text-[#1d1d1f] font-normal [text-wrap:pretty]">
                  Способности меняли поведение диска и результат столкновения.
                </p>
              </div>
            </div>
          </div>

          {/* Full-width showcase band stretching horizontally edge-to-edge */}
          <div className="w-full">
            <PowerupsShowcase items={combatPowerups} />
          </div>

          {/* Bottom content within max-w-6xl */}
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            {/* Final text after the showcase block */}
            <div className="mt-[48px] sm:mt-[64px] lg:mt-[72px] max-w-[760px]">
              <p className="text-[15px] sm:text-[16px] leading-[1.55] text-[#6e6e73] font-normal [text-wrap:pretty]">
                Все три способности работали поверх той же системы диска — его физики, попаданий и сетевого состояния.
              </p>
            </div>

            {/* Section Divider separating Combat from Match */}
            <div className="mt-[144px] lg:mt-[160px]">
              <hr className="border-t border-[#d2d2d7] m-0" />
            </div>
          </div>
        </section>
      )}

      {/* 02 — МАТЧ Section for STACK */}
      {project.slug === 'stack' && (
        <section id="ai-bots" className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 scroll-mt-24 sm:scroll-mt-[100px] mt-[72px] lg:mt-[80px]">
          {/* Section Intro */}
          <div className="mb-[96px]">
            <span className="block text-[13px] sm:text-[14px] font-medium uppercase text-[#6e6e73] tracking-[0.08em] mb-4">
              02 — МАТЧ
            </span>
            <h2 className="text-[38px] sm:text-[44px] md:text-[clamp(42px,4.3vw,58px)] leading-[1.08] sm:leading-[1.12] font-semibold text-[#1d1d1f] max-w-[900px] mb-6 [text-wrap:balance]">
              Матч должен состояться — даже без полного состава.
            </h2>
            <p className="text-[18px] sm:text-[19px] leading-[1.55] text-[#1d1d1f] max-w-[820px] font-normal [text-wrap:pretty]">
              Я создал ботов как замену отсутствующим игрокам, а не как движущиеся мишени. Они искали цель, держали дистанцию, уклонялись, бросали на упреждение и поднимали щит — при этом не видели сквозь стены и могли ошибаться.
            </p>
            <div className="mt-[24px] sm:mt-[28px] text-[14px] font-normal text-[#6e6e73]">
              4 тактических поведения · 3 уровня сложности · автоматическое заполнение команд
            </div>
          </div>

          {/* Stories */}
          <div>
            {/* Story 1: Главная история — бой ботов */}
            <div>
              <div className="max-w-[720px] mb-[40px] lg:mb-[48px]">
                <h3 className="text-[28px] md:text-[clamp(28px,2.5vw,36px)] leading-[1.15] font-semibold text-[#1d1d1f] mb-4 sm:mb-6 [text-wrap:balance]">
                  Я научил бота вести бой в движении.
                </h3>
                <p className="text-[17px] sm:text-[18px] leading-[1.55] sm:leading-[1.65] text-[#1d1d1f] font-normal [text-wrap:pretty]">
                  Он бросал диск не в текущую позицию игрока, а туда, где тот должен был оказаться. В защите бот распознавал входящий диск и выводил щит на его траекторию. Движение и бой работали параллельно, поэтому он не замирал между решениями.
                </p>
              </div>
              <EditorialVideo
                src={stackAiCombatVideo}
                fallbackImage={project.image}
                caption="Боты меняют высоту, уклоняются и продолжают бой в движении."
                ariaTitle="Бой ботов в движении"
              />
            </div>

            {/* Story 2: История — восприятие */}
            <div className="mt-[96px] sm:mt-[112px] lg:mt-[160px] grid grid-cols-1 lg:grid-cols-[minmax(0,1.63fr)_minmax(0,1fr)] gap-[28px] sm:gap-[32px] lg:gap-[64px] xl:gap-[72px] items-center">
              <div className="order-1 lg:order-2">
                <h3 className="text-[28px] md:text-[clamp(28px,2.5vw,36px)] leading-[1.15] font-semibold text-[#1d1d1f] mb-4 sm:mb-6 [text-wrap:balance]">
                  Я дал ему честное, настраиваемое зрение.
                </h3>
                <p className="text-[17px] sm:text-[18px] leading-[1.55] sm:leading-[1.65] text-[#1d1d1f] font-normal [text-wrap:pretty]">
                  Дальность, ширина и высота обзора настраивались отдельно. Проверка прямой видимости не позволяла боту смотреть сквозь стены. Потеряв цель, он шёл к её последней известной позиции и только затем возвращался к поиску.
                </p>
              </div>
              <div className="order-2 lg:order-1">
                <EditorialVideo
                  src={stackAiVisionVideo}
                  fallbackImage={project.image}
                  caption="Отладочная визуализация зоны обнаружения."
                  ariaTitle="Зрение бота и зоны обнаружения"
                />
              </div>
            </div>

            {/* Story 3: История — навигация */}
            <div className="mt-[96px] sm:mt-[112px] lg:mt-[160px] grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.63fr)] gap-[28px] sm:gap-[32px] lg:gap-[64px] xl:gap-[72px] items-center">
              <div className="order-1 lg:order-1">
                <h3 className="text-[28px] md:text-[clamp(28px,2.5vw,36px)] leading-[1.15] font-semibold text-[#1d1d1f] mb-4 sm:mb-6 [text-wrap:balance]">
                  Я научил его пользоваться всей ареной.
                </h3>
                <p className="text-[17px] sm:text-[18px] leading-[1.55] sm:leading-[1.65] text-[#1d1d1f] font-normal [text-wrap:pretty]">
                  Бот проходил узкие коридоры, выбирал точки маршрута и переходил между уровнями арены. Если путь обрывался, он связывал несколько прыжков в один непрерывный маршрут.
                </p>
              </div>
              <div className="order-2 lg:order-2">
                <EditorialVideo
                  src={stackAiNavigationVideo}
                  fallbackImage={project.image}
                  caption="Путь по многоуровневой арене и последовательные переходы."
                  ariaTitle="Навигация бота и маршруты по арене"
                />
              </div>
            </div>
          </div>

          {/* Section Divider separating Match from FPS */}
          <div className="mt-[144px] lg:mt-[160px]">
            <hr className="border-t border-[#d2d2d7] m-0" />
          </div>
        </section>
      )}

      {/* 03 — FPS Section for STACK */}
      {project.slug === 'stack' && (
        <section id="meta-quest-performance" className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 scroll-mt-24 sm:scroll-mt-[100px] mt-[72px] lg:mt-[80px]">
          <div>
            <span className="block text-[13px] sm:text-[14px] font-medium uppercase text-[#6e6e73] tracking-[0.08em] mb-4">
              03 — FPS
            </span>
            <h2 className="text-[38px] sm:text-[44px] md:text-[clamp(42px,4.3vw,58px)] leading-[1.08] sm:leading-[1.12] font-semibold text-[#1d1d1f] max-w-[900px] mb-4 [text-wrap:balance]">
              55 → 72 FPS.
            </h2>
            <p className="text-[18px] sm:text-[19px] leading-[1.55] text-[#1d1d1f] max-w-[820px] font-normal [text-wrap:pretty]">
              ~3000 → ~900 батчей.
            </p>
          </div>
        </section>
      )}

      {/* Highlights / Detailed Blocks (for other projects) */}
      {project.slug !== 'stack' && project.detailBlocks && project.detailBlocks.length > 0 && (
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 space-y-16 mt-12 lg:mt-16">
          <h1 className="text-3xl font-light text-gray-900 mb-8 uppercase tracking-wide" style={{ fontFamily: 'futura-pt, sans-serif' }}>
            Особенности и детали
          </h1>

          {project.detailBlocks.map((block, idx) => (
            <div key={idx} id={block.id} className="space-y-6 scroll-mt-24 sm:scroll-mt-28">
              {block.title && (
                <h2 className="text-2xl font-light text-gray-900 uppercase tracking-wide" style={{ fontFamily: 'futura-pt, sans-serif' }}>
                  {block.title}
                </h2>
              )}
              
              {/* Gallery mode */}
              {block.mediaPosition === 'gallery' && block.galleryImages && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {block.galleryImages.map((img, i) => (
                    <img key={i} src={img} alt="" className="w-full h-auto aspect-video object-cover" />
                  ))}
                </div>
              )}
              
              {block.mediaPosition === 'gallery' && block.contentHtml && (
                <div className="text-sm leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: block.contentHtml }} />
              )}

              {/* Two columns mode (text + media) */}
              {(block.mediaPosition === 'left' || block.mediaPosition === 'right') && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  {/* Left Column */}
                  <div className={block.mediaPosition === 'left' ? "order-1" : "order-2"}>
                    {block.videoUrl ? (
                      <div className="aspect-video w-full bg-black">
                        <iframe
                          src={block.videoUrl}
                          title={block.title}
                          className="w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : block.imageUrl ? (
                      <img src={block.imageUrl} alt="" className="w-full h-auto aspect-video object-cover" />
                    ) : null}
                  </div>
                  
                  {/* Right Column */}
                  <div className={`text-sm leading-relaxed space-y-4 ${block.mediaPosition === 'left' ? "order-2" : "order-1"}`}>
                    <div dangerouslySetInnerHTML={{ __html: block.contentHtml || '' }} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

    </article>
  );
};
