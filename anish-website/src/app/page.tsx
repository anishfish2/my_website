import Image from 'next/image'
import { Bakbak_One, Poppins } from 'next/font/google'
import koi1 from '../app/art/koi1.png'; 
import bambooLeft1 from '../app/art/bamboo left.png'
import bambooRight1 from '../app/art/bamboo right.png'
// import toplines from '../app/art/3 lines.png'
import line1 from '../app/art/line_vector.png'
import circle1 from '../app/art/Ellipse 1.png'
import bambooRight2 from '../app/art/bamboo1.png'

const poppins200 = Poppins({ weight: '200', subsets: ['latin'] })
const poppins300 = Poppins({ weight: '300', subsets: ['latin'] })
const poppins500 = Poppins({ weight: '500', subsets: ['latin'] })
const poppins400 = Poppins({ weight: '400', subsets: ['latin'] })
const poppins600 = Poppins({ weight: '600', subsets: ['latin'] })
const poppins700 = Poppins({ weight: '700', subsets: ['latin'] })
const poppins800 = Poppins({ weight: '800', subsets: ['latin'] })

const bakbak = Bakbak_One({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`w-auto h-auto overflow-x-auto bg-[#D9D9D9] ${poppins600.className}`}>
      <div className="z-3 relative overflow-visible w-full flex flex-row justify-end ">
        <Image className="z-4 absolute bg-[#D9D9D9] w-52 sm:w-72 md:w-72 lg:w-80 xl:w-140 2xl:w-200 h-52 sm:h-72 md:h-72 lg:h-80 xl:h-140 2xl:h-200" src={bambooRight1} alt="bambooRight1"></Image>
      </div>
      <div className="z-0 relative width-full flex flex-row justify-start">
        <Image className="z-0 invisible lg:visible w-20 sm:w-40 md:w-52 lg:w-72 xl:w-72 2xl:w-96 mr-8 absolute" src={line1} alt="line1"></Image>
      </div>
      <div className="z-1 relative width-full flex flex-row justify-start items-center mt-24 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32 2xl:mt-60 ml-8 sm:ml-20 md:ml-16 lg:ml-32 xl:ml-32 2xl:ml-44 gap-2 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 text-black text-xs sm:text-md md:text-lg lg:text-lg xl:text-xl 2xl:text-4xl">
          {/* <Image className="ml-8 sm:ml-12 md:ml-20 lg:ml-28 xl:ml-32 w-12 sm:w-12 md:w-12 lg:w-12 xl:w-12 2xl:w-12 h-12 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-312" src={toplines} alt="toplines"></Image> */}
          <a>about me</a>
          <a>my projects</a>
          <a>contact</a>
      </div>
      <div className="z-2 relative">
        <div className="z-0 abosolute width-full flex flex-row justify-end">
            <Image className="absolute mt-20 lg:mr-0 xl:mr-20 2xl:mr-96 w-40 sm:w-72 md:w-96 lg:w-120 xl:w-160 2xl:w-200 h-40 sm:h-72 md:h-96 lg:h-120 xl:h-160 2xl:h-200" src={koi1} alt="koi1"></Image>
        </div>
        <div className={`z-1 relative mt-12 md:mt-32 ml-8 sm:ml-12 md:ml-16 lg:ml-28 xl:ml-32 2xl:ml-44 text-black text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl${poppins700.className}`}>ANISH</div>
        <div className={`z-1 relative ml-8 sm:ml-12 md:ml-16 lg:ml-28 xl:ml-32 2xl:ml-44 text-black text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl${poppins700.className}`}>KARTHIK</div>
        <div className={`z-1 relative ml-8 sm:ml-12 md:ml-16 lg:ml-28 xl:ml-32 2xl:ml-44 text-black text-xs sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-4xl w-2/5 ${poppins200.className}`}>
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
        </div>
      </div>
      <div className="z-2 relative pt-40">
        <Image className="absolute pt-20" src={circle1} alt="circle1"></Image>
        <Image className="absolute" src={bambooLeft1} alt="bambooLeft1"></Image>
      </div>
      <div className="z-1 mt-120 relative bg-[#FFFFFF]/50">
        <div className="z-0 relative -translate-y-32 overflow-visible w-full flex flex-row justify-end ">
          <Image className="z-4 absolute w-72 sm:w-80 md:w-96 lg:w-96 xl:w-140 2xl:w-200 h-72 sm:h-80 md:h-96 lg:h-96 xl:h-140 2xl:h-200 md:-mt-8 lg:-mt-8 xl:-mt-32 2xl:-mt-52" src={bambooRight2} alt="bambooRight1"></Image>
        </div>
        <div className="z-1 relative flex flex-row justify-around">
          <div className={`mt-96 text-5xl text-black ${bakbak.className}`}> 
            LATEST PROJECTS
          </div>
          <div className="flex flex row justify-around">
          
          </div>
        </div>
      </div>
    </div>
  )
}
