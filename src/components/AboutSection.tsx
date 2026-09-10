import React from 'react';
import { Mail, Linkedin, Globe } from 'lucide-react';
import userAvatar from '../assets/images/main_photo.png';
import studioLogos from '../assets/images/logos.png';

interface AboutSectionProps {
  onNavigate: (slug: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section className="pt-8 pb-14 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h1 className="text-2xl sm:text-3xl text-gray-700 mb-7 font-light uppercase tracking-[0.18em]" style={{ fontFamily: 'futura-pt, sans-serif' }}>
          О СЕБЕ
        </h1>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Portrait & Social Icons */}
          <div className="w-full md:w-[290px] lg:w-[330px] shrink-0 space-y-3">
            <div className="overflow-hidden bg-gray-100">
              <img
                src={userAvatar}
                alt="Developer Portrait"
                className="w-full h-auto object-cover block"
                loading="lazy"
              />
            </div>

            {/* Social Icons - Left Aligned */}
            <div className="flex items-center gap-3.5 pt-1 text-gray-800 justify-start">
              <a
                href="mailto:niksmailforjob@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-black transition-colors"
                title="Email: niksmailforjob@gmail.com"
              >
                <Mail className="w-[18px] h-[18px] stroke-[2]" />
              </a>
              <a
                href="https://www.linkedin.com/in/dean-tate-959307373/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-black transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-[18px] h-[18px] fill-current border-none" />
              </a>
              <a
                href="https://bsky.app/profile/iamdeantate.bsky.social"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-black transition-colors"
                title="Bluesky"
              >
                <Globe className="w-[18px] h-[18px] stroke-[2]" />
              </a>
            </div>
          </div>

          {/* Right Column - Bio Text & Studio Logos */}
          <div className="flex-1 space-y-3.5 text-gray-700 text-[14.5px] sm:text-[15.5px] leading-[1.65]">
            <p className="font-bold text-gray-900 text-[15px] sm:text-[16.5px] leading-snug">
              Я программист геймплея и игровых систем, технический дизайнер и соавтор игровых проектов с опытом более 4+ лет.
            </p>

            <p>
              Моя страсть — создавать игры, которые захватывают воображение, и миры, оживающие в ответ на каждое действие игрока.
            </p>

            <p>
              Я бросил игроков в самое пекло на выжженных постапокалиптических аренах{' '}
              <a
                href="https://www.meta.com/fi-fi/experiences/stack/5366874313435765/?srsltid=AfmBOooBKlYlvlOvm3etHKbn38tTTDKgRhAPeE6h56ANktt9wzsq55Uy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#00a89d] underline underline-offset-2 decoration-[#00a89d] hover:text-[#00877d] transition-colors"
              >
                Stack
              </a>
              , выпустил на них орды демонов в{' '}
              <a
                href="https://www.meta.com/fi-fi/experiences/dead-hook/8896303273744663/?srsltid=AfmBOooPkoZrYaSHPsF0Aj7vf__z0DHREE99WNhTECkqh2V8TuBg8dYg"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#00a89d] underline underline-offset-2 decoration-[#00a89d] hover:text-[#00877d] transition-colors"
              >
                Dead Hook
              </a>{' '}
              и вывел тысячи соперников на старт мировой гонки в{' '}
              <a
                href="https://t.me/tonforspeed_bot/game?startapp=promo_GXvJmcK5"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#00a89d] underline underline-offset-2 decoration-[#00a89d] hover:text-[#00877d] transition-colors"
              >
                TonForSpeed
              </a>
              .
            </p>

            <p>
              Мой опыт охватывает самые разные жанры и платформы — от мобильных и браузерных проектов до игр и симуляций для PC, AR и VR. Я проектировал взаимодействие для самых разных интерфейсов — от сенсорных экранов до VR-контроллеров и систем отслеживания движений.
            </p>

            <p>
              Мне повезло поработать над такими разными проектами. Я всегда с энтузиазмом осваиваю новые навыки и берусь за новые творческие задачи.
            </p>

            {/* Company / Studio Logos */}
            <div className="pt-3">
              <img
                src={studioLogos}
                alt="Studio Logos"
                className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[500px] h-auto object-contain opacity-95 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

