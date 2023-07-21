'use client';

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
  const [selectedWiki, setSelectedWiki] = useState(initialWiki);

  const setWiki = (wiki: string) => {
    localStorage.setItem('wiki', wiki);
    setSelectedWiki(wiki);
  };

  useEffect(() => {
    const stored = localStorage.getItem('wiki');

    if (stored) {
      setSelectedWiki(stored);
      return;
    }

    localStorage.setItem('wiki', initialWiki);
  }, []);

  return (
    <WikiContext.Provider value={{ selectedWiki, setWiki }}>
      {children}
    </WikiContext.Provider>
  );
}

export const useWiki = () => useContext(WikiContext);
