'use client'
import {ImageUI} from "@/components/index";
const GallerySection = ({gallery , isForIndex}) => {

  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
      <div className={'grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3  '}>

        <div className={'space-y-1 md:space-y-3'}>
          <a data-aos={'fade-up'}  href={gallery[0]?.image} className={'relative block aspect-[16/12]'}>
            <ImageUI src={gallery[0]?.image} alt={'gallery'}/>
          </a>
          <a data-aos={'fade-up'} data-aos-delay={10} href={gallery[1]?.image} className={'relative block aspect-[12/16]'}>
            <ImageUI src={gallery[1]?.image} alt={'gallery'}/>
          </a>
        </div>
        <div className={'space-y-1 md:space-y-3'}>
          <a data-aos={'fade-up'} data-aos-delay={20} href={gallery[2]?.image} className={'relative block aspect-[12/16]'}>
            <ImageUI src={gallery[2]?.image} alt={'gallery'}/>
          </a>
          <a data-aos={'fade-up'} data-aos-delay={30} href={gallery[3]?.image} className={'relative block aspect-[16/12]'}>
            <ImageUI src={gallery[3]?.image} alt={'gallery'}/>
          </a>
        </div>

        <div className={`space-y-3  ${isForIndex ? 'md:block hidden' : 'block'} `}>
          <a data-aos={'fade-up'} data-aos-delay={40}  href={gallery[4]?.image} className={'relative block aspect-[16/12]'}>
            <ImageUI src={gallery[4]?.image} alt={'gallery'}/>
          </a>
          <a data-aos={'fade-up'} data-aos-delay={50} href={gallery[5]?.image} className={'relative block aspect-[12/16]'}>
            <ImageUI src={gallery[5]?.image} alt={'gallery'}/>
          </a>
        </div>
      </div>
  );
};

export default GallerySection;


