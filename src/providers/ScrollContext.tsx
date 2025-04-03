import { PropsWithChildren, useState } from "react";
import { ScrollContext } from "../contexts/ScrollContext";





export const ScrollContextProvider = ({ children }: PropsWithChildren) => {

    const [scrollSection, setScrollSection] = useState<string>("about");
    const [scrollTop, setScrollTop] = useState<number>(0);

    return (
        <ScrollContext.Provider value={{scrollSection, setScrollSection, scrollTop, setScrollTop}}>
            {children}
        </ScrollContext.Provider>
    );
}