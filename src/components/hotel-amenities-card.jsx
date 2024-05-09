import {ImageUI} from "@/components/index";

const HotelAmenitiesCard = () => {
  return (
      <div className={'flex flex-col justify-center items-center gap-2 md:gap-4 text-white text-center border-[0.2px] border-white p-5 md:p-10'}>
        <div className={'relative w-14 h-14'}>
          <ImageUI  src={'/image/baden-icons/wifi.svg'} objectFitContain={true} alt={'card image'}/>
        </div>
        <span className={'w-[0.5px] h-8 bg-white'} ></span>
        <h3 className={'md:text-2xl font-thin'}>
          Обслуживание номеров
        </h3>
      </div>
  );
};

export default HotelAmenitiesCard;