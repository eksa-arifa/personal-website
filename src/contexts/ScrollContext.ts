import { createContext } from "react";



interface ScrollContextType {
    scrollTop: number,
    setScrollTop: React.Dispatch<React.SetStateAction<number>>,
    scrollSection: string,
    setScrollSection: React.Dispatch<React.SetStateAction<string>>,
}

export const ScrollContext = createContext<ScrollContextType | null>(null);