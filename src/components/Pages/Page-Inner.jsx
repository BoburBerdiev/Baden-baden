'use client'
import {ButtonUI, RoomsSlider, SectionUI} from "@/components";
import {LuBedDouble, LuMaximize, LuUsers} from "react-icons/lu";
import ImageUi from "@/components/image-ui";
import {Swiper, SwiperSlide} from "swiper/react";

import {FreeMode, Grid, Navigation, Thumbs} from 'swiper/modules';
import {useState} from "react";
import {GrNext, GrPrevious} from "react-icons/gr";
import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const imageArr = [
    {
        image: '/image/about.jpg'
    },
    {
        image: '/image/image 1.jpg'
    },
    {
        image: '/image/img1.jpg'
    },
    {
        image: '/image/img2.jpg'
    },
    {
        image: '/image/image 1.jpg'
    },
    {
        image: '/image/about.jpg'
    }
]

const roomComforts = [
    {
        id: 1,
        icon: <LuMaximize/>,
        text: 'Телевизор'
    },
    {
        id: 2,
        icon: <LuMaximize/>,
        text: 'Бесплатный Wi-Fi'
    },
    {
        id: 3,
        icon: <LuMaximize/>,
        text: 'Кондиционер'
    },
    {
        id: 4,
        icon: <LuMaximize/>,
        text: 'Тапочки'
    },
    {
        id: 5,
        icon: <LuMaximize/>,
        text: 'Телевизор'
    },
    {
        id: 6,
        icon: <LuMaximize/>,
        text: 'Бесплатный Wi-Fi'
    },
    {
        id: 7,
        icon: <LuMaximize/>,
        text: 'Тапочки'
    },
    {
        id: 8,
        icon: <LuMaximize/>,
        text: 'Кондиционер'
    },

]

const Page = () => {

    return (
        <>

            <SectionUI title={'Premiere suite'}
                       isEmbroidery={true}
            >

            </SectionUI>
            <section className=" mb-7 sm:mb-14 md:mb-20 mt-5 md:mt-10">
                <div className="container space-y-5 md:space-y-10">
                    <SwiperInner/>
                    <div className="grid grid-cols-1 md:grid-cols-3  gap-5">
                        <div className="col-span-2 flex flex-col gap-5 md:gap-10">
                            <div className="flex flex-col gap-3 md:gap-5">
                                <h2 className="font-normal text-currentBlue text-2xl md:text-3xl lg:text-[40px] font-forum  ">Описание</h2>
                                <div
                                    className="flex whitespace-nowrap font-forum gap-5 md:gap-[50px] text-currentBlue text-lg  md:text-2xl  items-center">
                                    <div className="flex gap-3 md:gap-6 items-center">
                                        <LuMaximize className="text-xl md:text-3xl"/>
                                        <span>70 м2</span>
                                    </div>
                                    <div className="flex gap-3 md:gap-6 items-center">
                                        <LuUsers className="text-xl md:text-3xl"/>
                                        <span>1-4 чел</span>
                                    </div>
                                    <div className="flex gap-3 md:gap-6 items-center">
                                        <LuBedDouble className="text-xl md:text-3xl"/>
                                        <span>2 спальни</span>
                                    </div>
                                </div>
                                <p className="text-currentBlack font-jost  md:text-lg text-start">Номер Premier
                                    Suite создан для
                                    того, чтобы удовлетворить самые взыскательные потребности гостей и обеспечить им
                                    незабываемое пребывание. Площадь номера Premier Suite значительно превышает
                                    стандартные
                                    номера и состоит из нескольких помещений, включая спальню, гостиную, обеденную зону
                                    и ванную
                                    комнату. Дизайн номера выполнен в изысканном стиле с использованием дорогих
                                    материалов и
                                    элегантной мебели.
                                    Проживание в номере Premier Suite обещает быть неповторимым опытом роскоши и
                                    комфорта,
                                    который позволит гостям насладиться пребыванием в отеле на полную катушку.</p>
                            </div>
                            <div className="flex flex-col gap-3 md:gap-6 font-forum">
                                <h2 className="font-normal text-currentBlue text-2xl md:text-3xl lg:text-[40px]">Удобства
                                    номера</h2>
                                <div
                                    className="grid grid-rows-4 grid-flow-col gap-3 md:gap-6">
                                    {
                                        roomComforts.map(room => (
                                            <li key={room.id} className="flex items-center gap-3.5">
                                                {room.icon}
                                                {room.text}
                                            </li>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 md:gap-5">
                                <h3 className="font-normal text-currentBlue text-2xl md:text-3xl lg:text-[40px] font-forum">Что
                                    включено
                                    в
                                    этот
                                    номер?</h3>
                                <ul className="list-disc text-currentBlack font-jost font-normal   md:text-lg ml-5">
                                    <li>Частный балкон</li>
                                    <li>Элитная кровать 140x200 см</li>
                                    <li>Обитое кресло у панорамного окна</li>
                                    <li>Телевизор с ультра-высоким разрешением для просмотра фильмов о горных походах
                                    </li>
                                    <li>Письменный стол с USB-портами для документирования ваших приключений</li>
                                    <li>Сейф в номере для хранения ваших лучших горных фотографий</li>
                                    <li>Станция обслуживания с кофемашиной Lavazza, чайником и чаем</li>
                                    <li>Удобные махровые полотенца и халаты</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className=" border border-first">
                                <div className="flex flex-col items-center p-3 lg:p-5">
                                    <h3 className="font-normal text-currentBlue text-2xl md:text-3xl lg:text-[40px] mb-2">Бронирование:</h3>
                                    <p className="font-normal text-currentBlue text-base md:text-lg lg:text-2xl">450 000
                                        UZS / за
                                        ночь
                                    </p>
                                    <div
                                        className="flex flex-col gap-[11px] w-full mt-5 text-currentBlack font-jost font-normal">
                                        <div
                                            className="p-[10px_14px] w-full flex items-center border border-first  justify-between">
                                            <p>Заезд</p><span className="flex items-center gap-1">2024-04-24<i
                                            className="w-4 h-4"
                                            data-lucide="chevron-down"></i></span>
                                        </div>
                                        <div
                                            className="p-[10px_14px] w-full flex items-center border border-first  justify-between">
                                            <p>Выезд</p><span className="flex items-center gap-1">2024-04-25<i
                                            className="w-4 h-4"
                                            data-lucide="chevron-down"></i></span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="p-[9px_6px] w-full flex items-center border border-first  justify-between">
                                                <p>Взрослые</p><span className="flex items-center gap-1">1<i
                                                className="w-4 h-4"
                                                data-lucide="chevron-down"></i></span>
                                            </div>
                                            <div
                                                className="p-[9px_6px] w-full flex items-center border border-first  justify-between">
                                                <p>Дети</p><span className="flex items-center gap-1">0<i
                                                className="w-4 h-4"
                                                data-lucide="chevron-down"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 md:gap-[30px] pb-3 lg:pb-5 px-3 lg:px-5">
                                    <ButtonUI content={'Забронировать'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SectionUI title={'Удобства отеля'} modeBlue={true} isNoContainer={true}>
                <div className={'pb-5 md:pb-10'}>
                    <RoomsSlider/>
                </div>
                <div className="flex flex-col items-center pb-10 md:pb-[60px] lg:pb-[90px]">
                    <ButtonUI borderBtn borderWhite content={'Посмотреть все'}/>
                </div>
            </SectionUI>
        </>
    );
};

export default Page;


const SwiperInner = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const onInit = (a) => {
        console.log(a);
    };

    return (
        <>

            <div className={'grid lg:grid-cols-3 gap-2.5 lg:gap-4 xl:gap-5 '}>
                <Swiper

                    spaceBetween={10}
                    thumbs={{swiper: thumbsSwiper}}
                    navigation={{
                        nextEl: ".swipper-button-next",
                        prevEl: ".swipper-button-prev",
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2 h-[220px] sm:h-[300px]  lg:h-[450px] xl:h-[520px] lg:col-span-2 w-full"
                >
                        {
                        imageArr.map((image, index) => (
                            <SwiperSlide key={index} className={'relative w-full h-full'}>


                                        <ImageUi alt={'inner image'} src={image.image}/>


                            </SwiperSlide>
                        ))
                    }

                    <button
                        className=" hidden lg:block  absolute left-5 top-[50%] cursor-pointer  border rounded-full border-white p-2  swipper-button-prev z-[12]  bg-white text-currentBlue">
                        <GrPrevious className="text-xl"/>
                    </button>
                    <button
                        className=" hidden lg:block absolute right-5 top-[50%] cursor-pointer  border rounded-full border-white p-2 z-20 swipper-button-next bg-white text-currentBlue">
                        <GrNext className="text-xl"/>
                    </button>
                </Swiper>

                <Swiper

                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                            grid: {
                                rows: 1,
                            }
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                            grid: {
                                rows: 1,
                            }
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                            grid: {
                                rows: 1,
                            }
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                            grid: {
                                rows: 2,
                            }
                        },
                        1280: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                            grid: {
                                rows: 2,
                            }
                        },

                    }}
                    onSwiper={setThumbsSwiper}


                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Grid, Navigation, Thumbs]}
                    className="mySwiper  h-[100px] lg:h-[450px] xl:h-[520px] w-full"
                >
                    {
                        imageArr.map((image, ind) => (
                            <SwiperSlide key={ind} className={'relative w-full h-full'}>
                                <ImageUi alt={'inner image'} src={image.image}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    )
}