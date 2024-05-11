'use client'
import {RoomCard, SectionUI} from "@/components";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {langSelect} from "@/helper";

const RoomContent = ({room}) => {
  const {t} = useTranslation()
  const {lang} = useSelector(state => state.langSlice)

  return (
      <SectionUI title={t('rooms.miniHeader')}>
        <div className="flex flex-col md:pb-20 pb-10 pt-10  gap-10 md:gap-[60px]">
          {
            room?.map(( item , id) => (
                <RoomCard key={id} id={id} isLeftImage={id % 2 !== 0} price={item?.price} title={langSelect(lang ,item?.address_ru , item?.address_en ,item?.address_uz )} subTitle={langSelect(lang ,item?.sub_title_ru , item?.sub_title_en ,item?.sub_title_uz )} person={item?.num_people} bedrooms={item?.num_bedrooms} capacity={item?.capacity} images={item?.images} slug={item?.slug} />
            ))
          }
        </div>
      </SectionUI>
  );
};

export default RoomContent;