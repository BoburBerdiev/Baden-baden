import {LuMaximize ,LuBedDouble} from "react-icons/lu";
import { IoPersonOutline} from "react-icons/io5";
import {ButtonUI, Slider} from "@/components/";
import { useTranslation } from "react-i18next";
import {priceView} from "@/helper";

const RoomCard = ({isLeftImage ,price ,title ,subTitle ,person ,bedrooms ,capacity ,images ,slug , id}) => {
  const {t} = useTranslation( )
  const borderStyle = `z-[2]  before:border-[#00274D] after:border-[#00274D] relative   before:content-[''] before:duration-150  before:absolute before:w-[96%] before:h-[90%] before:-top-[2%] before:z-[1]  before:left-[2%] before:border-[0.5px]  before:z-1 after:content-[''] after:duration-150  after:absolute after:z-[0] after:w-[104%] after:h-[90%] after:-top-[-4%] after:left-[-2%] after:border  after:z-2`
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-[60px]" data-aos={'fade-up'} data-aos-delay={id*50}>
        <div className={`${borderStyle} w-full  h-[300px] md:h-[350px] lg:h-[380px] relative ${isLeftImage ? 'order-1 md:order-2' : ''} `}>
          <Slider images={images} card={true} PaginationMod={true} PaginationInner={true} />
        </div>
        <div className={`flex flex-col items-center justify-center md:py-10 ${isLeftImage ? ' order-2 md:order-1' : ''}`}>
          <h3 className="font-normal text-lg md:text-2xl text-first mb-3 lg:mb-5 font-forum">{title}</h3>
          <div
              className="flex items-center font-forum whitespace-nowrap justify-center gap-[50px] text-first text-sm md:text-lg mb-3 lg:mb-5">
            <div className="flex gap-4 items-center">
              <LuMaximize  className="w-4 h-4 lg:w-6 lg:h-6" />
              <span>{capacity} <span> {t('roomInner.areaSymbol')} </span> </span>
            </div>
            <div className="flex gap-4 items-center">
              <IoPersonOutline   className="w-4 h-4 lg:w-6 lg:h-6" />
            <span>{person}    <span> {t('roomInner.humenSymbol')} </span> </span>
            </div>
            <div className="flex gap-4 items-center">
              <LuBedDouble  className="w-4 h-4 lg:w-6 lg:h-6" />
              <span>{bedrooms} <span> {t('roomInner.bedromSymbol')} </span></span></div>
          </div>
          <p className="text-center text-textBlack  text-sm sm:text-lg font-normal ">
            {subTitle}
          </p>
          <p className="mt-3 lg:mt-5 text-first font-normal text-lg md:text-2xl">${priceView(price)} UZS / за ночь </p>
          <div className="flex mt-5 lg:mt-10 justify-center w-full gap-1">
            <ButtonUI content={t('btn.booking')} />
            <ButtonUI content={t('btn.more')} onlyHref hrefToPage={`room/${slug}`}/>
          </div>
        </div>
      </div>
  );
};

export default RoomCard;