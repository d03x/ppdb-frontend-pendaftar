import {  message } from "antd";
import React, { createContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

export type AppContextProviderType = {
    pageLoading: boolean,
    sidebarIsOpen: boolean,
    setOpenSidebar : (isOpen : boolean)=>void,
    setPageLoading: (loading: boolean) => void
}

const AppContextInitialValue: AppContextProviderType = {
    pageLoading: false,
    setOpenSidebar: ()=>{ },
    sidebarIsOpen : false,
    setPageLoading: () => { }
}

export const AppContext = createContext<AppContextProviderType>(AppContextInitialValue);

export type AppContextProviderTypeProps = {
    children: React.ReactNode,
}

export const AppContextProvider = ({ children }: AppContextProviderTypeProps) => {
    const [pageLoading, setPageLoading] = useState<boolean>(false);
    const location = useLocation();
    const [sidebarIsOpen, setOpenSidebar] = useState<boolean>(false);
    useEffect(() => {
        setOpenSidebar(false);
    },[location.pathname])
    useEffect(() => {
        if (pageLoading) {
            message.loading({
                key: "loading",
                content: "Tunggu sebentar...",
                type: "loading",
                duration: 0,

            });
        }
        return () => message.destroy('loading');
    }, [pageLoading])
    return <AppContext.Provider value={{ sidebarIsOpen,setOpenSidebar, pageLoading, setPageLoading }}>
        {children}
    </AppContext.Provider>
}