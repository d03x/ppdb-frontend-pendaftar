import Logo from "@/assets/logo.png";
import { DropdownMenu, SidebarItem } from "@/components/Sidebar";
import { useAppContext } from "@/hooks/useAppContext";
import { Book, Home } from "lucide-react";

const PendaftaranMenuItem = [
    {
        label: "Isi Pendaftaran",
        link: '/pendaftaran'
    },
    {
        label: "Upload Berkas",
        link: '/berkas/upload'
    }
]

const Sidebar = () => {
    const {sidebarIsOpen} = useAppContext()
    return (
        <aside className={`${sidebarIsOpen ? 'block' : 'hidden md:block'} fixed w-full z-50 max-w-[240px]` }>
            <div className='h-12 flex items-center justify-center bg-white'>
                <img width={90} src={Logo} alt="Logo" />
            </div>
            <div className="border-r py-2 border-t border-r-gray-100 bg-white h-screen">
                <ul>
                    <SidebarItem link="/dashboard" icon={<Home size={20} />}>Dashboard</SidebarItem>
                    <DropdownMenu label='Pendaftaran' icon={<Book size={20} />} items={PendaftaranMenuItem} />

                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
