'use client'
import {SectionUI} from "@/components";
import {FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";
import {IoMail} from "react-icons/io5";
import {langSelect} from "@/helper";
import {useSelector} from "react-redux";

const ContactContent = ({contact}) => {
  const {lang} = useSelector(state => state.langSlice)

  return (
      <SectionUI title={"Наши контакты"} isEmbroidery={true}>
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center mb-10">
            <div  className="gap-1 md:gap-4 flex flex-col items-center text-lg text-text font-jost font-normal group">
              <FaMapMarkerAlt className={'text-xl md:text-3xl group-hover:text-currentBlue group-hover:text-currentBlue/90 duration-200'} />
              <span className="address "> {langSelect(lang ,contact?.address_ru , contact?.address_en ,contact?.address_uz )} </span>
            </div>
            <a href={`tel:${contact?.phone}`}
               className="gap-1 md:gap-4 flex flex-col items-center text-lg text-text font-jost font-normal group">
              <FaPhoneAlt className={'text-xl md:text-3xl group-hover:text-currentBlue group-hover:text-currentBlue/90 duration-200'} />
              <div className="flex flex-col ">
                <span>{contact?.phone}</span>

              </div>
            </a>
            <a href={`mailto:${contact?.email}`} target="_blank"
               className="gap-1 md:gap-4 flex flex-col items-center text-lg text-text font-jost font-normal group">
              <IoMail className={'text-xl md:text-3xl group-hover:text-currentBlue group-hover:text-currentBlue/90 duration-200'} />
              <span className="">{contact?.email}</span>
            </a>
          </div>
          <div
              className="w-full md:w-1/2 border-t-[1px] border-light text-first font-jost font-medium gap-6 md:gap-10 flex pt-5 md:pt-10 justify-center text-lg sm:text-xl">
            <a href={`${contact?.facebook}`} target="_blank" className={'hover:text-currentBlue'}>Facebook</a>
            <a href={`${contact?.instagram}`} target="_blank"  className={'hover:text-currentBlue'}>Instagram</a>
            <a href={`${contact?.telegram}`} target="_blank"  className={'hover:text-currentBlue'}>Telegram</a>
          </div>
        </div>
        <section className="mb-10 md:mb-20 mt-5 md:mt-10">
          <div className="container">
            <iframe className="w-full  aspect-[12/10] md:aspect-[12/4]"
                    src={`${contact?.map}`}
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>
      </SectionUI>
  );
};

export default ContactContent;