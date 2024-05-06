import {  ImageUI ,HeaderBooking} from "@/components";
// HeaderBooking
const Header = ({home}) => {
  return (
      <>
        <header className='relative w-full h-screen'>
          <div className={`w-full h-full relative`}>
            <ImageUI src={'/image/img1.jpg'} alt={'banner'} priority={true}
                     imageStyle={'object-center'}
                     card={false}/>

          </div>
          {/*<Slider  isHeader={true}   PaginationMod={false} priority={true}  />*/}
          {/*<HeaderBooking />*/}
        </header>
      </>
  )
}

export default Header