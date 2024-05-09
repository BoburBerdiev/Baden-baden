'use client'
import {NewsCard, SectionUI} from "@/components";
import {useTranslation} from "react-i18next";
import {langSelect} from "@/helper";
import {useSelector} from "react-redux";

const NewContent = ({titleNew}) => {
  const {t} = useTranslation()
  const {lang} = useSelector(state => state.langSlice)

  return (
      <SectionUI  title={langSelect(lang ,titleNew?.address_ru , titleNew?.address_en ,titleNew?.address_uz )} subTitle={langSelect(lang ,titleNew?.sub_title_ru , titleNew?.sub_title_en ,titleNew?.sub_title_uz )}   isEmbroidery={true}

      >
        <div className={'grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-x-5 lg:gap-y-10 py-10'}>
          {

          }
          {/*<NewsCard title={'1'} subTitle={'1'} image={'2'} link={'2'}/>*/}
        </div>
      </SectionUI>
  );
};

export default NewContent;