import Image from 'next/image'
import { Poppins } from 'next/font/google'
import koi1 from '../app/art/koi1.png'; 
import bambooLeft1 from '../app/art/bamboo left.png'
import bambooRight1 from '../app/art/bamboo right.png'
import toplines from '../app/art/3 lines.png'
import line1 from '../app/art/line_vector.png'
import circle1 from '../app/art/Ellipse 1.png'

const poppins200 = Poppins({ weight: '200', subsets: ['latin'] })
const poppins300 = Poppins({ weight: '300', subsets: ['latin'] })
const poppins500 = Poppins({ weight: '500', subsets: ['latin'] })
const poppins400 = Poppins({ weight: '400', subsets: ['latin'] })
const poppins600 = Poppins({ weight: '600', subsets: ['latin'] })
const poppins700 = Poppins({ weight: '700', subsets: ['latin'] })
const poppins800 = Poppins({ weight: '800', subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`w-auto height-auto overflow-x-auto bg-[#D9D9D9] ${poppins600.className}`}>
      <div className="z-0 relative width-full flex flex-row justify-end">
        <Image className="absolute bg-[#D9D9D9] width-1/3 sm:width-1/3 md:width-1/3 lg:width-1/3 xl:width-1/3 2xl:width-1/3" src={bambooRight1} alt="bambooRight1"></Image>
      </div>
      <div className="z-1 relative width-full flex flex-row justify-start">
        <Image className="absolute bg-[#D9D9D9]" src={line1} alt="line1"></Image>
      </div>
      <div className="z-1 relative width-full flex flex-row justify-start items-center mt-24 mr-2  pt-12 gap-12 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 text-black text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl">
          <Image className="ml-32" src={toplines} alt="toplines"></Image>
          <a>about me</a>
          <a>my projects</a>
          <a>contact</a>
      </div>
      <div className="z-2 pt-32 ml-32 relative">
        <div className="z-0 h-12 abosolute width-full flex flex-row justify-end pr-32">
            <Image className="absolute" src={koi1} alt="koi1"></Image>
        </div>
        <div className={`z-1 relative text-black text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl${poppins700.className}`}>ANISH</div>
        <div className={`z-1 relative text-black text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl${poppins700.className}`}>KARTHIK</div>
        <div className={`z-1 relative text-black text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl 2xl:text-4xl w-2/5 ${poppins200.className}`}>
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
        </div>
      </div>
      <div className="z-0 relative pt-40">
        <Image className="absolute pt-20" src={circle1} alt="circle1"></Image>
        <Image className="absolute" src={bambooLeft1} alt="bambooLeft1"></Image>
      </div>
      </div>
  )
}
