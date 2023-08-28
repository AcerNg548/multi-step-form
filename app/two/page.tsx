"use client";
import React, { useState } from "react";
import { motion as m } from "framer-motion";
import Billing from "@/components/Billing";
import Link from "next/link";

export default function PageTwo() {
  const [isPlanSelected, setIsPlanSelected] = useState(false);
  const [isSubYearSelected, setIsSubYearSelected] = useState(false);

  return (
    <m.div
      className="flex flex-col h-full ml-5 relative"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
    >
      <div className="flex flex-col">
        <h2 className="font-extrabold text-[24px] text-marineBlue ">
          Select your plan
        </h2>
        <p className="font-medium text-[16px] text-coolGray">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div>
        <Billing
          isPlanSelected={isPlanSelected}
          setIsPlanSelected={setIsPlanSelected}
          setIsSubYearSelected={setIsSubYearSelected}
        />
      </div>
      <m.button
        className="text-coolGray absolute bottom-2 text-[14px]
        hover:text-marineBlue font-semibold"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href={"/"}>Go back</Link>
      </m.button>
      <m.button
        className={`bg-marineBlue p-2 px-4 rounded-lg hover:bg-[#174a8b] text-alabaster absolute bottom-0 right-28 text-[14px] ${
          isPlanSelected ? "opacity-100" : "pointer-events-none opacity-50"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href="/three">Next step</Link>
      </m.button>
    </m.div>
  );
}
