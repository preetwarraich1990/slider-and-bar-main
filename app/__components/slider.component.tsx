import { useState } from "react";
import { motion } from "framer-motion";

export const SliderComponent = () => {
  const [sliderValue, setSliderValue] = useState<number>(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const circleVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: sliderValue / 10,
      transition: { duration: 1 },
    },
  };

  const handleChange = (value: number) => {
    setSliderValue(value);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-8 bg-color-1 p-8">
      <div className="w-48 h-48 rounded-full border-2 border-gray-400 border-dotted  flex justify-center items-center">
        <div className="w-40 h-40 relative">
          <svg className="w-full h-full" viewBox="0 0 32 32">
            <motion.circle
              cx="16"
              cy="16"
              r="15"
              fill="#466d7c"
              strokeWidth="2"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            />
            <motion.circle
              cx="16"
              cy="16"
              r="15"
              fill="none"
              strokeWidth="2"
              stroke="#fff"
              strokeLinecap="round"
              strokeDasharray="94"
              initial="hidden"
              animate="visible"
              variants={circleVariants}
              data-testid="animated-circle"
            />
          </svg>
          <motion.span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white">
            {sliderValue}
          </motion.span>
        </div>
      </div>
      <div className="w-44 mx-auto text-center">
        <motion.input
          type="range"
          min={1}
          max={10}
          value={sliderValue}
          onChange={(e) => handleChange(parseInt(e.target.value))}
          className="w-full range accent-color-3"
        />
      </div>
    </div>
  );
};
