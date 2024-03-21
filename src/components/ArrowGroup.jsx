import Arrow from "./Arrow";
import { FaArrowRight, FaArrowLeft, FaArrowDown } from "react-icons/fa";
function ArrowGroup({ handleArrows }) {
  const handleClick = (arrow) => {
    handleArrows(arrow);
  };
  return (
    <div className="flex gap-1 justify-center">
      <Arrow
        onClick={() => {
          handleClick("ArrowLeft");
        }}
      >
        <FaArrowLeft />
      </Arrow>
      <Arrow
        onClick={() => {
          handleClick("ArrowDown");
        }}
      >
        <FaArrowDown />
      </Arrow>
      <Arrow
        onClick={() => {
          handleClick("ArrowRight");
        }}
      >
        <FaArrowRight />
      </Arrow>
    </div>
  );
}

export default ArrowGroup;
