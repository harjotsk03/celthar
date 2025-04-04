import hero from "../../assets/codeipad.png";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="w-full h-max py-52 flex flex-col items-center justify-center bg-[#E5E5E5] fade-in-down">
      <div className="w-full h-full flex flex-col items-center justify-between lg:px-60">
        <div className="w-full flex text-center flex-col gap-6">
          <h1 className="text-black text-6xl leading-tight poppins-semibold">
            We collaborate with you so you can deliver exceptional{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text">
              user experiences.
            </span>
          </h1>
          <p className="text-black/50 text-center mx-auto text-base poppins-regular leading-relaxed">
            We partner with you to create custom websites and software that is
            usable, beautiful, and scalable.
          </p>
          <div className="flex flex-col items-center gap-2 mt-14 animate-bounce">
            <span className="text-black/40 text-xs poppins-light">
              Scroll to Explore
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
        <div className="w-full h-[40vh] mt-2 overflow-hidden flex items-start justify-center">
          <div className="">
            <Image
              src={hero}
              alt="Dashboard Preview"
              width={900}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
