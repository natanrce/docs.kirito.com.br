'use client';

import { FC, ReactNode } from 'react';
import { WikiSelector } from '../Wiki';

type Props = {
  children: ReactNode;
};

export const Sidebar: FC<Props> = ({ children }) => {
  return (
    <aside className="w-[284px] shrink-0 hidden md:block">
      <div className="sticky top-[121px]">
        <WikiSelector />
        {children}
      </div>
    </aside>
  );
};
