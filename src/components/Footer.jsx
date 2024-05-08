import Link from "next/link";
import {navLink} from "@/constants/routeConfig";
import {FaFacebookF, FaTwitter} from "react-icons/fa";
import {RiInstagramLine} from "react-icons/ri";
import {LuPhone} from "react-icons/lu";
import {MdOutlineMailOutline} from "react-icons/md";
import {SlLocationPin} from "react-icons/sl";

const Footer = () => {
    return (
        <footer className="w-full bg-currentBlue">
            <div className="container">
                <div className=" py-6 md:py-10 flex lg:flex-row flex-col gap-10 lg:gap-32 items-center font-jost">
                    <Link href="/" className="w-36 h-20 md:w-44 md:h-28 block">
                        <img src="/image/baden-baden-logo-white 1.png" alt="" className="w-full h-full object-contain"/>
                    </Link>
                    <div
                        className="grid grid-cols-3 sm:grid-cols-6  gap-x-10  sm:gap-x-10 md:gap-x-12 lg:gap-x-24 xl:gap-x-36 text-white font-jost">
                        <ul className="col-span-2 flex flex-col gap-5 order-1  text-sm">
                            <li>
                                <a href="tel:+998555121100" className="flex gap-3.5 items-center">
                                    <LuPhone className={'text-xl'}/>

                                    +998 55
                                    512 11 00</a>
                            </li>
                            <li>
                                <a href="mailto:info@baden-baden.uz" className="flex gap-3.5 items-center">
                                    <MdOutlineMailOutline className={'text-xl'}/>
                                    info@baden-baden.uz</a>
                            </li>
                            <li>
                                <p className="flex gap-3.5 items-center">
                                    <SlLocationPin className={'text-xl'}/>
                                    ул. Гейдара Алиева,
                                    165, Ташкент.</p>
                            </li>
                        </ul>
                        <ul className=" whitespace-nowrap flex flex-col gap-5 min-[360px]:mb-2 md:mb-0 order-2 font-medium ">
                            {
                                navLink.slice(0, 3).map((link, ind) => (
                                        <li key={ind}><Link href={link.link}>{link.text} </Link></li>
                                    )
                                )
                            }
                        </ul>
                        <ul className=" whitespace-nowrap flex flex-col gap-5 order-4 sm:order-3 font-medium font-jost">
                            {
                                navLink.slice(3, 6).map((link, ind) => (
                                        <li key={ind}><Link href={link.link}>{link.text} </Link></li>
                                    )
                                )
                            }

                        </ul>
                        <div className="col-span-2 flex flex-col gap-4 order-3 sm:order-4 mt-5 sm:mt-0 lg:text-start text-right">
                            <p>Наши соц сети:</p>
                            <div className="flex items-center lg:justify-start justify-end gap-4 lg:gap-[30px]">
                                <a target="_blank" href="https://instagram.com"
                                   className="bg-bgSocial hover:opacity-700 p-2 rounded-full">
                                    <RiInstagramLine className={'text-currentBlue text-base'}/>
                                </a>
                                <a target="_blank" href="https://facebook.com"
                                   className="bg-bgSocial p-[7.5px] rounded-full">
                                    <FaFacebookF className={'text-currentBlue text-base'}/>
                                </a>
                                <a target="_blank" href="https://twitter.com"
                                   className="bg-bgSocial p-[7.5px] rounded-full">
                                    <FaTwitter className={'text-currentBlue text-base'}/>

                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-currentBlue w-full border-t-[1px] border-light border-b-0  py-2 md:p-0">
                <div className="container">
                    <div className="flex flex-col-reverse sm:flex-row items-center justify-between text-white">
                        <p className="text-light font-jost text-xs ">©{new Date().getFullYear()}. Все права защищены.</p>
                        <div className="flex items-center gap-[10px] text-white">
                            <p className="font-light font-roboto text-xs">Сайт создан :</p>
                            <a href="https://abduganiev.uz/" target="_blank"
                               className="flex group items-center gap-2 relative w-[80px] md:w-[100px] h-[50px] overflow-hidden">
                                <img src="/image/logo.png" alt="Abduganiev Logo"
                                     className="w-8 max-md:hidden h-8 object-cover duration-200 group-hover:scale-50 group-hover:opacity-0 group-hover:-translate-x-10"/>
                                <img src="/image/abduganiev.png" alt="Abduganiev Logo"
                                     className="shrink-0  duration-300  md:opacity-0 md:translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 md:absolute left-0 object-contain w-full h-full"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;