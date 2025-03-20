import Image from "next/image";
import studySpotrBG from "../../assets/STUDYSPOTrBG.png";
import SFURSBG from "../../assets/SFURSBG.png";
import FLASHCARDSAI from "../../assets/FLASHCARDSAIBG.png";
import sfurs1 from "../../assets/sfurs1.png";
import sfurs2 from "../../assets/sfurs2.png";
import flash1 from "../../assets/flash1.png";
import flash2 from "../../assets/flash2.png";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

export default function WhoWeHaveHelped() {
  return (
    <div className="w-full h-max bg-black py-20">
      <h2 className="text-white text-xl md:text-4xl mx-auto md:w-1/2 leading-snug text-center poppins-regular">
        We've helped teams achieve their goals quickly and complete tasks
        efficiently.
      </h2>
      <p className="text-white mt-4 text-sm text-center md:text-base poppins-light mb-8">
        Here are some of the projects we've worked on.
      </p>
      <div className="w-3/4 mx-auto p-4 border border-transparent hover:border-white/10 transition-all duration-500 flex bg-gradient-to-t from-[#000000] to-[#191919] rounded-3xl flex-col md:flex-row">
        <div className="w-full md:w-1/2 aspect-[4/3] relative">
          <Image
            src={SFURSBG}
            alt="Project 1"
            className="rounded-2xl object-cover"
            fill
          />
        </div>
        <div className="w-full md:w-1/2 px-6 flex flex-col justify-center">
          <div className="w-full flex flex-col">
            <h3 className="text-white text-xl md:text-3xl poppins-regular">
              SFU Robot Soccer Club
            </h3>
            <p className="text-white text-sm md:text-base poppins-light">
              Website design and development for SFU Robot Soccer Club.
            </p>

            <div className="flex flex-row gap-3 items-end mt-4">
              <p className="text-white text-sm md:text-7xl poppins-regular">
                15%
              </p>
              <p className="text-white text-sm w-full md:text-base poppins-light pb-1.5">
                increase in traffic
              </p>
            </div>
            <div className="w-full h-0.5 bg-white/5 mt-4"></div>
            <div className="flex flex-row gap-3 items-end mt-4">
              <p className="text-white text-sm md:text-7xl poppins-regular">
                25%
              </p>
              <p className="text-white text-sm w-full md:text-base poppins-light pb-1.5">
                reduced bounce rate
              </p>
            </div>
            <button className="bg-blue-600 w-max text-white px-4 xl:px-5 group poppins-regular text-xs xl:text-sm py-2 xl:py-3 rounded-full mt-6  hover:text-black transition-all duration-500 hover:bg-white">
              View Full Case Study{" "}
              <FiArrowRight className="inline-block rotate-0 group-hover:-rotate-45 transition-all duration-500" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-3/4 mx-auto p-4 border border-transparent hover:border-white/10 transition-all duration-500 flex bg-gradient-to-t from-[#000000] to-[#191919] rounded-3xl flex-col md:flex-row">
        <div className="w-full md:w-1/2 aspect-[4/3] relative">
          <Image
            src={FLASHCARDSAI}
            alt="Project 1"
            className="rounded-2xl object-cover"
            fill
          />
        </div>
        <div className="w-full md:w-1/2 px-6 flex flex-col justify-center">
          <div className="w-full flex flex-col">
            <h3 className="text-white text-xl md:text-3xl poppins-regular">
              Flashcards AI
            </h3>
            <p className="text-white text-sm md:text-base poppins-light mt-2">
              AI Flashcard generation and review tool for students.
            </p>

            <div className="flex flex-row gap-3 items-end mt-4">
              <p className="text-white text-sm md:text-7xl poppins-regular">
                45%
              </p>
              <p className="text-white text-sm w-full md:text-base poppins-light pb-1.5">
                decrease in time spent on creating flashcards
              </p>
            </div>
            <div className="w-full h-0.5 bg-white/5 mt-4"></div>
            <div className="flex flex-row gap-3 items-end mt-4">
              <p className="text-white text-sm md:text-7xl poppins-regular">
                20+
              </p>
              <p className="text-white text-sm w-full md:text-base poppins-light pb-1.5">
                active student users
              </p>
            </div>
            <button className="bg-blue-600 w-max text-white px-4 xl:px-5 group poppins-regular text-xs xl:text-sm py-2 xl:py-3 rounded-full mt-6  hover:text-black transition-all duration-500 hover:bg-white">
              View Full Case Study{" "}
              <FiArrowRight className="inline-block rotate-0 group-hover:-rotate-45 transition-all duration-500" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-3/4 mx-auto p-4 border border-transparent hover:border-white/10 transition-all duration-500 flex bg-gradient-to-t from-[#000000] to-[#191919] rounded-3xl flex-col md:flex-row">
        <div className="w-full md:w-1/2 aspect-[4/3] relative">
          <Image
            src={studySpotrBG}
            alt="Project 1"
            className="rounded-2xl object-cover"
            fill
          />
        </div>
        <div className="w-full md:w-1/2 px-6 flex flex-col justify-center">
          <div className="w-full flex flex-col">
            <h3 className="text-white text-xl md:text-3xl poppins-regular">
              StudySpotr
            </h3>
            <p className="text-white text-sm md:text-base poppins-light mt-2">
              A platform for students to find the perfect study spot on campus.
            </p>

            <div className="flex flex-row gap-3 items-end mt-4">
              <p className="text-white text-sm md:text-7xl poppins-regular">
                100+
              </p>
              <p className="text-white text-sm w-full md:text-base poppins-light pb-1.5">
                active student users
              </p>
            </div>
            <div className="w-full h-0.5 bg-white/5 mt-4"></div>
            <div className="flex flex-row gap-3 items-end mt-4">
              <p className="text-white text-sm md:text-7xl poppins-regular">
                20+
              </p>
              <p className="text-white text-sm w-full md:text-base poppins-light pb-1.5">
                active student users
              </p>
            </div>
            <button className="bg-blue-600 w-max text-white px-4 xl:px-5 group poppins-regular text-xs xl:text-sm py-2 xl:py-3 rounded-full mt-6  hover:text-black transition-all duration-500 hover:bg-white">
              View Full Case Study{" "}
              <FiArrowRight className="inline-block rotate-0 group-hover:-rotate-45 transition-all duration-500" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-3/4 mx-auto flex flex-row h-max mt-10 pb-10 items-center gap-4">
        <div className="w-full h-0.5 bg-white/20"></div>
        <button className="text-white w-max whitespace-nowrap group text-base poppins-light relative">
          <span className="relative">
            View All Case Studies{" "}
            <FiArrowRight className="inline-block rotate-0 group-hover:-rotate-45 transition-all duration-500" />
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </button>
      </div>
    </div>
  );
}
