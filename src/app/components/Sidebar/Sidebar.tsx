'use client';

import { FC } from 'react';

import { Navigation } from '../Navigation';
import { WikiSelector } from '../Wiki';

export const Sidebar: FC = () => {
  return (
    <aside className="w-[284px] shrink-0 hidden md:block">
      <div className="sticky top-[121px]">
        <WikiSelector />
        <Navigation />
      </div>
    </aside>
  );
};
