import Image from 'next/image'
import { Poppins } from 'next/font/google'
import line1Image from '../app/art/line1.png'; 
import blueblob1Image from '../app/art/blueblob1.png'

const poppins200 = Poppins({ weight: '200', subsets: ['latin'] })
const poppins300 = Poppins({ weight: '300', subsets: ['latin'] })
const poppins500 = Poppins({ weight: '500', subsets: ['latin'] })
const poppins400 = Poppins({ weight: '400', subsets: ['latin'] })
const poppins600 = Poppins({ weight: '600', subsets: ['latin'] })
const poppins700 = Poppins({ weight: '700', subsets: ['latin'] })
const poppins800 = Poppins({ weight: '800', subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`width-full height-auto bg-[#FFFFFF] ${poppins600.className}`}>
      <div className="absolute">
        <Image src={line1Image} alt="line1"></Image>
      </div>
      <div className="flex flex-row justify-end items-center mr-16 pt-12 gap-24 text-[#0541D7] text-3xl">
          <a>about me</a>
          <a>my projects</a>
          <a>contact</a>
      </div>
      <div className={`text-[#000000] ml-36 mt-60 text-9xl ${poppins700.className}`}>
        <div>Anish</div>
        <div className="pl-60 pt-4">Karthik</div>
      </div>
      <div className="w-1/4 text-[#000000] ml-72 mt-32">
        <div className={`text-4xl ${poppins700.className}`}>Hi I'm Anish Karthik.</div>
        <div className={`text-2xl mt-12 ${poppins300.className}`}>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello</div>
        <div className={`text-2xl mt-12 ${poppins300.className}`}>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello</div>
      </div>
      <div className="absolute">
        <Image src={blueblob1Image} alt="blue blob 1"></Image>
      </div>
    </div>
  )
}
