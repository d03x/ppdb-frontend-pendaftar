import { useAppContext } from '@/hooks/useAppContext';
import { Avatar } from 'antd';
import { Menu } from 'lucide-react';
import AvatarUrl from "@/assets/unnamed.jpg"
const Navbar = () => {
    const { setOpenSidebar, sidebarIsOpen } = useAppContext();
    return (
        <nav className='bg-white fixed z-50 border-b w-full'>
            <div className="flex items-center h-12 px-1 pr-6 justify-between">
                <div className={`${sidebarIsOpen ? 'ml-[15em]' : 'ml-4 md:ml-[15em]'}`}>
                    <Menu onClick={() => setOpenSidebar(!sidebarIsOpen)} size={25} />
                </div>
                <Avatar src={AvatarUrl} />
            </div>
        </nav>
    );
}

export default Navbar;
