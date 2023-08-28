"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import ithankYou from "../public/assets/images/icon-thank-you.svg";
import Confetti from "react-confetti";

const ThankYou = () => {
  const [pieces, setPieces] = useState(200);

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 4000);
  };

  useEffect(() => {
    stopConfetti();
  }, []);

  return (
    <div className="flex w-full  h-full relative  items-center justify-center text-center overflow-hidden ">
      <div className="absolute left-1 -top-5 ">
        <Confetti
          gravity={0.2}
          numberOfPieces={pieces}
          width={2000}
          height={500}
        />
      </div>
      <m.div
        className="flex-col flex items-center justify-center w-[80%] mb-14 "
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <Image src={ithankYou} alt="thankYou" width={70} height={70} />
        <p className="text-marineBlue text-3xl font-extrabold mt-8 mb-4">
          Thank you!
        </p>
        <p className="text-coolGray">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </m.div>
    </div>
  );
};

export default ThankYou;
