import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSlug: string;
  onNavigate: (slug: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSlug, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const navItems = [
    { slug: 'home', label: 'Проекты' }
  ];

  const handleLinkClick = (slug: string) => {
    onNavigate(slug);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="w-full bg-white border-b border-[#e5e5ea] sticky top-0 z-50 h-[56px] md:h-[64px] flex flex-col justify-center">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
        
        {/* Logo / Home Link */}
        <button 
          onClick={() => handleLinkClick('home')}
          className="text-[18px] md:text-[20px] font-medium text-[#1d1d1f] hover:opacity-80 transition-opacity outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded"
        >
          Николай Титов
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-x-[28px] lg:gap-x-[36px]">
          {navItems.map((item) => {
            const isActive = activeSlug === item.slug || (item.slug === 'home' && activeSlug === '');
            return (
              <button
                key={item.slug}
                onClick={() => handleLinkClick(item.slug)}
                className={`text-[14px] md:text-[15px] font-medium outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded transition-colors ${
                  isActive
                    ? 'text-[#1d1d1f] border-b border-[#1d1d1f]'
                    : 'text-[#424245] hover:text-[#1d1d1f]'
                }`}
                style={{ paddingBottom: isActive ? '2px' : '3px' }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            ref={menuButtonRef}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 -mr-1 text-[#1d1d1f] hover:opacity-80 transition-opacity outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[56px] left-0 w-full bg-white border-b border-[#e5e5ea] px-4 py-4 shadow-lg shadow-black/5">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activeSlug === item.slug || (item.slug === 'home' && activeSlug === '');
              return (
                <button
                  key={item.slug}
                  onClick={() => handleLinkClick(item.slug)}
                  className={`text-left text-[15px] font-medium p-3 outline-none focus-visible:ring-2 focus-visible:ring-black rounded transition-colors ${
                    isActive
                      ? 'text-[#1d1d1f] bg-gray-50'
                      : 'text-[#424245] hover:text-[#1d1d1f] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
