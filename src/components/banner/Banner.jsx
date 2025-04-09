import React from 'react';
import './banner.css';

const Banner = () => {
  return (
    <div className="banner flex items-center">
      <div className="text-white w-11/12 mx-auto space-y-5">
        <h1 className="font-bold text-5xl">
          Bid on Unique Items from <br /> Around the World
        </h1>
        <p className="text-xl text-[#DAC5C5] font-semibold">
          Discover rare collectibles, luxury goods, and vintage <br /> treasures
          in our curated auctions
        </p>
        <button className="btn font-semibold ">Explore Auctions</button>
      </div>
    </div>
  );
};

export default Banner;
