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
      // ViewContent event
      const lote3Element = document.getElementById('lote-3');
      if (lote3Element && !viewContentTriggered.current) {
        const elementRect = lote3Element.getBoundingClientRect();
        if (elementRect.top < window.innerHeight && elementRect.bottom >= 0) {
          window.fbq('track', 'ViewContent');
          viewContentTriggered.current = true;
        }
      }

      // Contact event (100% scroll)
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= documentHeight && !contactTriggered.current) {
        window.fbq('track', 'Contact');
        contactTriggered.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check in case elements are already in view
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This component does not render anything
}
