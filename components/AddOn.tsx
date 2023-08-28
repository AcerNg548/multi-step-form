"use client";
import React from "react";
import AddOnMonth from "./AddOnMonth";
import AddOnYear from "./AddOnYear";

interface AddOnProps {
  isSubYearSelected: boolean;
}

const AddOn: React.FC<AddOnProps> = ({ isSubYearSelected }) => {
  return (
    <div className="w-full mt-5 flex flex-col gap-4">
      {isSubYearSelected ? (
        <>
          <AddOnYear
            description="Access to multiplayer games"
            price={10}
            service="Online service"
          />
          <AddOnYear
            description="Extra 1TB of cloud save"
            price={20}
            service="Larger storage"
          />
          <AddOnYear
            description="Custom theme on your profile"
            price={20}
            service="Customizable profile"
          />
        </>
      ) : (
        <>
          <AddOnMonth
            description="Access to multiplayer games"
            price={1}
            service="Online service"
          />
          <AddOnMonth
            description="Extra 1TB of cloud save"
            price={2}
            service="Larger storage"
          />
          <AddOnMonth
            description="Custom theme on your profile"
            price={2}
            service="Customizable profile"
          />
        </>
      )}
    </div>
  );
};

export default AddOn;
