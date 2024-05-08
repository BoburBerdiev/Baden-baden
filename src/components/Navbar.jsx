import React, {useState} from 'react';
import ImageUi from "@/components/image-ui";
import Link from "next/link";
import {LuAlignLeft} from "react-icons/lu";
import {nav, navLink} from "@/constants/routeConfig";

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const handleBurger = () => {
        setSidebar(!sidebar)
    }
    return (
        <nav className={"bg-currentBlue bg-[url('/image/bg-noise.jpg')] "}>
            <div className=" py-[10px] border-b-[0.5px] border-navBorder hidden md:block">
                <div className="container">
                    <div
                        className="flex text-white font-jost text-xs lg:text-sm justify-between items-center font-normal">
                        <div className="flex gap-2 lg:gap-[34px] items-center">
                            <a href="tel:+998555121100">+998 55 512 11 00</a>
                            <a href="tel:+998555121100">+998 55 512 11 00</a>
                            <p className="flex items-center gap-2"> Русский <i className="w-4 h-4"
                                                                               data-lucide="chevron-down"></i></p>
                        </div>
                        <div className="whitespace-nowrap">
                            <p>ул. Гейдара Алиева, 165, Мирабадский район, Ташкент, 100025, Узбекистан</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" relative w-full">
                <div className="container">
                    <div
                        className="flex justify-between items-center  py-4 md:py-7 text-white font-normal text-sm lg:text-lg font-jost   ">
                        <LuAlignLeft className={'text-white text-xl block md:hidden cursor-pointer'}
                                     onClick={handleBurger}/>
                        <ul className={`nav flex flex-col duration-700 z-[100] top-[70px] ${sidebar ? 'left-0' : '-left-full'} fixed w-80 bg-[url('/image/bg-noise.jpg')] bg-currentBlue gap-7 pt-5  items-center border border-currentBlue h-screen md:hidden`}>
                            {
                                navLink.map((link,ind) => (
                                    <li key={ind}><Link href={link.link}>{link.text} </Link></li>

                                ))
                            }
                        </ul>
                        <ul className="md:flex justify-between items-center w-1/3 hidden">
                            {
                                navLink.slice(0, 3).map((link, ind) => (
                                        <li key={ind}><Link href={link.link}>{link.text} </Link></li>
                                    )
                                )
                            }

                        </ul>
                        <Link href="/"
                              className="  block static md:absolute left-1/2 top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                            <div className={'relative  w-20 h-10 md:w-[100px] md:h-[60px]'}>

                                <ImageUi src="/image/baden-baden-logo-white 1.png"
                                         objectFitContain={true}/>
                            </div>
                        </Link>
                        <ul className="md:flex justify-between items-center w-1/3 hidden">
                            {
                                navLink.slice(3, 6).map((link, ind) => (
                                        <li key={ind}><Link href={link.link}>{link.text} </Link></li>
                                    )
                                )
                            }

                        </ul>
                        <p className="flex items-center gap-2 md:hidden"> Ru <i className="w-4 h-4"
                                                                                data-lucide="chevron-down"></i></p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;