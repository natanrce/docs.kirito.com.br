'use client';

import clsx from 'clsx';
import { FC, useState } from 'react';
import { useTableOfContent } from '../../hooks/useTableOfContent';

import { Heading } from '@/lib/docs-adapter';

type Props = {
  headings: Heading[];
};

export const TableOfContents: FC<Props> = ({ headings }) => {
  const currentHeading = useTableOfContent(headings);
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  const isActive = (section: Heading) => {
    return section.id === currentHeading;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const scrollPos = document.documentElement.scrollTop;

      if (scrollPos > 150) {
        setIsScrollVisible(true);
        return;
      }

      setIsScrollVisible(false);
    });
  }

  return (
    <nav className="w-56 shrink-0 hidden lg:block">
      <div
        className="hidden lg:block sticky top-[126px] overflow-y-auto"
        data-docs-crowler
      >
        <h2 className="mb-1 mt-[7px] text-sm font-medium text-white">
          On this page
        </h2>
        {headings.length > 0 && (
          <ul className="mt-4 space-y-3 text-sm">
            {headings.map((section: any) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={clsx(
                    'block',
                    isActive(section)
                      ? 'leading-[1.6] font-medium text-blue-500'
                      : 'text-[#888] hover:text-[#999] leading-[1.6]'
                  )}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 space-y-2 border-t border-[#444] pt-5 text-sm" />
        <button
          className={clsx(
            'flex items-center gap-x-2 text-sm text-[#888] transition-opacity hover:text-white',
            isScrollVisible ? 'opacity-100' : 'opacity-0'
          )}
          onClick={scrollToTop}
        >
          <svg
            fill="none"
            height="14"
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="14"
            className="text-current"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 12l-4-4-4 4" />
            <path d="M12 16V8" />
          </svg>
          Scroll to top
        </button>
      </div>
    </nav>
  );
};
