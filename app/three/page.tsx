"use client";
import React, { useState } from "react";
import { motion as m } from "framer-motion";
import AddOn from "@/components/AddOn";
import Link from "next/link";

export default function three() {
  const [isSubYearSelected, setIsSubYearSelected] = useState(false);

  return (
    <m.div
      className="flex flex-col h-full relative ml-5 "
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
    >
      <div className="flex flex-col">
        <h2 className="font-extrabold text-[28px] text-marineBlue ">
          Pick add-ons
        </h2>
        <p className="font-medium text-coolGray">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="w-[80%]">
        <AddOn isSubYearSelected={isSubYearSelected} />
      </div>
      <m.button
        className="text-coolGray absolute bottom-2 text-[14px]
        hover:text-marineBlue font-semibold"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href={"/two"}>Go back</Link>
      </m.button>
      <button
        className="bg-marineBlue p-2 px-4  rounded-lg right-28
        hover:bg-[#174a8b]  text-alabaster absolute bottom-0 text-[14px]"
      >
        Next step
      </button>
    </m.div>
  );
}
