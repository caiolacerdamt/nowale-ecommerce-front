import { useState } from "react";
import StarOutline from "./icons/StarOutline";
import StarSolid from "./icons/StarSolid";

export default function StarsRating({
  defaultHowMany = 0,
  disabled,
  size = "md",
  onChange = () => {},
}) {
  const [howMany, setHowMany] = useState(defaultHowMany);
  const five = [1, 2, 3, 4, 5];

  function handleStarClick(n) {
    if (disabled) {
      return;
    }
    setHowMany(n);
    onChange(n);
  }

  return (
    <div className="flex items-center h-[1.1rem] mb-4 gap-1">
      {five.map((n) => (
        <>
          <button
            disabled={disabled}
            size={size}
            onClick={() => handleStarClick(n)}
            className="text-gray-900 h-5 w-5"
          >
            {howMany >= n ? <StarSolid /> : <StarOutline />}
          </button>
        </>
      ))}
    </div>
  );
}
