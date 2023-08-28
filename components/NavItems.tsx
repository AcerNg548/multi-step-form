"use client";
import { twMerge } from "tailwind-merge";

import Link from "next/link";

interface NavItemsProps {
  label: string;
  descr: string;
  number: number;
  active?: boolean;
  href: string;
}
const NavItems: React.FC<NavItemsProps> = ({
  label,
  descr,
  number,
  active,
  href,
}) => {
  return (
    <Link
      href={href}
      className="flex flex-row gap-4 items-center font-primary pointer-events-none"
    >
      <div
        className={twMerge(
          `flex w-8 h-8 text-[12px] items-center justify-center rounded-full bg-none border font-semibold text-alabaster
         border-lightBlue`,
          active && "bg-lightBlue border-none  text-marineBlue",
        )}
      >
        <h2>{number}</h2>
      </div>

      <div className="flex flex-col items-start">
        <p className="font-semibold text-[12px] text-coolGray">{label}</p>
        <h2 className="font-black text-[14px] ">{descr}</h2>
      </div>
    </Link>
  );
};

export default NavItems;
