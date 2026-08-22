"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

type HomePageContextValue = {
  isIntroComplete: boolean;
  completeIntro: () => void;
};

const defaultContextValue: HomePageContextValue = {
  isIntroComplete: true,
  completeIntro: () => {},
};

const HomePageContext = createContext<HomePageContextValue>(defaultContextValue);

export function HomePageProvider({ children }: { children: ReactNode }) {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const completeIntro = useCallback(() => setIsIntroComplete(true), []);

  return (
    <HomePageContext.Provider value={{ isIntroComplete, completeIntro }}>
      {children}
    </HomePageContext.Provider>
  );
}

export function useHomePageContext() {
  return useContext(HomePageContext);
}
