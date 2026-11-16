import { createContext } from "react";



interface ScrollContextType {
    scrollSection: string,
    setScrollSection: React.Dispatch<React.SetStateAction<string>>,
}

export const ScrollContext = createContext<ScrollContextType | null>(null);