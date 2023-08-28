"use client";
import React from "react";
import { useState } from "react";

interface AddOnYearProps {
  service: string;
  description: string;
  price: number;
}

const AddOnYear: React.FC<AddOnYearProps> = ({
  service,
  description,
  price,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    console.log("Checkbox clicked");
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`flex flex-row items-center bg-alabaster justify-between border border-lightGray rounded-lg p-4
    ${isChecked ? "bg-lightBlue/20" : "bg-alabaster"}`}
    >
      <div>
        <input
          type="checkbox"
          required
          className="w-4 h-4 border-coolGray rounded text-purplishBlue "
          onChange={handleCheckboxChange}
        />
      </div>
      <div>
        <p className="font-semibold text-marineBlue text-[14px] ">{service}</p>
        <p className="font-medium text-coolGray text-[12px] ">{description}</p>
      </div>
      <div>
        <span className="text-[12px] text-purplishBlue ">+${price}/yr</span>
      </div>
    </div>
  );
};

export default AddOnYear;
