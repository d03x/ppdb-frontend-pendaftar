import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import DashboardLayout from "@layouts/DashboardLayout";

export type ProtectedRouteType = {
    children?: ReactNode,
    user?: boolean | object,
}

const ProtectedRoute = ({ user, children }: ProtectedRouteType) => {
    if (!user) {
        return <Navigate to={'/login'} replace />
    }
    return (
        <DashboardLayout user={user}>
            {children ? children : <Outlet />}
        </DashboardLayout>
    );
}

export default ProtectedRoute;
