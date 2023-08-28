"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Nav from "./Nav";
import NavItems from "./NavItems";

interface SideNavProps {
  children: React.ReactNode;
}

const SideNav: React.FC<SideNavProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "STEP 1",
        descr: "YOUR INFO",
        active: pathname === "/",
        href: "/",
        number: "1",
      },
      {
        label: "STEP 2",
        descr: "SELECT PLAN",
        active: pathname === "/two",
        href: "/two",
        number: "2",
      },
      {
        label: "STEP 3",
        descr: "ADD-ONS",
        active: pathname === "/three",
        href: "/three",
        number: "3",
      },
      {
        label: "STEP 4",
        descr: "SUMMARY",
        active: pathname === "/four",
        href: "/four",
        number: "4",
      },
    ],
    [pathname],
  );

  return (
    <div className="flex h-full">
      <div className="flex flex-col gap-y-8">
        <Nav>
          <div className="flex flex-row items-center gap-x-4 m-2">
            <div className="flex flex-col items-start gap-y-8">
              {routes.map((item) => (
                <NavItems key={item.label} {...item} />
              ))}
            </div>
          </div>
        </Nav>
      </div>
    </div>
  );
};

export default SideNav;
