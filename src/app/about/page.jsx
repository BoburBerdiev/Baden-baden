'use client'

import {AccordionAbout, HotelAmenitiesCard, ImageUI, SectionUI} from "@/components";

const Page = () => {
  return (
      <div>
        <SectionUI title={'Каждый гость - наш главный приоритет!'}
                   isEmbroidery={true}
                   subTitle={'Наш отель — это уютное гнездышко в сердце города, где каждый гость ощущает себя как дома. Мы предлагаем стильные номера, оформленные с любовью к деталям, обширный выбор услуг высшего качества и внимательное отношение к каждому гостю. Независимо от того, приезжаете ли вы в командировку или на отдых, наш отель станет идеальным выбором для вашего пребывания. Выбрав наш отель для вашего проживания, вы откроете для себя истинное удовольствие от отдыха в уютной обстановке и с высоким уровнем сервиса.'}>
          <div className={`w-full aspect-video md:aspect-[5/2] relative`}>
            <ImageUI src={'/image/img1.jpg'} alt={'banner'} priority={true}
                     imageStyle={'object-center'}
                     card={false}/>
          </div>
        </SectionUI>
        <SectionUI>
          <div className={'grid  md:grid-cols-11 gap-5 md:gap-[100px] pb-10 md:pb-20'}>
            <div className=" relative w-full md:col-span-5 aspect-video h-full order-2 md:order-1">
              <ImageUI isBorder={true} src={'/image/img1.jpg'} alt={'banner'} priority={true} card={false} />
            </div>
            <div className={'order-1 md:order-2 py-0 md:py-20 md:col-span-6'}>
              <AccordionAbout title={'Бассейн и спа '} subTitle={'Наш отель гордится предоставлением уютного бассейна и спа-центра для наших гостей. Погрузитесь в расслабляющую атмосферу бассейна или насладитесь профессиональными процедурами в спа, чтобы подарить себе заслуженный отдых и ощущение полного расслабления.'}/>
              <AccordionAbout title={'Бассейн и спа '} subTitle={'Наш отель гордится предоставлением уютного бассейна и спа-центра для наших гостей. Погрузитесь в расслабляющую атмосферу бассейна или насладитесь профессиональными процедурами в спа,  или насладитесь профессиональными процедурами в спа,  чтобы подарить себе заслуженный отдых и ощущение полного расслабления  или насладитесь профессиональными процедурами в спа,.'}/>
              <AccordionAbout title={'Бассейн и спа '} subTitle={'Наш отель гордится предоставлением уютного бассейна и спа-центра для наших гостей. Погрузитесь в расслабляющую атмосферу бассейна или насладитесь профессиональными  или насладитесь профессиональными процедурами в спа, процедурами в спа, чтобы подарить себе заслуженный отдых и ощущение полного расслабления.'}/>
              <AccordionAbout title={'Бассейн и спа '} subTitle={'Наш отель  подарить себе заслуженный отдых и ощущение полного расслабления.'}/>
            </div>
          </div>
        </SectionUI>
        <SectionUI isFalsePadding={true} modeBlue={true} isNoContainer={true} >
          <div className={'w-full h-[300px] md:h-[500px] lg:h-[700px]'}>
            <video className="object-cover w-full h-full" autoPlay loop muted>
              <source
                  className="w-full"
                  src={`https://leapmotorca.uz/api/media/a15abd61-9bbd-469a-8919-602e87d146cc-C01ExtendVideo (1).mp4`}
                  type="video/mp4"
              />
            </video>
          </div>
        </SectionUI>
        <SectionUI title={'Удобства отеля'}
                   subTitle={'Наш отель предлагает широкий спектр удобств для комфортного пребывания. Наши удобства включают в себя просторные и уютные номера с современной мебелью, бесплатный Wi-Fi на всей территории отеля, услуги прачечной и химчистки. Мы также предлагаем услуги консьержа, обмена валюты и трансфер до аэропорта, чтобы сделать ваше пребывание максимально приятным и комфортным'} modeBlue={true}  >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5  ">
            <HotelAmenitiesCard/>
            <HotelAmenitiesCard/>
            <HotelAmenitiesCard/>
            <HotelAmenitiesCard/>
          </div>
        </SectionUI>
      </div>

  );
};

export default Page;