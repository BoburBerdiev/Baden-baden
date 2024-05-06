  import {ImageUI} from "@/components/index";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
  import Link from "next/link";
  import {GrNext, GrPrevious} from "react-icons/gr";

const RoomsSlider = () => {
  return (
      <Swiper
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swipper-button-next",
            prevEl: ".swipper-button-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1.3,
              spaceBetween: '10%',
            },

          }}
          pagination={{
            clickable: true,
            el: ".my-pagination-cards",
          }}
          modules={[Navigation, Pagination]}
          className="w-full relative z-20 mySwiper h-full flex items-center justify-center"
      >

        <SwiperSlide className={"h-full pt-[5%] md:pt-[2%] px-5 md:px-0 relative"}>
          <RoomsCard/>
        </SwiperSlide>
        <SwiperSlide className={"h-full pt-[5%] md:pt-[2%] px-5 md:px-0 relative"}>
          <RoomsCard/>
        </SwiperSlide>
        <SwiperSlide className={"h-full pt-[5%] md:pt-[2%] px-5 md:px-0 relative"}>
          <RoomsCard/>
        </SwiperSlide>
        <button
            className=" hidden md:block  absolute left-[6%] top-[50%] cursor-pointer text-white border rounded-full border-white p-2  swipper-button-prev z-[12]  hover:bg-white hover:text-currentBlue">
          <GrPrevious className="text-xl"/>
        </button>
        <button className=" hidden md:block absolute right-[6%] top-[50%] cursor-pointer text-white border rounded-full border-white p-2 z-20 swipper-button-next hover:bg-white hover:text-currentBlue">
          <GrNext className="text-xl"/>
        </button>
      </Swiper>
  );
};

  export default RoomsSlider;


  const RoomsCard = () => {

    return (
        <Link href={'#'} className={'block'}>
        <div className={`w-full h-[300px] md:h-[550px]  relative duration-75 

               `}>
            <ImageUI isBorder={true} isBorderWhite={true} src={'/image/img.jpg'} alt={'title'}/>
            <div
                className={'absolute z-[12] h-full top-0  w-full left-0 z-5 flex items-center  flex-col gap-2 md:gap-5 justify-end text-white p-4'}>
              <h4 className={'text-2xl md:text-4xl text-white'}>
                Premiere suite
              </h4>
              <div className={'text-lg md:text-2xl flex gap-x-2'}>
                <p className={'space-x-1'}>
                  <span>70</span>
                  <span>M</span>
                </p>
                <p>
                  /
                </p>
                <p className={'space-x-1'}>
                  <span>1-4</span>
                  <span>чел</span>
                </p>
                <p>
                  /
                </p>
                <p className={'space-x-1'}>
                  <span>2</span>
                  <span>спальни</span>
                </p>

              </div>
            </div>

          </div>
        </Link>
    );
  };

