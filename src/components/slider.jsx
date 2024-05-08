import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Autoplay, Navigation, Pagination} from "swiper/modules";
import {ImageUI} from "@/components/";
import {GrPrevious, GrNext} from "react-icons/gr";


const list = [
  {image: '/image/about.jpg',id:3},
  {image: '/image/about.jpg',id:4},
  {image: '/image/about.jpg',id:1},
  {image: '/image/about.jpg',id:2}
]

const Slider = ({
                  priority = false,
                  PaginationMod, Quality,
                  card
                }) => {
  // SwiperCore.use([EffectFade, Autoplay, Navigation, Pagination]);
  return (
      <div
          className={`bg-transparent h-full`}
      >
        <Swiper
            modules={[EffectFade, Autoplay, Navigation, Pagination]}
            loop={true}
            className={` w-full h-full relative`}
            spaceBetween={0}
            effect={"fade"}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            navigation={{
              nextEl: ".swipper-button-next-btn",
              prevEl: ".swipper-button-prev-btn",
            }}
        >

          {
            list?.map(item => (

          <SwiperSlide key={item?.id}>
              <div className={`w-full h-full relative`}>
                <ImageUI isBorder={true} src={item?.image} alt={'banner'} quality={Quality} priority={priority}
                         imageStyle={'object-center'}
                         card={card || false}/>

              </div>

          </SwiperSlide>
            ))
          }
        </Swiper>
        {PaginationMod && (
            <div className="absolute w-full h-full left-0 top-0 z-20 flex flex-col justify-between">
              <div/>
              <div className={'flex justify-between items-center w-full px-3'}>
                <div className="cursor-pointer text-[#8F8170] z-10 p-2  swipper-button-prev-btn bg-white flex justify-center items-center rounded-full ">
                  <GrPrevious className="text-lg"/>
                </div>
                <div className="cursor-pointer text-[#8F8170] z-10 p-2 bg-white flex justify-center items-center rounded-full  swipper-button-next-btn ">
                  <GrNext className="text-lg"/>
                </div>
              </div>

              <div className="inline-flex items-center gap-x-4  room-slider room-slider"></div>
            </div>
        )}
      </div>
  );
};

export default Slider;
