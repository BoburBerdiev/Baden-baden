'use client'
import {ImageUI} from "@/components/index";
const GallerySection = ({gallery , isForIndex}) => {
  console.log(gallery)
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
      <div className={'grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3  '}>

        <div className={'space-y-1 md:space-y-3'}>
          {gallery[0]?.image &&
            <a   href={gallery[0]?.image} className={'relative block overflow-hidden aspect-[16/12]'}>
              <ImageUI src={gallery[0]?.image} alt={'gallery'}/>
            </a>
          }
          {
              gallery[1]?.image &&
              <a   href={gallery[1]?.image} className={'relative block overflow-hidden aspect-[12/16]'}>
                <ImageUI src={gallery[1]?.image} alt={'gallery'}/>
              </a>
          }
        </div>
        <div className={'space-y-1 md:space-y-3'}>
          {
              gallery[2]?.image &&
          <a   href={gallery[2]?.image} className={'relative block overflow-hidden aspect-[12/16]'}>
            <ImageUI src={gallery[2]?.image} alt={'gallery'}/>
          </a>
          }
          {
              gallery[3]?.image &&
            <a   href={gallery[3]?.image}
               className={'relative block overflow-hidden aspect-[16/12]'}>
              <ImageUI src={gallery[3]?.image} alt={'gallery'}/>
            </a>
          }

        </div>

        <div className={`space-y-3  ${isForIndex ? 'md:block hidden' : 'block'} `}>
          {
              gallery[4]?.image &&
          <a    href={gallery[4]?.image} className={'relative block overflow-hidden aspect-[16/12]'}>
            <ImageUI src={gallery[4]?.image} alt={'gallery'}/>
          </a>
          }
          {
            gallery[5]?.image &&
          <a   href={gallery[5]?.image} className={'relative block overflow-hidden aspect-[12/16]'}>
            <ImageUI src={gallery[5]?.image} alt={'gallery'}/>
          </a>
          }
        </div>
      </div>
  );
};

export default GallerySection;


