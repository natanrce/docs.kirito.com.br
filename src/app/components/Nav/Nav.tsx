'use client';

import Link from 'next/link';

import { FC } from 'react';
import { Logo } from '../Logo';
import { useSearch } from '@/app/providers';

const navigation = [
  {
    name: 'Home',
    href: '/',
    external: false
  },
  {
    name: 'Github',
    href: 'https://github.com/kiritorce/',
    external: true
  },
  {
    name: 'Community',
    href: 'https://discord.gg/vfMrNRtPze',
    external: true
  }
];

export const Navbar: FC = () => {
  const { onOpen } = useSearch();

  return (
    <header className="h-[64px] sticky top-0 z-50 flex items-center md:px-4 pr-4 w-full antialiased backdrop-blur-sm backdrop-saturate-200 bg-black/50 border-b border-[#333]">
      <nav className="mb-[-1px] h-full flex justify-between items-center w-full max-w-screen-xl px-4 mx-auto">
        <a href="/">
          <Logo />
        </a>
        <div className="flex gap-6">
          {navigation.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-sm relative transition-colors duration-200 text-[#888] hover:text-[#fafafa]"
            >
              {item.name}
              {item.external && (
                <svg
                  aria-hidden="true"
                  className="absolute top-[0.5px] right-[-10px] text-[#444]"
                  height="7"
                  viewBox="0 0 6 6"
                  width="7"
                >
                  <path
                    d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </Link>
          ))}
        </div>
        <button
          onClick={onOpen}
          className="hidden md:flex justify-between items-center py-1.5 px-2 text-sm whitespace-nowrap bg-[#1f1f1f] rounded-md text-neutral-400"
        >
          Search documentation...
          <kbd className="h-[22px] leading-[22px] rounded text-xs text-[#a1a1a1] bg-[#0a0a0a] border border-white/10 ml-4 p-[0_6px]">
            ⌘ K
          </kbd>
        </button>
        {/* Mobile button */}
        <button onClick={onOpen} className="md:hidden">
          <svg
            fill="none"
            height="22"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="22"
          >
            <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z" />
            <path d="M16 16l4.5 4.5" />
          </svg>
        </button>
      </nav>
    </header>
  );
};
