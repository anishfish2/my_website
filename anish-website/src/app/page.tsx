import Image from 'next/image'
import { Poppins } from 'next/font/google'
import line2Image from '../app/art/line2.png'; 
import bdaytext from '../app/art/bdaytext.png'
import koiB from '../app/art/koi_B.png'
import koiC from '../app/art/koi_C.png'
import blueKoi from '../app/art/blueKoi.png'
import star1 from '../app/art/Star 1.png'
import star2 from '../app/art/Star 2.png'
import star3 from '../app/art/Star 3.png'
import star4 from '../app/art/Star 4.png'

const poppins200 = Poppins({ weight: '200', subsets: ['latin'] })
const poppins300 = Poppins({ weight: '300', subsets: ['latin'] })
const poppins500 = Poppins({ weight: '500', subsets: ['latin'] })
const poppins400 = Poppins({ weight: '400', subsets: ['latin'] })
const poppins600 = Poppins({ weight: '600', subsets: ['latin'] })
const poppins700 = Poppins({ weight: '700', subsets: ['latin'] })
const poppins800 = Poppins({ weight: '800', subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`w-auto height-auto overflow-x-auto bg-[#FFFFFF] ${poppins600.className}`}>
      <div className="z-3 relative">
        <Image className="z-3 w-full absolute" src={line2Image} alt="line2"></Image>
        <Image className="z-3 w-1/4 sm:w-1/3 md:w-1/3 lg:w-1/3 xt:w-1/2 mt-20 sm:mt-20 md:mt-20 lg:mt-12 xt:ml-40 absolute"src={koiB} alt="koiB"></Image>
      </div>
      <div className="flex flex-row justify-end items-center mr-2 sm:mr-12 md:mr-16 lg:mr-20 xl:mr-24 pt-12 gap-12 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 text-[#0541D7] text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <a>about me</a>
          <a>my projects</a>
          <a>contact</a>
      </div>
      {/* <div className='z-2 flex flex-row justify-end'>
        <Image className="w-1/3 h-72" src={bdaytext} alt="bdaytext"></Image>
      </div> */}
      <div className="flex flex-row justify-end">
        <Image className="z-3 w-1/2 h-1/2 pt-4 -mt-10 -mb-40 relative"src={koiC} alt="koiC"></Image>
      </div>
      {/* <div className="relative h-0">
        <Image className="z-3 w-1/12 mt-96 absolute" src={star1} alt="star1"></Image>
      </div> */}
      {/* <div className="relative flex flex-row justify-center">
        <Image className="z-3 w-1/12 mr-32 absolute" src={star2} alt="star2"></Image>
      </div> */}
      <div className={`text-[#000000] relative mt-20 sm:mt-12 md:mt-32 lg:mt-20 xl:-mt-8 ml-12 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20 text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-8xl ${poppins700.className}`}>
        <div>Anish</div>
        <div className="pl-8 sm:pl-4 md:pl-20 lg:pl-24 xl:pl-32 pt-2">Karthik</div>
      </div>
      <div className="z-1 w-1/2 text-[#000000] ml-20 sm:ml-60 md:ml-32 lg:ml-60 xl:ml-96 mt-20">
        <div className={`text-2xl sm:text-xl md:text-5xl lg:text-4xl xl:text-5xl   ${poppins700.className}`}>Hi I'm Anish.</div>
        <div className={`text-sm sm:text-lg md:text-lg lg:text-lg xl:text-2xl  mt-12 ${poppins300.className}`}>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello</div>
        <div className={`text-sm sm:text-lg md:text-lg lg:text-lg xl:text-2xl  mt-12 ${poppins300.className}`}>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello</div>
        {/* <div className="z-5 relative h-0 flex flex-row justify-end">
          <Image className="z-3 w-1/12 -mr-32 -mt-60 absolute" src={star4} alt="star4"></Image>
        </div> */}
      </div>
      {/* <div className="relative h-0 flex flex-row justify-center">
        <Image className="z-3 w-4 h-4 mt-20 mr-32 absolute" src={star3} alt="star3"></Image>
      </div> */}
      

      <div className="z-0 overflow-hidden relative w-full">
        <Image className="z-0 ml-20 sm:ml-60 md:ml-60 lg:ml-82 xl:ml-96 2xl:ml-300 -mt-20 sm:-mt-32 md:-mt-40 lg:-mt-56 xl:-mt-96" src={blueKoi} alt="blue koi"></Image>
      </div>
    </div>
  )
}
