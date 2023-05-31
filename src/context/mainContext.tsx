import React, { createContext, useContext, useState } from "react";

//defining the type
interface ContextType {
    isOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void 
}


// Create the initial context value
const InitialContextValue: ContextType = {
    isOpen: false,
    openMenu: () => {},
    closeMenu: () => {}
}

//create the context
const MainContext = createContext(InitialContextValue)


//create the custom hook
const useMainContext = (): ContextType => useContext(MainContext);

//creating the typpe node
type MyContextProviderProps = {
    children: React.ReactNode
}
//creating the provider

const MainContextProvider: React.FC<MyContextProviderProps> = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    const contextValue: ContextType  = {
        isOpen,
        openMenu,
        closeMenu
    };

    return <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
}

export {MainContext, MainContextProvider, useMainContext}