'use client'

import {GallerySection, SectionUI} from "@/components";
import { useTranslation } from "react-i18next";

const Page = () => {
  const {t} = useTranslation()
  return (
      <div>
        <SectionUI title={t('gallery.title')} isEmbroidery={true}>
          <div className={'py-10 space-y-1 md:space-y-3'}>
          <GallerySection/>
          <GallerySection/>
          </div>
        </SectionUI>
      </div>
  );
};

export default Page;