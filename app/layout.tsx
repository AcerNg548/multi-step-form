import SideNav from "@/components/SideNav";
import "./globals.css";
import type { Metadata } from "next";
import bs from "../public/assets/images/bg-sidebar-desktop.svg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Multiple Step Form",
  description: "Code by AcerNg548",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className=" min-h-screen font-primary relative">
          <Image src={bs} alt="bs" fill className="hidden" />
          <div className=" w-screen h-screen bg-magnolia p-4 items-center justify-center flex ">
            <div
              className="w-[65%] h-4/5 bg-alabaster shadow-xl items-start justify-between p-3 flex rounded-xl
        macAir:h-[70%] 
        "
            >
              <div
                className="w-[30%] h-full bg-[url('http://localhost:3000/_next/static/media/bg-sidebar-desktop.e8870ab3.svg')]
            bg-contain bg-no-repeat rounded-xl items-center justify-start p-4 relative"
              >
                <div className="absolute font-medium text-lightGray  flex flex-col gap-10 ">
                  <SideNav></SideNav>
                </div>
              </div>

              <div
                className="w-[70%] h-full bg-transparent rounded-xl items-center justify-center p-4 px-8 mr-10
          macAir:mr-12
          "
              >
                {children}
              </div>
            </div>

            <p className="absolute bottom-3 left-10 text-alabaster bg-pastelBlue p-2 rounded-md text-[10px]">
              Challenge by{" "}
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
              >
                Frontend Mentor
              </a>
            </p>
            <p className="absolute bottom-3  text-alabaster bg-pastelBlue p-2 rounded-md text-[10px] right-10">
              Code by <a href="#">AcerNg548</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
