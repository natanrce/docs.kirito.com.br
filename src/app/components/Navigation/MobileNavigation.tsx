'use client';
import cx from 'classnames';
import Link from 'next/link';

import { FC } from 'react';
import { usePathname } from 'next/navigation';

import { useWiki } from '@/app/providers';
import { navigation } from '@/lib/navigation';

export const MobileNavigation: FC = () => {
  const pathname = usePathname();
  const { selectedWiki } = useWiki();

  return (
    <div className="h-[calc(100vh-200px)] overflow-y-auto">
      {navigation[selectedWiki].map((category, index) => (
        <ul key={index} className="pb-3 pt-2">
          <li className="my-1.5 ml-[3px] px-2">
            <h3 className="mb-[4px] text-sm font-medium text-[#eaeaea]">
              {category.name}
            </h3>
            <div className="h-auto flex flex-col">
              <ul>
                {category.items.map((item, index) => (
                  <li key={index} className="my-1.5 text-sm">
                    <Link
                      className={cx(
                        'flex w-full text-left',
                        pathname === item.href
                          ? 'font-medium text-blue-600 dark:text-blue-500'
                          : 'text-[#888] hover:text-[#fafafa]'
                      )}
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};
