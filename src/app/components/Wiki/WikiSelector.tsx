'use client';

import { FC } from 'react';
import { Listbox } from '@headlessui/react';

import { useWiki } from '@/app/providers';
import { AVALIABLE_WIKI } from '@/lib/wiki';

import { WikiOption } from './WikiOption';

const wikis = {
  [AVALIABLE_WIKI.MOBILE]: {
    id: 'mobile',
    title: 'Mobile Hacking Wiki',
    description: 'Android mobile hacking resources.',
    icon: (
      <div className="text-[#0176d2] rounded-md p-1.5 border-[#00379a] border bg-gradient-to-b from-black to-[#002c86]">
        <svg
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
          style={{
            color: 'currentcolor',
            width: 20,
            height: 20
          }}
        >
          <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
          <path d="M13 2v7h7" />
        </svg>
      </div>
    )
  },
  [AVALIABLE_WIKI.WEB]: {
    id: 'web',
    title: 'WEB Hacking Wiki',
    description: 'Web hacking resources.',
    icon: (
      <div className="text-[#8e4ec6] rounded-md p-1.5 border-[#4f2768] border bg-gradient-to-b from-black to-[#4f2768]">
        <svg
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
          style={{
            color: 'currentcolor',
            width: 20,
            height: 20
          }}
        >
          <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
          <path d="M13 2v7h7" />
        </svg>
      </div>
    )
  },
  [AVALIABLE_WIKI.API]: {
    id: 'API',
    title: 'API Hacking Wiki',
    description: 'API hacking resources.',
    icon: (
      <div className="text-[#d2000b] rounded-md p-1.5 border-[#780004] border bg-gradient-to-b from-black to-[#590004]">
        <svg
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
          style={{
            color: 'currentcolor',
            width: 20,
            height: 20
          }}
        >
          <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
          <path d="M13 2v7h7" />
        </svg>
      </div>
    )
  },
  [AVALIABLE_WIKI.FORENSE]: {
    id: 'forense',
    title: 'Digital Forensics Wiki',
    description: 'Digital Forensics resources.',
    icon: (
      <div className="text-[#40ac48] rounded-md p-1.5 border-[#2d8843] border bg-gradient-to-b from-black to-[#1e6433]">
        <svg
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
          style={{
            color: 'currentcolor',
            width: 20,
            height: 20
          }}
        >
          <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
          <path d="M13 2v7h7" />
        </svg>
      </div>
    )
  },
  [AVALIABLE_WIKI.CERTIFICATION]: {
    id: 'certification',
    title: 'Certification Wiki',
    description: 'Certification resources.',
    icon: (
      <div className="text-[#40ac48] rounded-md p-1.5 border-[#2d8843] border bg-gradient-to-b from-black to-[#1e6433]">
        <svg
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
          style={{
            color: 'currentcolor',
            width: 20,
            height: 20
          }}
        >
          <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
          <path d="M13 2v7h7" />
        </svg>
      </div>
    )
  },
  [AVALIABLE_WIKI.WINDOWS]: {
    id: 'windows',
    title: 'Windows Wiki',
    description: 'Windows resources.',
    icon: (
      <div className="text-[#00accd] rounded-md p-1.5 border-[#0286a4] border bg-gradient-to-b from-black to-[#01687c]">
        <svg
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
          style={{
            color: 'currentcolor',
            width: 20,
            height: 20
          }}
        >
          <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
          <path d="M13 2v7h7" />
        </svg>
      </div>
    )
  }
};

const ChevronIcon = () => (
  <svg
    fill="none"
    height="16"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    width="16"
    className="text-current transition-transform rotate-90"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export const WikiSelector: FC = () => {
  const { selectedWiki, setWiki } = useWiki();
  const selectedListbox = wikis[selectedWiki];

  return (
    <Listbox value={selectedListbox} onChange={(e) => setWiki(e.id)}>
      <Listbox.Button className="flex justify-between items-center w-full hover:bg-[#1f1f1f] hover:cursor-pointer rounded-md pr-2">
        <WikiOption
          title={selectedListbox.title}
          description={selectedListbox.description}
          icon={selectedListbox.icon}
        />
        <ChevronIcon />
      </Listbox.Button>
      <Listbox.Options className="absolute rounded-md border border-[#1f1f1f] z-50 bg-[#0a0a0a] w-full">
        {Object.values(wikis).map((wiki, index) => (
          <Listbox.Option
            key={index}
            value={wiki}
            className="hover:bg-[#1f1f1f] hover:cursor-pointer rounded-md"
          >
            <WikiOption
              key={index}
              title={wiki.title}
              description={wiki.description}
              icon={wiki.icon}
            />
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
