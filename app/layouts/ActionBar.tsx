import Image from "next/image";

import { CgMenuRight } from "react-icons/cg";
import { GoSearch } from "react-icons/go";
import { HiMenuAlt4 } from "react-icons/hi";
import { HiOutlineShoppingCart, HiOutlineUserCircle } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoGiftOutline } from "react-icons/io5";

const ActionBar = () => {
    return (
        <div className="flex items-center py-2 gap-10">
            <div className="h-full w-auto max-w-[250px] min-w-[120px]">
                <Image alt="logo"
                    src="/logos/logo.svg"
                    className="object-contain"
                    width={250}
                    height={100} />
            </div>
            <div>
                <button type="button"
                    className="flex items-center justify-center bg-[#186FD4] h-full py-2 px-4 text-white rounded-md font-bold gap-2 hover:bg-black transition-duration-200 transition-all border border-3 border-[#186FD4] hover:border-black">
                    <HiMenuAlt4 /> <p>Каталог</p></button>
            </div>
            <div className="w-full">
                <form className="w-full bg-[#186FD4] rounded-md flex">
                    <input type="text"
                        placeholder="Найти среди 50000 товаров. Например: Дрель Bosch"
                        className="py-2 px-3 border-3 border-[#186FD4] focus:outline-none bg-white rounded-md w-full" />
                    <button type="submit" className="px-4 cursor-pointer">
                        <GoSearch className="text-white" />
                    </button>
                </form>
            </div>
            <div className="h-full flex items-center">
                <ul className="flex items-center gap-10">
                    <li className="flex flex-col items-center cursor-pointer hover:text-[#186FD4]"><IoGiftOutline
                        className="w-full text-xl" /><p className="text-nowrap">Все акции</p></li>
                    <li className="flex flex-col items-center cursor-pointer hover:text-[#186FD4]"><HiOutlineUserCircle
                        className="w-full text-xl" /><p className="text-nowrap">Войти</p></li>
                    <li className="flex flex-col items-center cursor-pointer hover:text-[#186FD4]"><CgMenuRight
                        className="rotate-90 w-full text-xl" /><p className="text-nowrap">Сравнение</p></li>
                    <li className="flex flex-col items-center cursor-pointer hover:text-[#186FD4]"><IoMdHeartEmpty
                        className="w-full text-xl" /><p className="text-nowrap">Избранное</p></li>
                    <li className="flex flex-col items-center cursor-pointer hover:text-[#186FD4]">
                        <HiOutlineShoppingCart className="w-full text-xl" /><p className="text-nowrap">Корзина</p></li>
                </ul>
            </div>
        </div>
    )
}

export default ActionBar