"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  heroSearchText: string;
  setHeroSearchText: (text: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [heroSearchText, setHeroSearchText] = useState('');

  return (
    <AppContext.Provider value={{ heroSearchText, setHeroSearchText }}>
      {children}
    </AppContext.Provider>
  );
}; 