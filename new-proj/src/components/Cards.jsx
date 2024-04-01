import React from "react";
import House from '../assets/house.png'
import Fund from '../assets/fund.png'
import People from '../assets/people.png'

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full ">
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={People} alt='' />
            <h2>Connect with People</h2>
            <p></p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
