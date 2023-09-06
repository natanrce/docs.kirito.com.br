'use client';

import React, { FC } from 'react';

import {
  MobileSidebar,
  Prose,
  SearchDialog,
  Sidebar
  // TableOfContents
} from '@/app/components';

type Props = {
  children: React.ReactNode;
};

export const Article: FC<Props> = ({ children }) => {
  return (
    <main>
      <MobileSidebar />
      <div className="py-10 relative md:flex md:py-10 gap-x-6 mx-auto md:flex-row max-w-screen-xl px-4 md:px-0">
        <SearchDialog />
        <Sidebar />
        <Prose>{children}</Prose>
        {/* <TableOfContents headings={headings} /> */}
      </div>
    </main>
  );
};
