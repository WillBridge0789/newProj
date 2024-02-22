import React from "react";
import Laptop from "../assets/laptop_1.jpg";

const Info = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={Laptop}
          alt="Inspire Laptop"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#c53878] font-bold ">KEEPING THAT DRIVE</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Build Something Everyday
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="bg-[#210e09] text-[#c53878] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
