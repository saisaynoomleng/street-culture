'use client';

import React, {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

type AuthorContextValue = {
  selectedAuthor: string | null;
  setSelectedAuthor: Dispatch<SetStateAction<string | null>>;
};

const AuthorContext = createContext<AuthorContextValue | null>(null);

export const AuthorProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);

  return (
    <AuthorContext.Provider value={{ selectedAuthor, setSelectedAuthor }}>
      {children}
    </AuthorContext.Provider>
  );
};

export const useAuthorContext = (): AuthorContextValue => {
  const context = useContext(AuthorContext);

  if (!context) {
    throw new Error('useAuthorContext must be inside AuthorProvider');
  }

  return context;
};
