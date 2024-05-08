'use client'
import {
    AdditionalServicesCard, ButtonUI, GallerySection,
    Header,
    HotelAmenitiesCard,
    ImageUI, Navbar,
    NewsCard,
    RoomsSlider,
    SectionUI
} from "@/components";
import NewsSlider from "../components/news-slider";
import { useTranslation } from "react-i18next";

export default function Home() {
  const {t} = useTranslation()
  return (
   <main>
     <Header />
     <SectionUI title={'О нашем отеле'}
                subTitle={'Наш отель — это уютное гнездышко в сердце города, где каждый гость ощущает себя как дома. Мы предлагаем стильные номера, оформленные с любовью к деталям, обширный выбор услуг высшего качества и внимательное отношение к каждому гостю. Независимо от того, приезжаете ли вы в командировку или на отдых, наш отель станет идеальным выбором для вашего пребывания.'}
     >

       <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-[20%] pb-[50px] md:pb-20">
         <div>
            <AdditionalServicesCard />
         </div>
          <div className={' md:mt-[50%]'}>
            <AdditionalServicesCard />
          </div>
         <div className={'flex items-center justify-center col-span-1 md:col-span-2'}>
          <ButtonUI content={t('btn.more')}  hrefToPage={'/about'} borderBtn />
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
       {/*<iframe width="1236" height="695" src="https://www.youtube.com/embed/Vp5M3bkGdIk"*/}
       {/*        title="Luxury in the Black Forest: What to do in Baden-Baden | Casino and Spa | DW Travel"*/}
       {/*        frameBorder="0"*/}
       {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
       {/*        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>*/}
     </SectionUI>
     <SectionUI title={'Удобства отеля'} modeBlue={true} isNoContainer={true}>
       <div className={'pb-5 md:pb-10'}>
        <RoomsSlider/>
       </div>
        <div className="flex flex-col items-center pb-2">
          <ButtonUI borderBtn borderWhite content={t('btn.moreAll')}/>
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
     <SectionUI title={'Ориентиры поблизости'} modeBlue={true} cityBg={true} >
       <div className={'relative'}>
         <div className="grid grid-cols-1 md:grid-cols-2   pb-[60px] lg:pb-20">
           <div className={'hidden md:block'}>

           </div>
           <div className={'grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 md:gap-y-[30px]'}>
             <LocationInfos/>
             <LocationInfos/>
             <LocationInfos/>
             <LocationInfos/>
           </div>
         </div>
       </div>


     </SectionUI>

     <SectionUI title={'Фотогалерея'}>
       <GallerySection isForIndex={true} />
       <div className="flex flex-col items-center pb-1.5 pt-5 md:pt-10">
          <ButtonUI content={t('btn.moreAll')} hrefToPage={'/gallery'} borderBtn />
       </div>
     </SectionUI>
     <SectionUI title={'Новостной блог'}
                subTitle={'Добро пожаловать в новостной блог нашего отеля, где мы делимся последними новостями, событиями и увлекательными историями. Узнайте о наших специальных предложениях, интересных мероприятиях и уникальных возможностях, чтобы сделать ваше пребывание у нас еще более запоминающимся.'}
     >
       <NewsSlider/>
     </SectionUI>
   </main>
  );
}


const LocationInfos = () => {

  return (
      <div className='text-white space-y-1'>
        <div data-aos='fade-up' className='flex items-center gap-x-3 md:gap-x-5 pb-[10px] '>
          <div className="w-6 h-6 relative shrink-0">
            <ImageUI src={'/image/baden-icons/wifi.svg'} alt={'icon'} objectFitContain={true}/>
          </div>
          <h3 className='text-base md:text-xl font-medium leading-none'>Рестораны и кафе</h3>
        </div>
        <ul data-aos='fade-up' data-aos-delay={300} className='space-y-[5px] md:space-y-[10px]'>

          <li  className='flex justify-between text-base gap-4 md:gap-10 font-thin'>
            <p>Lorem ipsum dolor.</p>
            <p className="shrink-0 text-[12px] lg:text-base"><span>{location?.distance}</span>
              <span>Lorem.</span></p>
          </li>
          <li  className='flex justify-between text-sm lg:text-base gap-4 md:gap-10 font-thin'>
            <p>Lorem ipsum dolor sit.</p>
            <p className="shrink-0 text-[12px] lg:text-base"><span>{location?.distance}</span>
              <span>Lorem.</span></p>
          </li>
          <li  className='flex justify-between text-sm lg:text-base gap-4 md:gap-10 font-thin'>
            <p>Lorem ipsum.</p>
            <p className="shrink-0 text-[12px] lg:text-base"><span>{location?.distance}</span>
              <span>Lorem.</span></p>
          </li>
        </ul>
      </div>
  );
};

