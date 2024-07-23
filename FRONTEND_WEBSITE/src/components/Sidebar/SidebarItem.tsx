/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Badge } from 'antd';

interface SidebarItemProps {
    icon: any;
    children: string;
    link: string;
    badgeCount?: number;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, children, link, badgeCount }) => {
    const location = useLocation();
    return (
        <li>
            <Link className={`flex justify-between  px-3 py-3 gap-2 ${location.pathname === link ? 'focus:bg-biru bg-biru text-putih' : 'focus:bg-biru'} focus:text-putih transition-all items-center w-full`} to={link}>
                <div className="flex items-center gap-2">
                    {Icon}
                    <span className="text-sm">{children}</span>
                </div>
                {badgeCount && <span><Badge count={badgeCount} /></span>}
            </Link>
        </li>
    );
}

export default SidebarItem;
