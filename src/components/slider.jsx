import {Swiper, SwiperSlide} from "swiper/react";
import {  Navigation, Pagination} from "swiper/modules";
import {ImageUI} from "@/components/";
import {GrPrevious, GrNext} from "react-icons/gr";


const list = [
  {image: '/image/room1.jpg',id:3},
  {image: '/image/room2.jpg',id:4},
  {image: '/image/room3.jpg',id:1},
  {image: '/image/room4.jpg',id:2}
]

const Slider = ({
                  priority = false,
                   Quality,
                  card
                }) => {
  return (
      <div
          className={`bg-transparent h-full`}
      >
        <Swiper
            loop={true}
            className={` w-full h-full relative room-slider `}
            spaceBetween={30}
            pagination={{
              clickable: true,
              el: ".inner-pagination",
            }}
            navigation={{
              nextEl: ".button-next-btn",
              prevEl: ".button-prev-btn",
            }}
            modules={[  Navigation, Pagination]}
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
            <div className="absolute w-full h-full left-0 top-0 z-20  flex-col justify-between flex p-3">
              <div/>
              <div className={'flex justify-between items-center w-full '}>
                <button className="cursor-pointer text-currentBlue relative z-10 p-2 border border-white hover:bg-currentBlue hover:text-white button-prev-btn bg-white flex justify-center items-center rounded-full ">
                  <GrPrevious className="text-lg"/>
                </button>
                <button className="cursor-pointer text-currentBlue relative z-10 p-2 border border-white bg-white flex justify-center items-center rounded-full hover:bg-currentBlue hover:text-white  button-next-btn ">
                  <GrNext className="text-lg"/>
                </button>
              </div>
              <div className={' flex justify-center items-start w-full'}>
                <div className="inline-flex items-center gap-x-4  inner-pagination"></div>
              </div>
            </div>
        </Swiper>
      </div>
  );
};

export default Slider;
