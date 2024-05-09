import React from 'react';
import {ImageUI} from "@/components/index";

const AdditionalServicesCard = () => {
  return (
      <div>
        <div className={`relative aspect-[4/3] md:aspect-square  `}>
          <ImageUI alt={'room'} src={'/image/room1.jpg'} imageStyle={'z-10'} isBorder={true}/>
        </div>
        <p className={'hidden md:block md:text-lg font-jost'}>
          *Утонченный лаунж-бар с уникальной атмосферой
        </p>
      </div>

  );
};

export default AdditionalServicesCard;