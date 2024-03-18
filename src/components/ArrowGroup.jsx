import Arrow from "./Arrow";
import { FaArrowRight, FaArrowLeft, FaArrowDown } from "react-icons/fa";
function ArrowGroup() {
  const handleClick = (arrow) => {
    console.log(arrow);
  };
  return (
    <div className="flex gap-1 justify-center">
      <Arrow
        onClick={() => {
          handleClick("left");
        }}
      >
        <FaArrowLeft />
      </Arrow>
      <Arrow
        onClick={() => {
          handleClick("down");
        }}
      >
        <FaArrowDown />
      </Arrow>
      <Arrow
        onClick={() => {
          handleClick("right");
        }}
      >
        <FaArrowRight />
      </Arrow>
    </div>
  );
}

export default ArrowGroup;
