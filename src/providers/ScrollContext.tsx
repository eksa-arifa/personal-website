import { PropsWithChildren, useState } from "react";
import { ScrollContext } from "../contexts/ScrollContext";





export const ScrollContextProvider = ({ children }: PropsWithChildren) => {

    const [scrollSection, setScrollSection] = useState<string>("about");

    return (
        <ScrollContext.Provider value={{scrollSection, setScrollSection}}>
            {children}
        </ScrollContext.Provider>
    );
}