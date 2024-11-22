import React from "react";

const Hero: React.FC = () => {
  return (
    <>
      <div className="w-full bg-orange-200 py-16 md:py-40 relative">
        {/* Image Section */}
        <div className="flex justify-center md:justify-start">
          <img
            className="rounded-md h-60 m-7 shadow-orange-500 w-60 md:h-80 md:w-80 lg:h-96 lg:w-96 transform -rotate-3"
            src="/hero22.webp"
            alt="Hero Image"
          />
        </div>

        {/* Text Section */}
        <div className="mt-8 md:mt-0 md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:right-16 text-center md:text-right px-6">
          <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl leading-tight">
            <span className="text-orange-500">Code</span> with Purpose. <br />
            Design with <span className="text-red-400">Heart.</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
