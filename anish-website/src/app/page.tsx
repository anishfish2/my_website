import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins600 = Poppins({ weight: '600', subsets: ['latin'] })
const poppins800 = Poppins({ weight: '800', subsets: ['latin'] })
const poppins300 = Poppins({ weight: '300', subsets: ['latin'] })
const poppins400 = Poppins({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`width-full height-auto bg-[#FFFFFF] ${poppins600.className}`}>
      <div className="flex flex-row justify-end items-center mr-16 pt-12 gap-24 text-[#0541D7] text-3xl">
          <a>about me</a>
          <a>my projects</a>
          <a>contact</a>
      </div>
      <div className={`text-[#000000] ml-36 mt-60 text-8xl ${poppins800.className}`}>
        <div>Anish</div>
        <div className="pl-36 pt-8">Karthik</div>
      </div>
      <div className="w-1/3 text-[#000000] ml-72 mt-12">
        <div className={`text-2xl ${poppins400.className}`}>Hi I'm Anish Karthik</div>
        <div className={`text-xl ${poppins300.className}`}>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello</div>
      </div>
    </div>
  )
}
