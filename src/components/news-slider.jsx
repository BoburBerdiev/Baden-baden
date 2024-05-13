import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination} from "swiper/modules";
import {NewsCard} from "@/components/index";
import {langSelect} from "@/helper";
import {useSelector} from "react-redux";

const NewsSlider = ({news}) => {
  const {lang} = useSelector(state => state.langSlice)

  return (
      <div className={'relative mySwiper'}>
        <Swiper
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
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
            modules={Pagination}
            className="w-full  h-full flex items-center justify-center"
        >
          {
            news?.map(item => (
                <SwiperSlide key={item?.id} className={"h-full pt-[2%]"}>
                  <NewsCard image={item?.image} link={item?.link}
                            title={langSelect(lang, item?.title_ru, item?.title_en, item?.title_uz)}
                            subTitle={langSelect(lang, item?.sub_title_ru, item?.sub_title_en, item?.sub_title_uz)}/>
                </SwiperSlide>
            ))
          }
          <div className="relative flex items-center justify-center py-2 mt-5  gap-x-5">
            <div className="inline-flex items-center gap-x-4 my-pagination-cards pagintaion-slider"></div>
          </div>
        </Swiper>

      </div>

  );
};

export default NewsSlider;