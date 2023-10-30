'use client';

import { Heading } from '@/lib/docs-adapter';
import { useState, useEffect, useCallback } from 'react';

interface HeadingWithTop {
  id: string;
  top: number;
}

export function useTableOfContent(toc: Heading[]) {
  const [currentHeading, setCurrentHeading] = useState(toc[0].id);

  const getHeadings = useCallback<() => HeadingWithTop[]>(() => {
    function* transverseToc(toc: Heading | Heading[]) {
      if (Array.isArray(toc)) {
        for (const item of toc) {
          yield* transverseToc(item);
        }
      } else {
        const element = document.getElementById(toc.id);

        if (element) {
          const style = window.getComputedStyle(element);
          const scrollMt = parseFloat(style.scrollMarginTop);

          const top =
            window.scrollY + element.getBoundingClientRect().top - scrollMt;

          yield {
            id: toc.id,
            top
          };
        }
      }
    }

    return Array.from(transverseToc(toc));
  }, [toc]);

  useEffect(() => {
    const headings = getHeadings();

    const handleScroll = () => {
      const sortedHeadings = headings.sort((a, b) => a.top - b.top);

      const top = window.scrollY;
      let current = sortedHeadings[0].id;

      for (let i = 0; i < sortedHeadings.length; i++) {
        if (top >= sortedHeadings[i].top - 110) {
          current = sortedHeadings[i].id;
        }
      }

      setCurrentHeading(current);
    };

    window.addEventListener('scroll', handleScroll, {
      capture: true,
      passive: true
    });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll, {
        capture: true
      });
    };
  }, [toc, getHeadings]);

  return currentHeading;
}
