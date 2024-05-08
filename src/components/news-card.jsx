import Link from "next/link";
import {ImageUI} from "@/components/";

const NewsCard = () => {
  return (


      <div className="bg-white  border-currentBlue  border p-2 group duration-75 hover:shadow-currentBlue/40 cursor-pointer ">
        <div className={` relative duration-75 -mt-5  before:content-[''] group-hover:before:top-[0] before:duration-150  before:absolute before:w-[90%] before:h-[90%] before:-top-[5%] before:left-[5%]   before:border before:border-currentBlue group-hover:shadow-md`} >
          <div className={'w-full h-full p-1 aspect-video relative overflow-hidden'}>
          <ImageUI src={'/image/img2.jpg'} alt={'banner'}  imageStyle={'group-hover:scale-125 group-hover:duration-300'} />

          </div>
        </div>
        <div className="p-4 space-y-3">
            <h5 className="mb-2  tracking-tight font-jost  line-clamp-2 text-base md:text-xl font-medium text-currentBlue">Noteworthy technology
              acquisitions 2021</h5>
          <p className="mb-3 font-normal text-currentBlack font-jost  line-clamp-2 md:line-clamp-3 text-sm md:text-base">Here are the biggest enterprise technology
            acquisitions of 2021 so far, in reverse chronological order.</p>
          <Link href="#"
             className="inline-flex items-center  underline font-jost">
            Read more
          </Link>
        </div>
      </div>

  );
};

export default NewsCard;