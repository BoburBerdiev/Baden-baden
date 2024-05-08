'use client'
import {NewsCard, SectionUI} from "@/components";
import { useTranslation } from "react-i18next";

const Page = () => {
  const {t} = useTranslation()
  return (
      <SectionUI title={t('news.title')} isEmbroidery={true}
                 subTitle={'Добро пожаловать в новостной блог нашего отеля, где мы делимся последними новостями, событиями и увлекательными историями. Узнайте о наших специальных предложениях, интересных мероприятиях и уникальных возможностях, чтобы сделать ваше пребывание у нас еще более запоминающимся.'}
      >
        <div className={'grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-x-5 lg:gap-y-10 py-10'}>
          <NewsCard/>
          <NewsCard/>
          <NewsCard/>
          <NewsCard/>
          <NewsCard/>
          <NewsCard/>
        </div>
      </SectionUI>
  );
};

export default Page;