const ToggleSwitch: React.FC<{
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isChecked, setIsChecked }) => {
  const handleToggle = () => {
    setIsChecked(!isChecked); // Toggle the state
  };

  return (
    <label className="flex items-center cursor-pointer">
      <span
        className={`text-[12px] font-semibold mr-6 ${
          isChecked ? "text-coolGray" : "text-marineBlue"
        }`}
      >
        Monthly
      </span>
      <div className="relative flex items-center ">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div className="inline-flex items-center w-12 h-4 bg-marineBlue rounded-full shadow-inner p-3"></div>
        <div
          className={`absolute w-4 h-4 bg-alabaster rounded-full ml-1 shadow-md transform ${
            isChecked ? "translate-x-6" : ""
          } transition-transform`}
        ></div>
      </div>
      <span
        className={`ml-6 text-[12px] font-semibold ${
          isChecked ? "text-marineBlue" : "text-coolGray"
        }`}
      >
        Yearly
      </span>
    </label>
  );
};

export default ToggleSwitch;
