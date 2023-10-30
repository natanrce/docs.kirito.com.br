'use client';

import { FC, ReactNode } from 'react';

import { Heading } from '@/lib/docs-adapter';
import { Prose, TableOfContents } from '@/app/components';

type Props = {
  children: ReactNode;
  headings: Heading[];
};

export const Article: FC<Props> = ({ children, headings }) => {
  return (
    <>
      <Prose>{children}</Prose>
      <TableOfContents headings={headings} />
    </>
  );
};
