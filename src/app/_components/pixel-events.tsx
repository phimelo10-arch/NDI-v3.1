"use client";

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export function PixelEvents() {
  const viewContentTriggered = useRef(false);
  const contactTriggered = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window.fbq !== 'function') {
        return;
      }
      
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / documentHeight) * 100;

      // ViewContent event at 40% scroll
      if (scrollPercentage >= 40 && !viewContentTriggered.current) {
        window.fbq('track', 'ViewContent');
        viewContentTriggered.current = true;
      }

      // Contact event at 100% scroll
      if (scrollPercentage >= 100 && !contactTriggered.current) {
        window.fbq('track', 'Contact');
        contactTriggered.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check in case the page loads already past the threshold
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This component does not render anything
}
