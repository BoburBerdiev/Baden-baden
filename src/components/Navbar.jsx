'use client'

import React, {useCallback, useEffect, useState} from 'react';
import ImageUi from "@/components/image-ui";
import Link from "next/link";
import {LuAlignLeft} from "react-icons/lu";
import {nav, navLink} from "@/constants/routeConfig";
import {useTranslation} from 'react-i18next';
import {usePathname} from "next/navigation";

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const [isScroll, setIsScroll] = useState(false)
    const router = usePathname()
    const handleBurger = (e) => {
        e.stopPropagation()
        setSidebar(!sidebar)
    }

    const onScroll = useCallback(event => {
        const {scrollY} = window;
        if (scrollY > 20) {
            setIsScroll(true)
        } else {
            setIsScroll(false)
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    useEffect(() => {
        const handleCLoseNav = () => {
            setSidebar(false)
        }
        window.addEventListener('click', handleCLoseNav)

        return () => {
            window.removeEventListener('click', handleCLoseNav)
        }
    }, [sidebar])


    const {t} = useTranslation()
    return (
        <nav
            className={`${router === '/' ? isScroll ? "bg-currentBlue bg-[url('/image/bg-noise.jpg')] " : "bg-transparent " : "bg-currentBlue bg-[url('/image/bg-noise.jpg')] "} ${isScroll ? "md:-translate-y-10" : ""} duration-300 top-0 fixed  left-0 z-[100] w-full`}>
            <div className={`z-20 py-[10px] border-b-[0.5px] border-navBorder opacity-70  hidden md:block `}>
                <div className="container">
                    <div
                        className="flex text-white font-jost text-xs lg:text-sm justify-between items-center font-normal">
                        <div className="flex gap-2 lg:gap-[34px] items-center">
                            <a href="tel:+998555121100">+998 55 512 11 00</a>
                            <a href="tel:+998555121100">+998 55 512 11 00</a>
                            <DropdownLang/>
                        </div>
                        <div className="whitespace-nowrap">
                            <p>ул. Гейдара Алиева, 165, Мирабадский район, Ташкент, 100025, Узбекистан</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" relative w-full z-10">
                <div className="container">
                    <div
                        className="flex justify-between items-center  py-4 md:py-7 text-white font-normal text-sm lg:text-lg font-jost   ">
                        <div className={'w-10 block md:hidden'}>

                            <LuAlignLeft className={'text-white text-xl  cursor-pointer'}
                                         onClick={handleBurger}/>
                        </div>
                        <ul onClick={(e)=>e.stopPropagation()} className={`nav flex flex-col duration-700 z-[100] top-[70px] ${sidebar ? 'left-0' : '-left-full'} fixed w-80 bg-[url('/image/bg-noise.jpg')] bg-currentBlue gap-7 pt-5  items-center border border-currentBlue h-screen md:hidden`}>
                            {
                                navLink.map((link, ind) => (
                                    <li key={ind}><Link href={link.link}>{t(`${link.text}`)} </Link></li>

                                ))
                            }
                            <div
                                className="flex flex-col px-3 text-white font-jost gap-5 text-sm items-center font-normal">
                                <div className="flex flex-col gap-2 lg:gap-[34px] items-center">
                                    <a href="tel:+998555121100">+998 55 512 11 00</a>
                                    <a href="tel:+998555121100">+998 55 512 11 00</a>
                                </div>
                                <div className="text-center">
                                    <a href="#">ул. Гейдара Алиева, 165, Мирабадский район, Ташкент, 100025,
                                        Узбекистан</a>
                                </div>
                            </div>
                        </ul>
                        <ul className="md:flex justify-between items-center w-1/3 hidden">
                            {
                                navLink.slice(0, 3).map((link, ind) => (
                                        <li key={ind}><Link href={link.link}>{t(`${link.text}`)} </Link></li>
                                    )
                                )
                            }

                        </ul>
                        <Link href="/"
                              className="  block static md:absolute left-1/2 top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                            <div className={'relative  w-20 h-10 md:w-[100px] md:h-[60px]'}>

                                <ImageUi
                                    alt={'baden baden logo'}
                                    src="/image/baden-baden-logo-white 1.png"
                                         objectFitContain={true}/>
                            </div>
                        </Link>
                        <ul className="md:flex justify-between items-center w-1/3 hidden">
                            {
                                navLink.slice(3, 6).map((link, ind) => (
                                        <li key={ind}><Link href={link.link}>{t(`${link.text}`)} </Link></li>
                                    )
                                )
                            }

                        </ul>
                        <div className="md:hidden">
                            <DropdownLang/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

const DropdownLang = () => {
    const {t} = useTranslation()

    const langList = [
        {
            title: t('lang.ru'),
            value: 'ru',
            id: 1
        },
        {
            title: t('lang.en'),
            value: 'en',
            id: 2
        },
        {
            title: t('lang.uz'),
            value: 'uz',
            id: 3
        }
    ]
    const [dropdown, setDropdown] = useState(false)
    const [language, setLanguage] = useState({
        title: t('lang.ru'),
        value: 'ru',
        id: 1
    },)

    const opendropdown = (e) => {
        e.stopPropagation()
        setDropdown(prevstate => !prevstate)
    }

    const handleLang=(lang)=>{
        console.log(lang)
        setLanguage(lang)
        setDropdown(false)
    }

    useEffect(() => {
        const scrollDrop=()=>{
            if (window.scrollY > 0) {
                setDropdown(false)
            }

        }
        window.addEventListener('scroll', scrollDrop)

        return ()=>{
            window.removeEventListener('scroll', scrollDrop)

        }
    }, []);


    useEffect(() => {
        const handleCLoseNav = () => {
            setDropdown(false)
        }
        window.addEventListener('click', handleCLoseNav)

        return () => {
            window.removeEventListener('click', handleCLoseNav)
        }
    }, [dropdown])

    return (
        <>
            <div className="relative">
                <p className=" cursor-pointer text-white font-jost" onClick={opendropdown}>{language.title}</p>
                <div
                    className={`grid w-24 ${dropdown ? "grid-rows-[1fr]" : 'grid-rows-[0fr]'} absolute top-[30px]  z-[150] left-0 duration-200 transition-all ease   `}>
                    <div
                        onClick={e=>e.stopPropagation()}
                        className={`overflow-hidden bg-currentBlue flex flex-col   ${dropdown ? "border-b border-x border-white " : ''} rounded-b`}>
                        {
                            langList.map((item) => (
                                <div
                                    onClick={()=>handleLang(item)}
                                    key={item.id}
                                     className="hover:bg-black/10 px-3 py-1 cursor-pointer  flex items-center gap-2 cursor-pointer">
                                    <span>{item.title}</span>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}