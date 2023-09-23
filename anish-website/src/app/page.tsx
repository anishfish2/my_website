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
import art_etc from "../app/art/artetc.png";
import art_etc_label from "../app/art/art_etc_label.svg";
import reval from "../app/art/reval.png";
import reval_label from "../app/art/reval_label.svg";
import kianix from "../app/art/kianix.png";
import kianix_label from "../app/art/kianix_label.svg";
import d_bit from "../app/art/d_bit.png";
import d_bit_label from "../app/art/d_bit_label.svg";
import cognito from "../app/art/cognito.png";
import cognito_label from "../app/art/cognito_label.svg";
import puzzle_solver from "../app/art/puzzle_solver.png";
import puzzle_solver_label from "../app/art/puzzle_solver_label.svg";
import converge from "../app/art/converge.png";
import converge_label from "../app/art/converge_label.svg";
import heart2heart from "../app/art/heart2heart.png";
import heart2heart_label from "../app/art/heart2heart_label.svg";
import itsnotmeitsyou from "../app/art/itsnotyouitsme.png";
import itsnotmeitsyou_label from "../app/art/itsnotmeitsyou_label.svg";
import incognito from "../app/art/incognito.png";
import incognito_label from "../app/art/incognito_label.svg";
import course_review from "../app/art/course_review.png";
import course_review_label from "../app/art/course_review_label.svg";
import chiron from "../app/art/chiron.png";
import chiron_label from "../app/art/chiron_label.svg";
import melanoma from "../app/art/melanoma.png";
import melanoma_label from "../app/art/melanoma_label.svg";

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
          }, 4000);
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

  const [sliderRef2] = useKeenSlider<HTMLDivElement>(
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
            slider.prev();
          }, 4000);
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
            className="absolute mt-20 lg:mr-0 xl:mr-16 2xl:mr-20 3xl:mr-60 w-40 sm:w-72 md:w-96 lg:w-120 xl:w-160 2xl:w-200 h-40 sm:h-72 md:h-96 lg:h-120 xl:h-160 2xl:h-200"
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
            <div className={`text-xs lg:text-lg text-black ${inter.className}`}>
              Click and Drag to slide!
            </div>
          </div>
        </div>
        <div className={`flex flex-row justify-center items-center ${poppins600.className}`}>
          <div ref={sliderRef} className="keen-slider flex-row">
            <div className="keen-slider__slide text-black flex flex-col sm:flex-row h-1/2 gap-8 px-12 items-center justify-start">
              <div className="w-1/2">
                <Image className="relative bg-[#D9D9D9] rounded-3xl mt-40 h-1/3 sm:w-2/3 sm:ml-20 xl:ml-60" src={bytesize} alt="slide1" />
              </div>
              <div className="flex flex-col sm:w-1/2">
                <Image
                  className="-my-8 w-full"
                  src={bytesize_label}
                  alt="slide1"
                />
                <div className="flex flex-col w-full gap-4">
                  <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                    Novel video compression algorithm utilizing ASCII art
                    allowing for videos to be seen in a compressed format for HackTX 2022
                  </div>
                  <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                    Python, Pytorch, Numpy, React, Next.js, HTML/CSS, Flask,  Tailwind, AWS 
                  </div>
                  <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://devpost.com/software/bytesize"><button className="hidden md:block">devpost</button><button className="block md:hidden">devpost</button></a>
                </div>
              </div>
            </div>

            <div className="keen-slider__slide text-black flex flex-col sm:flex-row h-1/2 gap-8 px-12 items-center justify-start">
              <div className="w-1/2">
                <Image className="relative bg-[#D9D9D9] rounded-3xl mt-40 h-1/3 sm:w-1/2 sm:ml-20 xl:ml-60" src={sc2} alt="slide1" />
              </div>
              <div className="flex flex-col sm:w-1/2">
                <Image
                  className="-my-8 w-full"
                  src={sc2_label}
                  alt="slide1"
                />
                <div className="flex flex-col w-full gap-4">
                  <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-2xl text-center mx-auto w-full sm:w-2/3">
                  Implementation of NeuroEvolution of Augmenting Topologies (NEAT) using 3 models RNN: Custom Feed Forward, Delayed to test
                    implicit representations of memory in Neural Networks
                  </div>
                  <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                  Pytorch, NEAT, Numpy, Python
                  </div>
                  <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://devpost.com/software/bytesize"><button className="hidden md:block">private repo</button><button className="block md:hidden">private</button></a>
                </div>
              </div>
            </div>

            <div className="keen-slider__slide text-black flex flex-col sm:flex-row h-1/2 gap-8 px-12 items-center justify-start">
              <div className="w-1/2">
                <Image className="relative bg-[#D9D9D9] rounded-3xl mt-40  sm:w-2/3 sm:ml-20 xl:ml-60" src={fever_prediction} alt="slide1" />
              </div>
              <div className="flex flex-col sm:w-1/2">
                <Image
                  className="-my-8 w-full"
                  src={fever_prediction_label}
                  alt="slide1"
                />
                <div className="flex flex-col w-full gap-4">
                  <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-2xl text-center mx-auto w-full sm:w-2/3">
                    Fever prediction modeling, Anomaly detection, and Visualization utilizing sleep data and
                    standard ML techniques such as KNN, KMeans, and Gaussian Mixed Modeling, and normal Neural Network architectures
                  </div>
                  <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                    Python, Matplotlib, Pytorch, Seaborn, Pandas, Numpy
                  </div>
                  <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out"><button className="hidden md:block">private repo</button><button className="block md:hidden">private</button></a>
                </div>
              </div>
            </div>

            <div className="keen-slider__slide text-black flex flex-col sm:flex-row h-1/2 gap-8 px-12 items-center justify-start">
              <div className="w-1/2">
                <Image className="relative bg-[#D9D9D9] rounded-3xl mt-40  sm:w-2/3 sm:ml-20 xl:ml-60" src={aggie_bus} alt="slide1" />
              </div>
              <div className="flex flex-col sm:w-1/2">
                <Image
                  className="-my-8 w-full"
                  src={aggie_bus_label}
                  alt="slide1"
                />
                <div className="flex flex-col w-full gap-4">
                  <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-2xl text-center mx-auto w-full sm:w-2/3">
                    Mobile Bus Application for Texas A&M improving UI, Route navigation, and planning improvement using Neural Network and Linear regression
                  </div>
                  <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                    Pytorch, Pandas, Numpy, React Native, HTML/CSS
                  </div>
                  <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out"><button className="hidden md:block">private repo</button><button className="block md:hidden">private</button></a>
                </div>
              </div>
            </div>

            <div className="keen-slider__slide text-black flex flex-col sm:flex-row h-1/2 gap-8 px-12 items-center justify-start">
              <div className="w-1/2">
                <Image className="relative bg-[#D9D9D9] rounded-3xl mt-40  sm:w-2/3 sm:ml-20 xl:ml-60" src={art_etc} alt="slide1" />
              </div>
              <div className="flex flex-col sm:w-1/2">
                <Image
                  className="-my-8 w-full"
                  src={art_etc_label}
                  alt="slide1"
                />
                <div className="flex flex-col w-full gap-4">
                  <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                    Webpage for Art. Etc., a club at Texas A&M dedicated to TAMU undergraduate, graduate, and faculty to finding their creative freedoms and explore their artistic goals freely
                  </div>
                  <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                    HTML/CSS, React, Tailwind
                  </div>
                  <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://www.artetc.xyz/"><button className="hidden md:block">website</button><button className="block md:hidden">website</button></a>
                </div>
              </div>
            </div>

            <div className="keen-slider__slide text-black flex flex-col sm:flex-row h-1/2 gap-8 px-12 items-center justify-start">
              <div className="w-1/2">
                <Image className="relative bg-[#D9D9D9] rounded-3xl mt-40  sm:w-2/3 sm:ml-20 xl:ml-60" src={reval} alt="slide1" />
              </div>
              <div className="flex flex-col sm:w-1/2">
                <Image
                  className="-my-8 w-full"
                  src={reval_label}
                  alt="slide1"
                />
                <div className="flex flex-col w-full gap-4">
                  <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                    NLP based webapp using sentiment analysis and document summarization to help organizations manage their customer base for Hack UTD IX                 
                  </div>
                  <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                    HTML/CSS, React, Python, Next.js, Python, PostgreSQL, SQLAlchemy, Summa, Nltk
                  </div>
                  <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://devpost.com/software/reval"><button className="hidden md:block">devpost</button><button className="block md:hidden">devpost</button></a>
                </div>
              </div>
            </div>

            
            <div className="keen-slider__slide text-black flex flex-col sm:flex-row h-1/2 gap-8 px-12 items-center justify-start">
              <div className="w-1/2">
                <Image className="relative bg-[#D9D9D9] rounded-3xl mt-40  sm:w-2/3 sm:ml-20 xl:ml-60" src={chiron} alt="slide1" />
              </div>
              <div className="flex flex-col sm:w-1/2">
                <Image
                  className="-my-8 w-full"
                  src={chiron_label}
                  alt="slide1"
                />
                <div className="flex flex-col w-full gap-4">
                  <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                    Connecting patients in rehab to admins utiliing monitoring tools and software to help addition to ease information pipeline
                  </div>
                  <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                    Python, Django, React Bootstrap, HTML/CSS, Keras, OpenCV
                  </div>
                  <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://devpost.com/software/chiron-mdqt05"><button className="hidden md:block">devpost</button><button className="block md:hidden">devpost</button></a>
                </div>
              </div>
            </div>

            <div className="keen-slider__slide text-black flex flex-col sm:flex-row h-1/2 gap-8 px-12 items-center justify-start">
              <div className="w-1/2">
                <Image className="relative bg-[#D9D9D9] rounded-3xl mt-40  sm:w-2/3 sm:ml-20 xl:ml-60" src={incognito} alt="slide1" />
              </div>
              <div className="flex flex-col sm:w-1/2">
                <Image
                  className="-my-8 w-full"
                  src={incognito_label}
                  alt="slide1"
                />
                <div className="flex flex-col w-full gap-4">
                  <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                    Diagnosing Parkinson's disease using CV and drawing of a spiral for SigmaHacks 2.0         
                  </div>
                  <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                    Django, Bootstrap, HTML/CSS, Keras, Tensorflow
                  </div>
                  <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://devpost.com/software/incognito-awgk8c"><button className="hidden md:block">devpost</button><button className="block md:hidden">devpost</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`flex flex-row justify-center items-center ${poppins600.className}`}>
          <div ref={sliderRef2} className="keen-slider flex-row">
            <div className="keen-slider__slide text-black  h-1/2 gap-8 px-12 items-center justify-start">
              <div className="hidden sm:flex sm:flex-row items-center">
                <div className="flex flex-col sm:w-1/2">
                  <Image
                    className="-my-8 w-full"
                    src={kianix_label}
                    alt="slide1"
                  />
                  <div className="flex flex-col w-full gap-4">
                    <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                      AI Vtuber that is able to stream on Twitch.tv. Can play Dark Souls, respond to chatters, and has a working memory. 
                    </div>
                    <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                      Python, C#, MongoDB, Unity, Redis, Pytorch
                    </div>
                    <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://www.twitch.tv/anishfish"><button className="hidden md:block">twitch</button><button className="block md:hidden">twitch</button></a>
                  </div>
                </div>
                <div className="w-1/2">
                  <Image className="relative bg-[#D9D9D9] rounded-3xl sm:w-2/3 sm:ml-12 xl:ml-40" src={kianix} alt="slide1" />
                </div>
              </div>
              <div className="flex flex-col sm:hidden items-center">
                <div className="w-1/2">
                  <Image className="relative bg-[#D9D9D9]  rounded-3xl mt-20 sm:w-2/3  sm:ml-12 xl:ml-40" src={kianix} alt="slide1" />
                </div>
                <div className="flex flex-col sm:w-1/2">
                  <Image
                    className="-my-8 w-full"
                    src={kianix_label}
                    alt="slide1"
                  />
                  <div className="flex flex-col w-full gap-4">
                    <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                      AI Vtuber that is able to stream on Twitch.tv. Can play Dark Souls, respond to chatters, and has a working memory. 
                    </div>
                    <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                      Python, C#, MongoDB, Unity, Redis, Pytorch
                    </div>
                    <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://www.twitch.tv/anishfish"><button className="hidden md:block">twitch</button><button className="block md:hidden">twitch</button></a>
                  </div>
                </div>
              </div>  
            </div>

            <div className="keen-slider__slide text-black  h-1/2 gap-8 px-12 items-center justify-start">
              <div className="hidden sm:flex sm:flex-row items-center">
                <div className="flex flex-col sm:w-1/2">
                  <Image
                    className="-my-8 w-full"
                    src={d_bit_label}
                    alt="slide1"
                  />
                  <div className="flex flex-col w-full gap-4">
                    <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                      Utilize classic unsupervised & supervised ML techniques to determine optimal data drills for asteroid mining for HackTX 2022
                    </div>
                    <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                    Python, Pandas, Numpy
                    </div>
                    <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://devpost.com/software/d-day"><button className="hidden md:block">devpost</button><button className="block md:hidden">devpost</button></a>
                  </div>
                </div>
                <div className="w-1/2">
                  <Image className="relative bg-[#D9D9D9] rounded-3xl sm:w-2/3 sm:ml-12 xl:ml-40" src={d_bit} alt="slide1" />
                </div>
              </div>
              <div className="flex flex-col sm:hidden items-center">
                <div className="w-1/2">
                  <Image className="relative bg-[#D9D9D9]  rounded-3xl mt-20 sm:w-2/3  sm:ml-12 xl:ml-40" src={d_bit} alt="slide1" />
                </div>
                <div className="flex flex-col sm:w-1/2">
                  <Image
                    className="-my-8 w-full"
                    src={d_bit_label}
                    alt="slide1"
                  />
                  <div className="flex flex-col w-full gap-4">
                    <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                      Utilize classic unsupervised & supervised ML techniques to determine optimal data drills for asteroid mining for HackTX 2022 
                    </div>
                    <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                    Python, Pandas, Numpy
                    </div>
                    <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://devpost.com/software/d-day"><button className="hidden md:block">devpost</button><button className="block md:hidden">devpost</button></a>
                  </div>
                </div>
              </div>  
            </div>


            <div className="keen-slider__slide text-black  h-1/2 gap-8 px-12 items-center justify-start">
              <div className="hidden sm:flex sm:flex-row items-center">
                <div className="flex flex-col sm:w-1/2">
                  <Image
                    className="-my-8 w-full"
                    src={puzzle_solver_label}
                    alt="slide1"
                  />
                  <div className="flex flex-col w-full gap-4">
                    <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                      Neural Network implementation to unscrable sets of images into their correct orientation for Datathon 2022
                    </div>
                    <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                      Python, Tensorflow, Pandas, Numpy, Keras
                    </div>
                    <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://devpost.com/software/puzzle-solver-dk6f3p"><button className="hidden md:block">twitch</button><button className="block md:hidden">twitch</button></a>
                  </div>
                </div>
                <div className="w-1/2">
                  <Image className="relative bg-[#D9D9D9] rounded-3xl sm:w-2/3 sm:ml-12 xl:ml-40" src={puzzle_solver} alt="slide1" />
                </div>
              </div>
              <div className="flex flex-col sm:hidden items-center">
                <div className="w-1/2">
                  <Image className="relative bg-[#D9D9D9]  rounded-3xl mt-20 sm:w-2/3  sm:ml-12 xl:ml-40" src={puzzle_solver} alt="slide1" />
                </div>
                <div className="flex flex-col sm:w-1/2">
                  <Image
                    className="-my-8 w-full"
                    src={puzzle_solver_label}
                    alt="slide1"
                  />
                  <div className="flex flex-col w-full gap-4">
                    <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                      Neural Network implementation to unscrable sets of images into their correct orientation for Datathon 2022
                    </div>
                    <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                      Python, Tensorflow, Pandas, Numpy, Keras
                    </div>
                    <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://devpost.com/software/puzzle-solver-dk6f3p"><button className="hidden md:block">twitch</button><button className="block md:hidden">twitch</button></a>
                  </div>
                </div>
              </div>  
            </div>
            
            <div className="keen-slider__slide text-black  h-1/2 gap-8 px-12 items-center justify-start">
              <div className="hidden sm:flex sm:flex-row items-center">
                <div className="flex flex-col sm:w-1/2">
                  <Image
                    className="-my-8 w-full"
                    src={cognito_label}
                    alt="slide1"
                  />
                  <div className="flex flex-col w-full gap-4">
                    <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                    Using ML and a keylogger to predict Parkinsons disease for MacroHacks 2020
                    </div>
                    <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                    Python, Tensorflow, Keras
                    </div>
                    <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://devpost.com/software/cognito-bnup5t"><button className="hidden md:block">devpost</button><button className="block md:hidden">devpost</button></a>
                  </div>
                </div>
                <div className="w-1/2">
                  <Image className="relative bg-[#D9D9D9] rounded-3xl sm:w-2/3 sm:ml-12 xl:ml-40" src={cognito} alt="slide1" />
                </div>
              </div>
              <div className="flex flex-col sm:hidden items-center">
                <div className="w-1/2">
                  <Image className="relative bg-[#D9D9D9]  rounded-3xl mt-20 sm:w-2/3  sm:ml-12 xl:ml-40" src={cognito} alt="slide1" />
                </div>
                <div className="flex flex-col sm:w-1/2">
                  <Image
                    className="-my-8 w-full"
                    src={cognito_label}
                    alt="slide1"
                  />
                  <div className="flex flex-col w-full gap-4">
                    <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                    Using ML and a keylogger to predict Parkinsons disease for MacroHacks 2020
                    </div>
                    <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                    Python, Tensorflow, Keras
                    </div>
                    <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://devpost.com/software/cognito-bnup5t"><button className="hidden md:block">devpost</button><button className="block md:hidden">devpost</button></a>
                  </div>
                </div>
              </div>  
            </div>


            <div className="keen-slider__slide text-black  h-1/2 gap-8 px-12 items-center justify-start">
              <div className="hidden sm:flex sm:flex-row items-center">
                <div className="flex flex-col sm:w-1/2">
                  <Image
                    className="-my-8 w-full"
                    src={converge_label}
                    alt="slide1"
                  />
                  <div className="flex flex-col w-full gap-4">
                    <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                    Solve 3 challenges: "Beneficial Sensory Environment", "Ambiguity", and "Interactivity" using NLP and UI components into a comprehensive online classroom/discussion forum for the Nuerodivergent for DivHACK 2023
                    </div>
                    <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                    Python, Next.js, React, Prisma, Javascript, Tailwind
                    </div>
                    <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://devpost.com/software/converge-iya7s5"><button className="hidden md:block">devpost</button><button className="block md:hidden">devpost</button></a>
                  </div>
                </div>
                <div className="w-1/2">
                  <Image className="relative bg-[#D9D9D9] rounded-3xl sm:w-2/3 sm:ml-12 xl:ml-40" src={converge} alt="slide1" />
                </div>
              </div>
              <div className="flex flex-col sm:hidden items-center">
                <div className="w-1/2">
                  <Image className="relative bg-[#D9D9D9]  rounded-3xl mt-20 sm:w-2/3  sm:ml-12 xl:ml-40" src={converge} alt="slide1" />
                </div>
                <div className="flex flex-col sm:w-1/2">
                  <Image
                    className="-my-8 w-full"
                    src={converge_label}
                    alt="slide1"
                  />
                  <div className="flex flex-col w-full gap-4">
                    <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                    Solve 3 challenges: "Beneficial Sensory Environment", "Ambiguity", and "Interactivity" using NLP and UI components into a comprehensive online classroom/discussion forum for the Nuerodivergent for DivHACK 2023
                    </div>
                    <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                    Python, Next.js, React, Prisma, Javascript, Tailwind
                    </div>
                    <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://devpost.com/software/converge-iya7s5"><button className="hidden md:block">devpost</button><button className="block md:hidden">devpost</button></a>
                  </div>
                </div>
              </div>  
            </div>

            <div className="keen-slider__slide text-black  h-1/2 gap-8 px-12 items-center justify-start">
              <div className="hidden sm:flex sm:flex-row items-center">
                <div className="flex flex-col sm:w-1/2">
                  <Image
                    className="-my-8 w-full"
                    src={heart2heart_label}
                    alt="slide1"
                  />
                  <div className="flex flex-col w-full gap-4">
                    <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                    2D platformer with novel level design involving a story serving as platforms using music, game mechanics, and art from scratch for Chillenium 2023                     </div>
                    <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                    Godot, Krita                    </div>
                    <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://nitroguy10.github.io/Heart2Heart/"><button className="hidden md:block">link</button><button className="block md:hidden">link</button></a>
                  </div>
                </div>
                <div className="w-1/2">
                  <Image className="relative bg-[#D9D9D9] rounded-3xl sm:w-2/3 sm:ml-12 xl:ml-40" src={heart2heart} alt="slide1" />
                </div>
              </div>
              <div className="flex flex-col sm:hidden items-center">
                <div className="w-1/2">
                  <Image className="relative bg-[#D9D9D9]  rounded-3xl mt-20 sm:w-2/3  sm:ml-12 xl:ml-40" src={heart2heart} alt="slide1" />
                </div>
                <div className="flex flex-col sm:w-1/2">
                  <Image
                    className="-my-8 w-full"
                    src={heart2heart_label}
                    alt="slide1"
                  />
                  <div className="flex flex-col w-full gap-4">
                    <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                    2D platformer with novel level design involving a story serving as platforms using music, game mechanics, and art from scratch for Chillenium 2023                     </div>
                    <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                    Godot, Krita                    </div>
                    <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://nitroguy10.github.io/Heart2Heart/"><button className="hidden md:block">link</button><button className="block md:hidden">link</button></a>
                  </div>
                </div>
              </div>  
            </div>

            <div className="keen-slider__slide text-black  h-1/2 gap-8 px-12 items-center justify-start">
              <div className="hidden sm:flex sm:flex-row items-center">
                <div className="flex flex-col sm:w-1/2">
                  <Image
                    className="-my-8 w-full"
                    src={itsnotmeitsyou_label}
                    alt="slide1"
                  />
                  <div className="flex flex-col w-full gap-4">
                    <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                      2D pixel style game with a unique twist on the classic dating genre turning it into a thrilling battle of wits and strategy for Github Game Off 2022                   </div>
                    <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                      Godot, Krita                    
                    </div>
                    <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://oweenyin.itch.io/its-not-me-its-you"><button className="hidden md:block">link</button><button className="block md:hidden">link</button></a>
                  </div>
                </div>
                <div className="w-1/2">
                  <Image className="relative bg-[#D9D9D9] rounded-3xl sm:w-2/3 sm:ml-12 xl:ml-40" src={itsnotmeitsyou} alt="slide1" />
                </div>
              </div>
              <div className="flex flex-col sm:hidden items-center">
                <div className="w-1/2">
                  <Image className="relative bg-[#D9D9D9]  rounded-3xl mt-20 sm:w-2/3  sm:ml-12 xl:ml-40" src={itsnotmeitsyou} alt="slide1" />
                </div>
                <div className="flex flex-col sm:w-1/2">
                  <Image
                    className="-my-8 w-full"
                    src={itsnotmeitsyou_label}
                    alt="slide1"
                  />
                  <div className="flex flex-col w-full gap-4">
                    <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                      2D pixel style game with a unique twist on the classic dating genre turning it into a thrilling battle of wits and strategy for Github Game Off 2022                     </div>
                    <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                      Godot, Krita                    
                    </div>
                    <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://oweenyin.itch.io/its-not-me-its-you"><button className="hidden md:block">link</button><button className="block md:hidden">link</button></a>
                  </div>
                </div>
              </div>  
            </div>

           
            <div className="keen-slider__slide text-black  h-1/2 gap-8 px-12 items-center justify-start">
              <div className="hidden sm:flex sm:flex-row items-center">
                <div className="flex flex-col sm:w-1/2">
                  <Image
                    className="-my-8 w-full"
                    src={course_review_label}
                    alt="slide1"
                  />
                  <div className="flex flex-col w-full gap-4">
                    <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                      Crowdsourcing class reviews from different colleges and schools for Hack the Northeast                   </div>
                    <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                      Firebase, React                  </div>
                    <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://devpost.com/software/course-review"><button className="hidden md:block">link</button><button className="block md:hidden">link</button></a>
                  </div>
                </div>
                <div className="w-1/2">
                  <Image className="relative bg-[#D9D9D9] rounded-3xl sm:w-2/3 sm:ml-12 xl:ml-40" src={course_review} alt="slide1" />
                </div>
              </div>
              <div className="flex flex-col sm:hidden items-center">
                <div className="w-1/2">
                  <Image className="relative bg-[#D9D9D9]  rounded-3xl mt-20 sm:w-2/3  sm:ml-12 xl:ml-40" src={course_review} alt="slide1" />
                </div>
                <div className="flex flex-col sm:w-1/2">
                  <Image
                    className="-my-8 w-full"
                    src={course_review_label}
                    alt="slide1"
                  />
                  <div className="flex flex-col w-full gap-4">
                    <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                      Crowdsourcing class reviews from different colleges and schools for Hack the Northeast                    </div>
                    <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                      HTML/CSS, Django, Bootstrap, OpenCV
                  </div>
                    <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://devpost.com/software/course-review"><button className="hidden md:block">link</button><button className="block md:hidden">link</button></a>
                  </div>
                </div>
              </div>  
            </div>
            

            <div className="keen-slider__slide text-black  h-1/2 gap-8 px-12 items-center justify-start">
              <div className="hidden sm:flex sm:flex-row items-center">
                <div className="flex flex-col sm:w-1/2">
                  <Image
                    className="-my-8 w-full"
                    src={melanoma_label}
                    alt="slide1"
                  />
                  <div className="flex flex-col w-full gap-4">
                    <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                      Detecting Melanoma using Kaggle dataset based on user-uploaded images                  </div>
                    <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                      Firebase, React                  </div>
                    <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://devpost.com/software/melanomai-gbifmq"><button className="hidden md:block">link</button><button className="block md:hidden">link</button></a>
                  </div>
                </div>
                <div className="w-1/2">
                  <Image className="relative bg-[#D9D9D9] rounded-3xl sm:w-2/3 sm:ml-12 xl:ml-40" src={melanoma} alt="slide1" />
                </div>
              </div>
              <div className="flex flex-col sm:hidden items-center">
                <div className="w-1/2">
                  <Image className="relative bg-[#D9D9D9]  rounded-3xl mt-20 sm:w-2/3  sm:ml-12 xl:ml-40" src={melanoma} alt="slide1" />
                </div>
                <div className="flex flex-col sm:w-1/2">
                  <Image
                    className="-my-8 w-full"
                    src={melanoma_label}
                    alt="slide1"
                  />
                  <div className="flex flex-col w-full gap-4">
                    <div className="text-xxs pt-8 sm:pt-0 sm:text-xs md:text-md lg:text-md xl:text-md 2xl:text-3xl text-center mx-auto w-full sm:w-2/3">
                      Detecting Melanoma using Kaggle dataset based on user-uploaded images                    </div>
                    <div className=" text-xxs sm:text-xss md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center mx-auto">
                      HTML/CSS, Django, Bootstrap, OpenCV
                    </div>
                    <a className="bg-[#C0C0C0] flex flex-row justify-center items-center text-center rounded-3xl text-blue sm:pl-4 sm:pr-4 mx-auto text-xxs md:text-xs lg:text-sm  w-2/3 hover:bg-black hover:text-white transition duration-300 ease-in-out" href="https://devpost.com/software/melanomai-gbifmq"><button className="hidden md:block">link</button><button className="block md:hidden">link</button></a>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
