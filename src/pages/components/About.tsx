export default function About() {
  return (
    <>
      <div className="py-16 flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 px-6 bg-orange-100">
        {/* Image Container */}
        <div className="relative w-64 md:w-80 lg:w-96 flex-shrink-0 p-2">
          <img
            src="/Profile-Picture.jpg" // Replace with your image path
            alt="Profile Image"
            className="rounded-md shadow-lg transform -rotate-6 bg-orange-300 shadow-orange-400 border-gray-300 w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="text-gray-700 max-w-xl px-5 text-center md:text-left">
          <h1 className="mb-3 font-medium text-2xl md:text-3xl">
            Hi, I'm{" "}
            <span className="font-bold text-3xl md:text-4xl text-orange-400">
              Hamza
            </span>{" "}
            the Front-End Developer
          </h1>
          <p className="mb-4">
            I grew up in{" "}
            <span className="text-amber-600 font-medium">Karachi</span>, and my
            experiences have shaped me into a creative individual eager to
            explore and learn.
          </p>
          <p className="mb-4">
            I've successfully completed my Matriculation and am eager to delve
            deeper into the world of technology. My ongoing learning journey at{" "}
            <span className="text-red-400 font-medium">GIAIC</span>, focusing
            on <span className="text-amber-700 font-medium">Agentic AI</span>,
            has further expanded my knowledge and opened up exciting
            possibilities.
          </p>
        </div>
      </div>
    </>
  );
}
