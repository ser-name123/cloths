'use client';

import { useEffect } from 'react';

export default function ScrollObserver() {
  useEffect(() => {
    // -------------------------------------------------------------
    // 1. SCROLL-TRIGGERED ENTRANCE REVEAL (BLUR + TRANSLATE + FADE)
    // -------------------------------------------------------------
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.06,
          rootMargin: '0px 0px -30px 0px',
        }
      );

      const observeElements = () => {
        const elements = document.querySelectorAll(
          '.reveal-on-scroll:not(.is-revealed), .reveal-on-scroll-scale:not(.is-revealed)'
        );
        elements.forEach((el) => observer.observe(el));
      };

      observeElements();

      // Observe future DOM additions
      const mutationObserver = new MutationObserver(() => {
        observeElements();
      });

      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    } else if (typeof window !== 'undefined') {
      // Fallback: reveal all immediately if no IntersectionObserver
      document.querySelectorAll('.reveal-on-scroll, .reveal-on-scroll-scale').forEach((el) => {
        el.classList.add('is-revealed');
      });
    }

    // -------------------------------------------------------------
    // 2. ADVANCED INTERACTIVE CURSOR SPOTLIGHT & 3D TILT ENGINE
    // Smooth 60/120fps tracking using requestAnimationFrame
    // -------------------------------------------------------------
    const handlePointerMove = (e: PointerEvent) => {
      // Find closest card (spotlight or tilt)
      const target = (e.target as HTMLElement)?.closest<HTMLElement>('.spotlight-card, .card-tilt, .interactive-card');
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update CSS custom properties for radial spotlight
      target.style.setProperty('--mouse-x', `${x}px`);
      target.style.setProperty('--mouse-y', `${y}px`);

      // If card has .card-tilt, calculate subtle 3D perspective rotation
      if (target.classList.contains('card-tilt')) {
        const xPct = x / rect.width - 0.5;
        const yPct = y / rect.height - 0.5;
        const rotX = (-yPct * 6).toFixed(2);
        const rotY = (xPct * 6).toFixed(2);
        target.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.015, 1.015, 1.015)`;
      }
    };

    const handlePointerLeave = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>('.card-tilt');
      if (target) {
        target.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerout', handlePointerLeave, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerout', handlePointerLeave);
    };
  }, []);

  return null;
}
