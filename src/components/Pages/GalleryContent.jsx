
'use client'

import {GallerySection, SectionUI} from "@/components";
import { useTranslation } from "react-i18next";
import {useQuery} from "react-query";
import apiService from "@/service/api";
const GalleryContent = () => {
  const {t} = useTranslation()


  const {
    data: galleryCard,
    refetch: galleryCardRefetch,
    isLoading:galleryIsLoading,
    isSuccess: galleryCardSuccess,
  } = useQuery(
      "gallery",
      () =>
          apiService.getData(
              `/about/news/?page=${page}&page_size=3`
          ),
      {
        enabled: false,
      }
  );


  return (
      <div>
        <SectionUI title={t('gallery.title')} isEmbroidery={true}>
          <div className={'py-10 space-y-1 md:space-y-3'}>
            {/*<GallerySection/>*/}
            {/*<GallerySection/>*/}
          </div>
        </SectionUI>
      </div>
  );
};

export default GalleryContent;