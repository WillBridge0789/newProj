import React from "react";
import { ReactTyped, Typed } from "react-typed";

const Hero = () => {
  // const [typed, setTyped] = (React.useState < Typed) | (undefined > []);
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#c53878] font-bold p-2">Growing with code</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Software Developer
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Development in
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={[
              "JavaScript",
              "React",
              "Tailwind",
              "Python",
              "Django",
              "REST API",
              "SQL",
              "PostgreSQL",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Ideating solutions to problems everyday
        </p>
        <button className="bg-[#c53878] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#210e09]">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Hero;
