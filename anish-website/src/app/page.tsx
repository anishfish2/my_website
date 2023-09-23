"use client";
import Image from "next/image";
import { Bakbak_One, Inter, Poppins } from "next/font/google";
import koi1 from "../app/art/koi1.png";
import bambooLeft1 from "../app/art/bamboo left.png";
import bambooRight1 from "../app/art/bamboo right.png";
// import toplines from '../app/art/3 lines.png'
import line1 from "../app/art/line_vector.png";
import circle1 from "../app/art/Ellipse 1.png";
import bambooRight2 from "../app/art/bamboo1.png";
import bytesize_label from "../app/art/bytesize_label.svg";
import bytesize from "../app/art/bytesize.png";
import sc2 from "../app/art/sc2.png";
import sc2_label from "../app/art/sc2_label.svg";
import fever_prediction from "../app/art/fever_prediction.png";
import fever_prediction_label from "../app/art/fever_prediction_label.svg";
import aggie_bus from "../app/art/aggie_bus.png";
import aggie_bus_label from "../app/art/aggie_bus_label.svg";
import Head from "next/head";

import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const poppins200 = Poppins({ weight: "200", subsets: ["latin"] });
const poppins300 = Poppins({ weight: "300", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });
const poppins400 = Poppins({ weight: "400", subsets: ["latin"] });
const poppins600 = Poppins({ weight: "600", subsets: ["latin"] });
const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins800 = Poppins({ weight: "800", subsets: ["latin"] });

const bakbak = Bakbak_One({ weight: "400", subsets: ["latin"] });

const inter = Inter({ weight: "200", subsets: ["latin"] });

export default function Home() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 8000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div
      className={`w-auto h-auto overflow-x-auto bg-[#D9D9D9] ${poppins600.className}`}
    >
      <div className="z-3 relative overflow-visible w-full flex flex-row justify-end ">
        <Image
          className="z-4 absolute bg-[#D9D9D9] w-52 sm:w-72 md:w-72 lg:w-80 xl:w-140 2xl:w-200 h-52 sm:h-72 md:h-72 lg:h-80 xl:h-140 2xl:h-200"
          src={bambooRight1}
          alt="bambooRight1"
        ></Image>
      </div>
      <div className="z-0 relative width-full flex flex-row justify-start">
        <Image
          className="z-0 invisible lg:visible w-20 sm:w-40 md:w-52 lg:w-72 xl:w-72 2xl:w-96 mr-8 absolute"
          src={line1}
          alt="line1"
        ></Image>
      </div>
      <div className="z-1 relative width-full flex flex-row justify-start items-center mt-24 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32 2xl:mt-60 ml-8 sm:ml-20 md:ml-16 lg:ml-32 xl:ml-32 2xl:ml-44 gap-2 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 text-black text-xs sm:text-md md:text-lg lg:text-lg xl:text-xl 2xl:text-4xl">
        {/* <Image className="ml-8 sm:ml-12 md:ml-20 lg:ml-28 xl:ml-32 w-12 sm:w-12 md:w-12 lg:w-12 xl:w-12 2xl:w-12 h-12 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-312" src={toplines} alt="toplines"></Image> */}
        <a>about me</a>
        <a>my projects</a>
        <a>contact</a>
      </div>
      <div className="z-2 relative">
        <div className="z-0 abosolute width-full flex flex-row justify-end">
          <Image
            className="absolute mt-20 lg:mr-0 xl:mr-20 2xl:mr-96 w-40 sm:w-72 md:w-96 lg:w-120 xl:w-160 2xl:w-200 h-40 sm:h-72 md:h-96 lg:h-120 xl:h-160 2xl:h-200"
            src={koi1}
            alt="koi1"
          ></Image>
        </div>
        <div
          className={`z-1 relative mt-12 md:mt-32 ml-8 sm:ml-12 md:ml-16 lg:ml-28 xl:ml-32 2xl:ml-44 text-black text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl${poppins700.className}`}
        >
          ANISH
        </div>
        <div
          className={`z-1 relative ml-8 sm:ml-12 md:ml-16 lg:ml-28 xl:ml-32 2xl:ml-44 text-black text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl${poppins700.className}`}
        >
          KARTHIK
        </div>
        <div
          className={`z-1 relative ml-8 sm:ml-12 md:ml-16 lg:ml-28 xl:ml-32 2xl:ml-44 text-black text-xs sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-4xl w-2/5 ${poppins200.className}`}
        >
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah
        </div>
      </div>
      <div className="z-2 relative xl:pt-40">
        <Image className="absolute pt-20" src={circle1} alt="circle1"></Image>
        <Image className="absolute" src={bambooLeft1} alt="bambooLeft1"></Image>
      </div>
      <div className="z-1 mt-40 lg:mt-120 relative bg-[#FFFFFF]/50">
        <div className="z-0 relative -translate-y-32 overflow-visible w-full flex flex-row justify-end ">
          <Image
            className="z-4 absolute w-72 sm:w-80 md:w-96 lg:w-96 xl:w-140 2xl:w-200 h-72 sm:h-80 md:h-96 lg:h-96 xl:h-140 2xl:h-200 md:-mt-8 lg:-mt-8 xl:-mt-32 2xl:-mt-52"
            src={bambooRight2}
            alt="bambooRight1"
          ></Image>
        </div>
        <div className="z-1 relative flex flex-row justify-start">
          <div
            className={`text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl mt-20 ml-8 text-black ${bakbak.className}`}
          >
            LATEST PROJECTS
            <div className={`text-xs text-black ${inter.className}`}>
              Click and Drag to slide!
            </div>
          </div>
        </div>
        <div
          className={`flex flex-row justify-center items-center ${poppins600.className}`}
        >
          <div ref={sliderRef} className="keen-slider flex-row">
            <div className="keen-slider__slide text-black flex flex-col sm:flex-row h-1/2 gap-8 px-12 items-center justify-start">
              <div className="w-1/2">
                <Image className="relative bg-[#D9D9D9] rounded-3xl pb-10" src={bytesize} alt="slide1" />
              </div>
              <div className="flex flex-col w-1/2">
                <Image
                  className="-my-8 w-full"
                  src={bytesize_label}
                  alt="slide1"
                />
                <div className="flex flex-col w-full gap-4">
                  <div className="text-xs sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto">
                    Novel video compression algorithm utilizing ASCII art
                    allowing for videos to be seen in a compressed format.
                  </div>
                  <div className=" text-xss sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                    Python, React, HTML/CSS, Flask, Pytorch, Numpy
                  </div>
                  <div className="bg-[#C0C0C0] text-center rounded-3xl"><a href="https://devpost.com/software/bytesize">https://devpost.com/software/bytesize</a></div>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide text-black flex flex-col sm:flex-row h-1/2 gap-8 px-12 items-center justify-start">
              <div className="w-1/2">
                <Image className="relative bg-[#D9D9D9] rounded-3xl pb-10" src={sc2} alt="slide1" />
              </div>
              <div className="flex flex-col w-1/2">
                <Image
                  className="-my-8 w-full"
                  src={sc2_label}
                  alt="slide1"
                />
                <div className="flex flex-col w-full gap-4">
                  <div className="text-xs sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto">
                    Implementation of NeuroEvolution of Augmenting Topologies (NEAT) using 3 models RNN, Custom Feed Forward, Delayed 
                    testing memory in Neural Networks
                  </div>
                  <div className=" text-xss sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                    Pytorch, NEAT, Numpy, Python
                  </div>
                  <div className="bg-[#C0C0C0] text-center rounded-3xl"><a>(Private Research)</a></div>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide text-black flex flex-col sm:flex-row h-1/2 gap-8 px-12 items-center justify-start">
              <div className="w-1/2">
                <Image className="relative bg-[#D9D9D9] rounded-3xl pb-10" src={fever_prediction_label} alt="slide1" />
              </div>
              <div className="flex flex-col w-1/2">
                <Image
                  className="-my-8 w-full"
                  src={fever_prediction}
                  alt="slide1"
                />
                <div className="flex flex-col w-full gap-4">
                  <div className="text-xs sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto">
                    Fever prediction modeling, Anomaly detection, and Visualization utilizing sleep data and
                    standard ML techniques such as KNN, KMeans, and Gaussian Mixed Modeling, and normal Neural Network architectures
                  </div>
                  <div className=" text-xss sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                    Python, Matplotlib, Pytorch, Seaborn, Pandas, Numpy
                  </div>
                  <div className="bg-[#C0C0C0] text-center rounded-3xl"><a>(Private Research)</a></div>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide text-black flex flex-col sm:flex-row h-1/2 gap-8 px-12 items-center justify-start">
              <div className="w-1/2">
                <Image className="relative bg-[#D9D9D9] rounded-3xl pb-10" src={aggie_bus} alt="slide1" />
              </div>
              <div className="flex flex-col w-1/2">
                <Image
                  className="-my-8 w-full"
                  src={aggie_bus_label}
                  alt="slide1"
                />
                <div className="flex flex-col w-full gap-4">
                  <div className="text-xs sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto">
                    Mobile Bus Application for Texas A&M improving UI, Route navigation, and planning improvement using Neural Network and Linear regression
                  </div>
                  <div className=" text-xss sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                    Pytorch, Pandas, Numpy, React Native, HTML/CSS
                  </div>
                  <div className="bg-[#C0C0C0] text-center rounded-3xl"><a>(Private Codebase)</a></div>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide text-black flex flex-col sm:flex-row h-1/2 gap-8 px-12 items-center justify-start">
              <div className="w-1/2">
                <Image className="relative bg-[#D9D9D9] rounded-3xl pb-10" src={aggie_bus} alt="slide1" />
              </div>
              <div className="flex flex-col w-1/2">
                <Image
                  className="-my-8 w-full"
                  src={aggie_bus_label}
                  alt="slide1"
                />
                <div className="flex flex-col w-full gap-4">
                  <div className="text-xs sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto">
                    Website for Texas A&M Art Etc. club
                  </div>
                  <div className=" text-xss sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                    HTML/CSS, Next.js, Tailwind
                  </div>
                  <div className="bg-[#C0C0C0] text-center rounded-3xl"><a>(Private Codebase)</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
