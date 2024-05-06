import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import {NewsCard} from "@/components/index";

const NewsSlider = () => {
  return (
      <Swiper
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
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          pagination={{
            clickable: true,
            el: ".my-pagination-cards",
          }}
          loop={true}
          modules={[Navigation, Pagination]}
          className="w-full mySwiper h-full flex items-center justify-center"
      >
        <SwiperSlide className={"h-full pt-[2%]"}>
          <NewsCard/>
        </SwiperSlide>
        <SwiperSlide className={"h-full pt-[2%]"}>
          <NewsCard/>
        </SwiperSlide>
        <SwiperSlide className={"h-full pt-[2%]"}>
          <NewsCard/>
        </SwiperSlide>
        <SwiperSlide className={"h-full pt-[2%]"}>
          <NewsCard/>
        </SwiperSlide>
        <SwiperSlide className={"h-full pt-[2%]"}>
          <NewsCard/>
        </SwiperSlide>
        <SwiperSlide className={"h-full pt-[2%]"}>
          <NewsCard/>
        </SwiperSlide>
        <SwiperSlide className={"h-full pt-[2%]"}>
          <NewsCard/>
        </SwiperSlide>
        <SwiperSlide className={"h-full pt-[2%]"}>
          <NewsCard/>
        </SwiperSlide>
        <div className="relative flex items-center justify-center py-4 mt-5 md:mt-10 gap-x-5">

          <div className="inline-flex items-center gap-x-4 my-pagination-cards pagintaion-slider"></div>
        </div>
      </Swiper>
);
};

export default NewsSlider;