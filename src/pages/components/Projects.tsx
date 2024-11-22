import React from "react";

const Projects: React.FC = () => {
  return (
    <>
      <div className="w-full h-auto py-16 bg-orange-200">
        {/* Heading */}
        <h1 className="text-center pb-3 font-bold text-2xl md:text-3xl">
          Featured <span className="text-orange-500">Projects</span>
        </h1>
        <p className="text-center px-6 md:px-20 lg:px-60 pb-10 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod
          officiis in autem! Ipsum repellendus molestiae quod quis vitae eaque
          fuga assumenda quas, delectus atque dolor aliquid velit ea. Quis.
        </p>

        {/* Project Cards */}
        <div className="flex flex-wrap justify-center gap-8 px-6">
          {/* Project 1 */}
          <div className="w-full md:w-[48%] lg:w-[45%] bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-60 object-cover"
              src="ui-ux.jpg"
              alt="Branding & Design"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-orange-700">
                Branding & Design
              </h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                debitis aliquid, eius veritatis quod ullam.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="w-full md:w-[48%] lg:w-[45%] bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-60 object-cover"
              src="ux.jpeg"
              alt="UI & UX"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-orange-700">UI & UX</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                debitis aliquid, eius veritatis quod ullam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
