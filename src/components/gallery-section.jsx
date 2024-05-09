'use client'
import {ImageUI} from "@/components/index";
const GallerySection = ({isForIndex}) => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
      <div className={'grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3  '}>

        <div className={'space-y-1 md:space-y-3'}>
          <a href={'/image/img.jpg'} className={'relative block aspect-[16/12]'}>
            <ImageUI src={'/image/img.jpg'} alt={'gallery'}/>
          </a>
          <a href={'/image/img2.jpg'} className={'relative block aspect-[12/16]'}>
            <ImageUI src={'/image/img2.jpg'} alt={'gallery'}/>
          </a>
        </div>
        <div className={'space-y-1 md:space-y-3'}>
          <a href={'/image/img3.jpg'} className={'relative block aspect-[12/16]'}>
            <ImageUI src={'/image/img3.jpg'} alt={'gallery'}/>
          </a>
          <a href={'/image/img-1.jpg'} className={'relative block aspect-[16/12]'}>
            <ImageUI src={'/image/img-1.jpg'} alt={'gallery'}/>
          </a>
        </div>

        <div className={`space-y-3  ${isForIndex ? 'md:block hidden' : 'block'} `}>
          <a href={'/image/img1.jpg'} className={'relative block aspect-[16/12]'}>
            <ImageUI src={'/image/img1.jpg'} alt={'gallery'}/>
          </a>
          <a href={'/image/img-3.jpg'} className={'relative block aspect-[12/16]'}>
            <ImageUI src={'/image/img-3.jpg'} alt={'gallery'}/>
          </a>
        </div>
      </div>
  );
};

export default GallerySection;


