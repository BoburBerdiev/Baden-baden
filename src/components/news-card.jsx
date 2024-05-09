import Link from "next/link";
import {ImageUI} from "@/components/";
import { useTranslation } from "react-i18next";

const NewsCard = ({title ,  subTitle , link , image}) => {
  const {t} = useTranslation()
  return (


      <div className="bg-white  border-currentBlue  border p-2 group duration-75 hover:shadow-currentBlue/40 cursor-pointer ">
        <div className={` relative duration-75 -mt-5  before:content-[''] group-hover:before:top-[0] before:duration-150  before:absolute before:w-[90%] before:h-[90%] before:-top-[5%] before:left-[5%]   before:border before:border-currentBlue group-hover:shadow-md`} >
          <div className={'w-full h-full p-1 aspect-video relative overflow-hidden'}>
          <ImageUI src={image} alt={'banner'}  imageStyle={'group-hover:scale-105 group-hover:duration-300'} />

          </div>
        </div>
        <div className="p-4 space-y-3">
            <h5 className="mb-2 h-16 tracking-tight font-jost  line-clamp-2 text-base md:text-xl font-medium text-currentBlue">{title}</h5>
          <p className="mb-3 font-normal text-currentBlack font-jost  line-clamp-2 md:line-clamp-3 text-sm md:text-base">{subTitle}</p>
          <a  href={link}
             className="inline-flex items-center  underline font-jost">
              {t('btn.more')}
          </a>
        </div>
      </div>

  );
};

export default NewsCard;