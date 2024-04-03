import React from "react";
import House from "../assets/house.png";
import Fund from "../assets/fund.png";
import People from "../assets/people.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={People}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Connect with People
          </h2>
          <p className="text-center text-4xl font-bold">Take Note</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Networking is Key</p>
            <p className="py-2 border-b mx-8">
              Get to know people in your field
            </p>
            <p className="py-2 border-b mx-8">Share common interests</p>
          </div>
          <button className="bg-[#c53878] text-[#210e09] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Connect
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={House}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Live Better</h2>
          <p className="text-center text-4xl font-bold">Where the heart is</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Personal space</p>
            <p className="py-2 border-b mx-8">Freedom</p>
            <p className="py-2 border-b mx-8">Rest your head</p>
          </div>
          <button className="text-[#c53878] bg-[#210e09] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Connect
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Fund} alt="" />
          <h2 className="text-2xl font-bold text-center py-8">
            Economic break
          </h2>
          <p className="text-center text-4xl font-bold">Save</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Money management</p>
            <p className="py-2 border-b mx-8">Treat yourself sometimes</p>
            <p className="py-2 border-b mx-8">"Keep it moving"</p>
          </div>
          <button className="bg-[#c53878] text-[#210e09] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
