import React from 'react';
import {ImageUI} from "@/components/index";

const AdditionalServicesCard = ({image , title}) => {
  return (
      <div  >
        <div className={`relative aspect-[4/3] md:aspect-square  `}>
          <ImageUI alt={'room'} src={image} imageStyle={'z-10'} isBorder={true}/>
        </div>
        <p className={'hidden md:block md:text-lg font-jost'}>
          {title}
        </p>
      </div>

  );
};

export default AdditionalServicesCard;