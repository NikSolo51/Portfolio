import React from 'react';
import { Mail, Linkedin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-12 mt-16 text-center text-xs font-sans text-gray-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        {/* Copyright */}
        <p className="font-mono text-gray-600">
          © {new Date().getFullYear()} Nikolay Titov
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-5 text-gray-600">
          <a
            href="mailto:niksmailforjob@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition-colors p-1"
            title="Email: niksmailforjob@gmail.com"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/dean-tate-959307373/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-700 transition-colors p-1"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://bsky.app/profile/iamdeantate.bsky.social"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-500 transition-colors p-1"
            title="Bluesky"
          >
            <Globe className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
};
