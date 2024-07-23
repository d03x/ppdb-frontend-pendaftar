/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, Suspense } from "react";
import Sidebar from "@layouts/Sidebar";
import Navbar from "@layouts/Navbar";
import { useAppContext } from "@/hooks/useAppContext";
import AppMain from "@/components/AppMain";

export type DashboardLayoutProps = {
    children: ReactNode,
    user: any,
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const { sidebarIsOpen } = useAppContext()
    return (
        <React.Fragment>
            <div className="flex">
                <Sidebar />
                <div className="w-full">
                    <Navbar />
                    <main className={`${sidebarIsOpen ? 'ml-0' : ' ml-0 md:ml-[15em]'}`}>
                        <AppMain>
                            <Suspense fallback={"Loading..."}>
                                {children}
                            </Suspense>
                        </AppMain>
                    </main>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DashboardLayout;
