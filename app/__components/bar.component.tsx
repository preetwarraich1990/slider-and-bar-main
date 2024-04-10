import React, { useState } from "react";

const ScaleBar: React.FC = () => {
  const [selected, setSelected] = useState<number>(1);

  const handleSelect = (num: number) => {
    setSelected(num);
  };

  const getLevelText = (num: number): string => {
    if (num <= 1) {
      return "Low";
    } else if (num <= 3) {
      return "Good";
    } else {
      return "High";
    }
  };

  return (
    <div className="flex flex-col items-center justify-between gap-4 bg-color-1 p-8">
      {<span>{getLevelText(selected)}</span>}
      {[1, 2, 3, 4, 5].reverse().map((num, i) => (
        <div
          key={num}
          style={{ width: num * 50 + "px" }}
          className={`scale-bar-item-3 h-7 flex items-center justify-center border border-gray-400 rounded-tl-xl rounded-tr-xl cursor-pointer rounded-b-3xl ${
            num <= selected ? "bg-white text-white" : "bg-bar-1"
          }`}
          data-testid={`bar-${num}`}
          onClick={() => handleSelect(num)}
        />
      ))}
    </div>
  );
};

export default ScaleBar;
