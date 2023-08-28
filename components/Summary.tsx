"use client";
import React from "react";

const Summary = () => {
  return (
    <div className="flex flex-col h-full relative ml-5 ">
      <div className="flex flex-col">
        <h2 className="font-extrabold text-[28px] text-marineBlue ">
          Finishing up
        </h2>
        <p className="font-medium text-coolGray">
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <div></div>

      <div></div>

      <button
        className="text-coolGray absolute bottom-2 text-[14px]
        hover:text-marineBlue font-semibold
        "
      >
        Go back
      </button>

      <button
        className="bg-purplishBlue p-2 px-4  rounded-lg right-28
          hover:bg-[#938ef2]  text-alabaster absolute bottom-0 text-[14px]
           
          "
      >
        Confirm
      </button>
    </div>
  );
};

export default Summary;
