import cx from 'classnames';
import Link from 'next/link';

import { FC } from 'react';
import { Disclosure } from '@headlessui/react';
import { usePathname } from 'next/navigation';

import { useWiki } from '@/app/providers';
import { navigation } from '@/lib/navigation';

type NavigationItem = {
  href: string;
};

export const Navigation: FC = () => {
  const pathname = usePathname();
  const { selectedWiki } = useWiki();

  const shouldOpen = (items: Array<NavigationItem>) =>
    items.map((item) => item.href).includes(pathname);

  return (
    <div className="h-[calc(100vh-130px)] overflow-y-auto">
      {navigation[selectedWiki].map((category, index) => (
        <Disclosure
          as="div"
          key={index}
          defaultOpen={
            (index === 0 && pathname === '/') || shouldOpen(category.items)
          }
        >
          {({ open }) => (
            <ul>
              <li className="relative mt-6">
                <Disclosure.Button className="flex justify-between w-full text-left mb-[4px] px-2 text-sm font-medium text-white">
                  {category.name}
                  <svg
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="16"
                    className={cx(
                      'text-current transition-transform',
                      open && 'rotate-90'
                    )}
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="mb-8" as="ul">
                  {category.items.map((item, index) => (
                    <li className="my-1.5" key={index}>
                      <Link
                        href={item.href}
                        className={cx(
                          'flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm',
                          pathname === item.href
                            ? 'font-medium text-blue-600 dark:text-blue-500'
                            : 'text-[#888] hover:text-[#fafafa]'
                        )}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </Disclosure.Panel>
              </li>
            </ul>
          )}
        </Disclosure>
      ))}
    </div>
  );
};
