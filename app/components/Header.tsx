'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // bovenaan pagina -> altijd zichtbaar
      if (currentY < 50) {
        setShowHeader(true);
        lastScrollY.current = currentY;
        return;
      }

      // scroll naar beneden
      if (currentY > lastScrollY.current + 10) {
        setShowHeader(false);
      }

      // scroll naar boven (pas na duidelijke beweging)
      if (currentY < lastScrollY.current - 120) {
        setShowHeader(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      } bg-transparent`}
    >
      <div className="container mx-auto px-4 py-2 md:py-3">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center text-white"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
              <Image
                src="/images/Logo.png"
                alt="Reflexologie Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
            aria-label="Menu"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </div>
          </button>
          
          <nav 
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:block absolute md:relative top-full left-0 right-0 md:top-0 bg-white md:bg-transparent shadow-lg md:shadow-none md:flex md:gap-8 z-50`}
          >
            <Link 
              href="/wie-ben-ik" 
              className="block px-6 py-4 md:py-0 text-sm md:text-base font-light tracking-wider transition-colors hover:text-[#B8A89A] md:text-white text-[#3F342C]"
              onClick={() => setIsMenuOpen(false)}
            >
              WIE BEN IK
            </Link>
            <Link 
              href="/aanbod" 
              className="block px-6 py-4 md:py-0 text-sm md:text-base font-light tracking-wider transition-colors hover:text-[#B8A89A] md:text-white text-[#3F342C]"
              onClick={() => setIsMenuOpen(false)}
            >
              AANBOD
            </Link>
            <Link 
              href="/info" 
              className="block px-6 py-4 md:py-0 text-sm md:text-base font-light tracking-wider transition-colors hover:text-[#B8A89A] md:text-white text-[#3F342C]"
              onClick={() => setIsMenuOpen(false)}
            >
              INFO
            </Link>
            <Link 
              href="/contact" 
              className="block px-6 py-4 md:py-0 text-sm md:text-base font-light tracking-wider transition-colors hover:text-[#B8A89A] md:text-white text-[#3F342C]"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
