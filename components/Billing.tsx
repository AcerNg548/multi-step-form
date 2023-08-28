"use client";
import React, { useState } from "react";
import SubMonth from "./SubMonth";
import SubYear from "./SubYear";
import ToggleSwitch from "./ToggleSwitch";
import iarcade from "../public/assets/images/icon-arcade.svg";
import iadvanced from "../public/assets/images/icon-advanced.svg";
import ipro from "../public/assets/images/icon-pro.svg";

interface BillingProps {
  isPlanSelected: boolean,
  setIsPlanSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSubYearSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const Billing: React.FC<BillingProps> = ({
  setIsPlanSelected,
  setIsSubYearSelected,
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleSelect = (plan: string) => {
    setSelected(plan);
    setIsPlanSelected(true);
    setIsSubYearSelected(isChecked); // Set isSubYearSelected based on the ToggleSwitch state
  };

  

  return (
    <div className="mt-6 flex flex-col gap-5 justify-between bg-transparent w-[80%]">
      <div className="flex rounded-md items-center p-1">
        <div className="w-full flex flex-row justify-between">
          {isChecked ? (
            <SubYear
              iconLink={iarcade}
              plan="Arcade"
              price={90}
              selected={selected === "Arcade"}
              onSelect={() => handleSelect("Arcade")}
            />
          ) : (
            <SubMonth
              iconLink={iarcade}
              plan="Arcade"
              price={9}
              selected={selected === "Arcade"}
              onSelect={() => handleSelect("Arcade")}
            />
          )}

          {isChecked ? (
            <SubYear
              iconLink={iadvanced}
              plan="Advanced"
              price={120}
              selected={selected === "Advanced"}
              onSelect={() => handleSelect("Advanced")}
            />
          ) : (
            <SubMonth
              iconLink={iadvanced}
              plan="Advanced"
              price={12}
              selected={selected === "Advanced"}
              onSelect={() => handleSelect("Advanced")}
            />
          )}

          {isChecked ? (
            <SubYear
              iconLink={ipro}
              plan="Pro"
              price={150}
              selected={selected === "Pro"}
              onSelect={() => handleSelect("Pro")}
            />
          ) : (
            <SubMonth
              iconLink={ipro}
              plan="Pro"
              price={15}
              selected={selected === "Pro"}
              onSelect={() => handleSelect("Pro")}
            />
          )}
        </div>
      </div>
      <div className="flex justify-center bg-lightGray/20  py-3 rounded-lg">
        <ToggleSwitch isChecked={isChecked} setIsChecked={setIsChecked} />
      </div>
    </div>
  );
};

export default Billing;
