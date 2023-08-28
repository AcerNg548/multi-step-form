"use client";
import React from "react";
import { useState } from "react";

interface AddOnMonthProps {
  service: string;
  description: string;
  price: number;
}

const AddOnMonth: React.FC<AddOnMonthProps> = ({
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
        <span className="text-[11px] text-purplishBlue font-semibold ">
          +${price}/mo
        </span>
      </div>
    </div>
  );
};

export default AddOnMonth;
