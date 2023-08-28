"use client";
import Image from "next/image";

interface SubsMonthProps {
  iconLink: string;
  plan: string;
  price: number;
  selected: boolean;
  onSelect: () => void;
}

const SubMonth: React.FC<SubsMonthProps> = ({
  iconLink,
  plan,
  price,
  selected,
  onSelect,
}) => {
  return (
    <div
      className={`flex flex-col items-start border-2 p-3 w-[30%] rounded-lg hover:border-purplishBlue border-lightGray
       ${selected ? "bg-lightBlue/20 border-purplishBlue" : "bg-transparent"}`}
      onClick={onSelect}
    >
      <Image
        src={iconLink}
        alt="icon"
        width={30}
        height={30}
        className="mb-10"
      />
      <p className="font-bold text-marineBlue text-[12px]">{plan}</p>
      <span className="text-coolGray text-[11px]">${price}/mo</span>
    </div>
  );
};

export default SubMonth;
