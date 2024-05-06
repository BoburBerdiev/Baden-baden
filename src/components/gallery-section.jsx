import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import LightGallery from 'lightgallery/react';


import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import {ImageUI} from "@/components/index";
const GallerySection = ({isForIndex}) => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
      <div className={'grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3  py-10'}>
      <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}

      >
        <div className={'space-y-1 md:space-y-3'}>
          <a href={'/image/img.jpg'} className={'relative block aspect-[16/12]'}>
            <ImageUI src={'/image/img.jpg'}/>
          </a>
          <a href={'/image/img2.jpg'} className={'relative block aspect-[12/16]'}>
            <ImageUI src={'/image/img2.jpg'}/>
          </a>
        </div>
        <div className={'space-y-1 md:space-y-3'}>
          <a href={'/image/img3.jpg'} className={'relative block aspect-[12/16]'}>
            <ImageUI src={'/image/img3.jpg'}/>
          </a>
          <a href={'/image/img-1.jpg'} className={'relative block aspect-[16/12]'}>
            <ImageUI src={'/image/img-1.jpg'}/>
          </a>
        </div>

        <div className={`space-y-3  ${isForIndex ? 'md:block hidden' : 'block'} `}>
          <a href={'/image/img1.jpg'} className={'relative block aspect-[16/12]'}>
            <ImageUI src={'/image/img1.jpg'}/>
          </a>
          <a href={'/image/img-3.jpg'} className={'relative block aspect-[12/16]'}>
            <ImageUI src={'/image/img-3.jpg'}/>
          </a>
        </div>
      </LightGallery>
      </div>
  );
};

export default GallerySection;


