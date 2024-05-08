'use client'

import {GallerySection, SectionUI} from "@/components";

const Page = () => {
  return (
      <div>
        <SectionUI isEmbroidery={true} title={'Фотогалерея'} subTitle={'Наша фотогалерея представляет широкий выбор изображений, позволяющих вам заглянуть в мир нашего отеля прямо сейчас. Вы увидите наши уютные номера, стильные интерьеры, красивые виды из окон, а также обширный выбор удобств и сервисов, которые мы предлагаем нашим гостям. Погрузитесь в атмосферу комфорта и роскоши нашего отеля, просматривая наши фотографии.'}>
          <GallerySection/>
        </SectionUI>
      </div>
  );
};

export default Page;