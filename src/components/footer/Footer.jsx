import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-center my-10 ">
      <div className="text-center space-y-3">
        <h3 className=" text-3xl">
          <span className="text-[#003EA4] font-semibold">Auction</span>{' '}
          <span className="text-[#FFD337] font-bold">Gallery</span>
        </h3>
        <div className=" flex justify-around font-semibold">
          <p>Bid.</p>
          <p>Win.</p>
          <p>Win.</p>
        </div>
        <div className=" flex justify-around gap-5">
          <p>Home</p>
          <p>Auctions</p>
          <p>Categories</p>
          <p>How to works</p>
        </div>
        <p>© 2025 AuctionHub. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
