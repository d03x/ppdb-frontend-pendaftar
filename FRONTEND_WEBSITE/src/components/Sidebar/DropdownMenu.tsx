
import {  ArrowRightSquare, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";
import { Link, To, useLocation } from "react-router-dom";
interface DropdownItemsType {
    label: string,
    link: To,
}
/* eslint-disable @typescript-eslint/no-explicit-any */
export type DropdownMenuProps = {
    icon?: any,
    label: string,
    items: DropdownItemsType[],
}

const DropdownMenu = ({
    icon,
    label,
    items,
}: DropdownMenuProps) => {
    const location = useLocation();
    console.log(location);

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    return (
        <li>
            <button onClick={() => toggleDropdown()} className="flex justify-between px-3 py-2.5 gap-2   transition-all items-center w-full">
                <div className="flex items-center gap-2">
                    {icon}
                    <span className="text-sm">{label}</span>
                </div>
                <div>
                    {isOpen ? <ChevronUpIcon width={20} /> : <ChevronDownIcon width={20} />}
                </div>
            </button>
            {isOpen && (
                <ul>
                    {items.map((item: DropdownItemsType, index: number) => {
                        return <li key={index}>
                            <Link className={`flex px-6 py-2.5  gap-2 ${location.pathname === item.link ? 'focus:bg-biru bg-biru text-putih' : 'focus:bg-biru'} focus:text-putih transition-all items-center w-full`} to={item.link}>
                                <ArrowRightSquare width={16}/>
                                <span className="text-sm">{item.label}</span>
                            </Link>
                        </li>
                    })}
                </ul>
            )}
        </li>
    );
}

export default DropdownMenu;
