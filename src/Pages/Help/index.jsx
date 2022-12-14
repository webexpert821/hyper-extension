import React from "react";

import EmptyState from "../../Assets/img/empty-state-instruction.gif";
import Header from "../../Common/Header";
import "./style.css";

const Help = () => {

  return (
    <div className="w-full bg-[#F5F7F9]  flex gap-8">
      <Header />
      <div className="w-1/2 h-full flex items-center justify-end">
        <img src={EmptyState} alt="EmptyState" className="w-[450px]" />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center gap-5">
        <div className="text-3xl text-gray-500">Try performing a search</div>
        <div className="text-base">
          <ol className="is-style-dotted-list">
            <li>Click on the search bar above</li>
            <li>Enter a product idea</li>
            <li>Click on the icon to view the listing information</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Help;
