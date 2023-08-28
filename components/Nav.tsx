"use client";

import { twMerge } from "tailwind-merge";

interface NavProps {
  children: React.ReactNode;
  className?: string;
}

const Nav: React.FC<NavProps> = ({ children, className }) => {
  return <div className={twMerge(``, className)}>{children}</div>;
};

export default Nav;
