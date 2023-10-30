'use client';

import { usePathname } from 'next/navigation';

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

type WikiContext = {
  selectedWiki: string;
  setWiki: (wiki: string) => void;
};

const WikiContext = createContext({} as WikiContext);

export function WikiProvider({ children }: PropsWithChildren) {
  const initialWiki = 'mobile';
  const pathname = usePathname();

  const [selectedWiki, setSelectedWiki] = useState(initialWiki);

  const setWiki = (wiki: string) => {
    setSelectedWiki(wiki);
  };

  useEffect(() => {
    setSelectedWiki(pathname.split('/')[1] || initialWiki);
  }, [pathname]);

  return (
    <WikiContext.Provider value={{ selectedWiki, setWiki }}>
      {children}
    </WikiContext.Provider>
  );
}

export const useWiki = () => useContext(WikiContext);
