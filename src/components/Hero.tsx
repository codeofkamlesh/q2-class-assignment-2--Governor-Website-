import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-wrap justify-between items-start bg-slate-50 min-h-[640px] w-full mt-24 overflow-hidden">

      <Image
        className="absolute top-5 left-8"
        src="/logotop.png"
        alt="logo of sindh gov"
        width={100}
        height={100}
      />

      <div className="flex justify-between ">
      <div className="flex flex-col justify-center max-w-[50%] mx-16 mt-20 space-y-4">
        <h1 className="text-6xl font-black text-sky-800">Governor Sindh</h1>
        <h2 className="text-4xl text-sky-800 font-semibold">
          Kamran Khan Tessori
        </h2>
        <h2 className="text-2xl font-bold text-sky-500">Certified Cloud</h2>
        <h2 className="text-2xl font-bold text-sky-500">
          Applied Generative AI Engineer (GenEng)
        </h2>
        <p className="text-xl font-bold text-sky-800">
          Earn up to $5,000 / month
        </p>
        <p className="text-xl font-bold text-sky-800">
          Now admissions are open in Hyderabad
        </p>


        <div className="flex items-center space-x-10 mt-6">
          <button className="font-black text-xl text-white py-2 px-6 bg-sky-800 rounded hover:bg-sky-900 transition">
            Apply Now
          </button>
          <div className="flex flex-col items-center">
            <p className="font-black text-2xl text-sky-800">562,143</p>
            <p className="text-sky-800">Accepted Applications</p>
          </div>
        </div>
      </div>


      <div className=" flex-grow flex justify-center mt-10">
        <Image
          className="h-auto w-auto max-w-[100%] max-h-[550px] object-contain "
          src="/governor.png"
          alt="governor pic"
          width={1000}
          height={1212}
        />
      </div>
      </div>
    </div>
  );
};

export default Hero;
