'use client';

import React, {
  createContext,
  type Dispatch,
  type SetStateAction,
  useContext,
  useState,
} from 'react';

type AdminStoryProviderValues = {
  selectedStory: string | null;
  setSelectedStory: Dispatch<SetStateAction<string | null>>;
};

const StoryContext = createContext<AdminStoryProviderValues | null>(null);

export const AdminStoryProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [selectedStory, setSelectedStory] = useState<string | null>(null);

  return (
    <StoryContext.Provider value={{ selectedStory, setSelectedStory }}>
      {children}
    </StoryContext.Provider>
  );
};

export const useStoryContext = () => {
  const context = useContext(StoryContext);

  if (!context) {
    throw new Error('useStoryContext must be in AdminStoryProvider');
  }

  return context;
};
