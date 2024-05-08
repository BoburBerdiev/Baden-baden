'use client'

import {GallerySection, SectionUI} from "@/components";

const Page = () => {
  return (
      <div>
        <SectionUI title={'Фотогалерея'} isEmbroidery={true}>
          <div className={'py-10 space-y-1 md:space-y-3'}>
          <GallerySection/>
          <GallerySection/>
          </div>
        </SectionUI>
      </div>
  );
};

export default Page;